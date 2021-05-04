import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv, select } from 'd3';

import { VictoryBar, VictoryChart} from 'victory';

const row = d => {
  d.A_temp = +d.A_temp;
  return d;
};

const Weather = () => {
  const [data, setData] = useState([]); 
  
  
  useEffect(() => {
    csv('climate_data.csv', row).then(setData);
  }, []);
  return (
    <VictoryChart
      
      //style={{tickLabels: {fontSize: 5, padding: 5}}}
      width ='600'
      height='250'
      domainPadding={15}
      
      padding={{ top: 20, bottom: 50, left: 80, right: 80 }}
    >
      <VictoryBar data = {data} x="country" y="A_temp"/>
    </VictoryChart>
  );
};

//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
export default Weather;
