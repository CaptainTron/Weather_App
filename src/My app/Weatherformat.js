import React from "react";
import sunny from "./Cart/Images/sunny.svg";
import brokenclouds from "./Cart/Images/brokenclouds.svg";
import fewclouds from "./Cart/Images/fewclouds.svg";
import scatteredclouds from "./Cart/Images/scatteredclouds.svg";
import rainy from "./Cart/Images/rainy.svg";
import overcast from "./Cart/Images/overcast.svg";



export default function Weatherformat(props) {

  // let celcius = parseInt(props.HT);
  // let HT = (celcius-32)/1.8;
  // HT = HT.toFixed(2);

  let sunrise = parseInt(props.SRT);
  let name = new Date((3600 + sunrise) * 1000).toUTCString();
  var strDateTime = `${name}`;
  var myDate = new Date(strDateTime);
  let date = myDate.toLocaleString();
  let dates = date.split(" ");
  let showdates = dates[1] + " " + dates[2];

  let sunset = parseInt(props.SST);
  let SSTname = new Date((3600 + sunset) * 1000).toUTCString();
  var SSTstrDateTime = `${SSTname}`;
  var SSTmyDate = new Date(SSTstrDateTime);
  let SSTdate = SSTmyDate.toLocaleString();
  let SSTdates = SSTdate.split(" ");
  let SSTshowdates = SSTdates[1] + " " + SSTdates[2];

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let ddate = props.dates;
let DateMonths = ddate.split(" ")[0];
const d = new Date(DateMonths);
let month = months[d.getMonth()];

let day = d.getDate();
let year = d.getFullYear();
let fulldate = day+" "+month+" "+year

  return (
    <div className="Box">
      <div className="Date_w">{fulldate}</div>
      <div className="boxdatacontainer">
        <div className="Weather_data">
            {props.condition === "clear sky" && <img className="imgsvg" src={sunny}/>}
            {props.condition === "broken clouds" && <img className="imgsvg" src={brokenclouds}/>}
            {props.condition === "few clouds" && <img className="imgsvg" src={fewclouds}/>}
            {props.condition === "scattered clouds" && <img className="imgsvg" src={scatteredclouds}/>}
            {props.condition === "overcast clouds" && <img className="imgsvg" src={overcast}/>}
            {(props.condition).includes("rain") && <img className="imgsvg" src={rainy}/>}
          <p className="condition" style={{ textTransform: "capitalize" }}>
            {props.condition}</p>
        </div>
        <hr></hr>
        <h4>{props.HT} ⁰F</h4>
        <h4>{props.LT} ⁰F</h4>
        <h4>{props.H}%</h4>
        <h4>{showdates}</h4>
        <h4>{SSTshowdates}</h4>
      </div>
    </div>
  );
}
