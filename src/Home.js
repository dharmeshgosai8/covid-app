import React from 'react';
import TotalCount from './TotalCount'
import './App.css';

const Home = props => {
    // console.log(props);
    // var zeroCnt;
    // props.items.map((data) => (
    //     <div>

    //         {console.log(data.districtData)}
    //     </div>
    //     ))
    
    return(
        <div>
        {
            props.items.map(item =>(

                <li key={item.statecode}>

                    <div className="text" title={item.state} 
                    onClick={() => getData(item.districtData, item.state)}
                    >
                        {item.state}
                        <span><TotalCount count={item.districtData} /></span>
                    </div>
                </li>
            ))
        } 
        </div>   
    );
}

export default Home;