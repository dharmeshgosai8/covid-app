import React , {useState, useEffect} from 'react';
import StateData from './StateData'
import TotalCount from './TotalCount'
import './App.css';

function App() {
  const [error, setError] = useState(null); // show error message
  const [isLoaded, setIsLoaded] = useState(false); // to show loading text
  const [items, setItems] = useState([]);
  const [setData, setDatas] = useState([]);
  const [st, sts] = useState(); // to show state name
  const [clicked, clickEvent] = useState(false);
  // const active = [];
  function getData(data,ds){
    setDatas(data);
    clickEvent(true); 
    sts(ds);
  }  

  useEffect(() =>{
    fetch('https://data.covid19india.org/v4/min/data.min.json')
    .then(res => res.json())
    .then(
      (result)=>{        
        setIsLoaded(true);
        setItems(result);
        
      },(error)=>{
        console.log(error);
        console.log('error');
        setError(error);
      }
    )
  },[])
  if (error) {
    return <div className="App">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  } else {    
  return (
    <div className="App">
      <h2>India Covid-19 Tracker Statewise Data</h2>
      <ul className="statelist clearfix">    
      
        {clicked ? (
          <StateData setData={setData} clickEvent={clickEvent} st={st} />
        ):(null)}

          {
            items.map(item =>            
                              
          <li key={item.statecode}>
              
              <div className="text" title={item.state} onClick={() => getData(item.districtData, item.state)}>
                {item.state} 
                <span><TotalCount count={item.districtData} /></span>
              </div>
            </li>
            
         )          
        }
      </ul>
    </div>
  );
  }

}

export default App;
