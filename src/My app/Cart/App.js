import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import Weathertab from "../Weathertab";
import Weatherimg  from "./Images/weather.svg";
import refreshimg from "./Images/refresh.svg";
import locationimg from "./Images/locationimg.svg";
import findimg from "./Images/findimg.svg";

export default function App(){
    function refreshpage(){
        window.parent.location = window.parent.location.href;
    }
    
    let [date, setdate] = useState("");
    let [Input, setInput] = useState("Gorakhpur");
    function handleKeypress(event){
        if(event.key === "Enter"){
            console.log("Enter Button has been pressed");
            setInput(event.target.value);
        }
    }

    // This will contain lattitude and longituve
    const [location, setlocation] = useState([]);
    function getlattiandlong(event){
        if(event.key==="Enter"){
            console.log("Getting Lattitude and Longitude");
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Input}&appid=837a1f6fe49d8aeef70302d5035c47bd`)
              .then((response) => response.json())
              .then((data) => {
                  setlocation(data.city.coord)
                  setdate(data.list[0].dt_txt)
              })
              .catch((err) => {console.log(err.message)})
        }
    }
    let ddate = date;
    let DateMonths = ddate.split(" ")[0];

    return (
        <div>

            {/* This one for header nav */}
            <div className="Header">
                {/* Weather header */}
                <div className="Weather_header">
                <img src={Weatherimg} width='40' height='40'></img>
                <h1>Weather 99</h1>
                </div>
                {/* Refresh button */}
                <div className="Refresh_btn">
                    <div className="Refreshcont">
                    <img src={refreshimg} onClick={refreshpage} width='30' height='40'></img>
                    <h2> Refresh</h2>
                    </div>
                </div>
            </div>
            {/* Header Nav Ends here */}
            
            {/* This body Container */}
            <div className="container_outerbox">
                {/* This one will be outer cover for Main COntent */}
                <div className="Container_innerbox">
                    {/* Here Header starts that will contain the Name, Lattitude, longitude and SearchCity option */}
                    <div className="aboutCityandsearchbox">
                        {/* This one city information */}
                         <div className="CityInformation">
                        {/* this one city name  */}

                            <div className="Locationinformation">
                            <img src={locationimg} width = '40' height='30'></img>
                            <h2>{Input}</h2>
                            </div>
                            <h4>{location.lat} ºN {location.lon}°E</h4>
                        </div>
                        {/* This one for Search Box */}
                        <div className="Searchcity_box">
                            <input type="text" onKeyDown={handleKeypress} onKeyUp={getlattiandlong} autoFocus placeholder="Search your city here.."></input>
                            <img id="searchImg" src={findimg}/>
                        </div>
                    </div>
                    <hr/>



                    
                    {/*Here We'll show our data to the user*/}
                    {/* Data Container starts from here */}
                    <div className="BoxContainers">

                    {/* this box will contain data */}
                    {/* This box will contain information about data */}
                    <div className="Select_dataBox">
                    <div className="SelectDate">
                    <label>Select Date:</label><br></br>
                    <input type="date" value={DateMonths}></input>
                    </div>
                    <h3>High Temperature</h3>
                    <h3>Low Temperature</h3>
                    <h3>Humidity</h3>
                    <h3>Sunrise Time</h3>
                    <h3>Sunset Time</h3>
                     </div>

                     {/* Weather Data box starts */}
                     
                     <Weathertab values={Input}/>

                    </div>
                </div>
            </div>
        </div>
    )
}