import './App.css';
import React, {useState, useEffect} from "react";
import Routes from "../src/container/Routes"
import Quiz from "./component/Quiz/Quiz";
import Dashboard from "./container/Dashboard/Dashboard";
import Title from "./component/Title";
import Form from "./component/Form";
import Weather from "./component/Weather";


    function App () {
    
    return (
    <div>
      <Quiz />
    </div>
  );
}

export default App;








// 
// const [weather, setWeather] = useState ([]);


// const getWeather = async () => {
  //   const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=2643744&appid=f885bd63be4cee31828f8694ef884985`);
  //   const data = await apiCall.json();
  //   console.log(data);
  
  


// const getWeather = (props) => {
  //   fetch ("http://api.openweathermap.org/data/2.5/weather?id=2643744&appid=f885bd63be4cee31828f8694ef884985")
  //     .then((response) => response.json())
  //     .then((response) => setWeather(response));
  //   };
  //   useEffect(() => {
    //     getWeather(props);
    //   });
    
    //   console.log(getWeather);
    // {/* <Quiz path ="/"/> */}
    // <Title />
    // <Form getWeather={getWeather}/>
    // <Weather />