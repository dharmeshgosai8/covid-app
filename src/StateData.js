import React from 'react';
import './App.css';

const StateData = props => {
    // console.log(props)
    // console.log(props.setData)    
    // props.setData.map((data) => (
        // eslint-disable-next-line
    //  totalConfirm += (data.confirmed),
    //  totalActive += (data.active),
    //  totalDeath += (data.deceased),
    //  totalRecovered += (data.recovered)
    //  ))
        

  return (
      <div className="overlay">
          <div className="city">
              <span className="cancel" onClick={() => props.clickEvent(false)}>X</span>
            <h3>{props.st} Data</h3>
              
              <ul>                 
                    {
                    Object.entries(props.setData).map((data) => ( 
                    <li key={data[0]}>
                        <div>                            
                            <h5>{data[0]}</h5>                            
                            <p>Active: {data[1].active}</p>
                            <p>Confirmed: {data[1].confirmed}</p>
                            <p>Deceased: {data[1].deceased}</p>
                            <p>Recovered: {data[1].recovered}</p> 
                        </div>
                    </li>
                    ))} 
                </ul>
          </div>
      </div>
  );
}

export default StateData;
