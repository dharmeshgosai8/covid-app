import React from 'react';
import './App.css';

const StateData = props => {
    console.log(props);
  return (
      <div className="overlay">
          <div className="city">
              <span className="cancel" onClick={() => props.clickEvent(false)}>X</span>
            <h3>{props.st} Data</h3>
              <ul>
                {props.setData.map(data =>(
                    <li key={data.district}>
                        <div>
                            <h5>{data.district}</h5>
                            <p>Confirmed Case : {data.confirmed}</p>
                            <p>Active Case : {data.active}</p>
                            <p>Death : {data.deceased}</p>
                            <p>Recovered : {data.recovered}</p>
                        </div>
                    </li>
                ))}
                </ul>
          </div>
      </div>
  );
  

}

export default StateData;
