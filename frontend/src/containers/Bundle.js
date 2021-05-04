(function (React,ReactDOM,d3,victory) {
    'use strict';
  
    var React__default = 'default' in React ? React['default'] : React;
    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  
    const row = d => {
      d.A_temp = +d.A_temp;
      return d;
    };
  
    const App = () => {
      const [data, setData] = React.useState([]);
      
      React.useEffect(() => {
        d3.csv('climate_data.csv', row).then(setData);
      }, []);
      
      return (
        React__default.createElement( Victory.VictoryChart, {
          style: {tickLabels: {fontSize: 120}}, width: '960', height: '500', domainPadding: 100, padding: { top: 10, bottom: 40, left: 80, right: 10 } },
          React__default.createElement( Victory.VictoryBar, { data: data, x: "months", y: "A_temp"})
        )
      );
    };
  
    const rootElement = document.getElementById('root');
    ReactDOM.render(React__default.createElement( App, null ), rootElement);
  
  }(React,ReactDOM,d3,victory));