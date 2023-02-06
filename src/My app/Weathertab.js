import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactDOM } from "react";
import Weatherformat from "./Weatherformat";

export default function Weathertab(props) {
  
  let maps = [];
  console.log("I'm Weathertab Function");
  const [posts, setPosts] = useState([]);
  const [isLoading, setisloading] = useState(false);

  const fetchData = async() =>{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.values}&appid=837a1f6fe49d8aeef70302d5035c47bd`)
    if(response.ok){
      const data = await response.json()
      setisloading(true);
      setPosts(data);
    }else{
      throw new Error("Wrong Input")
    }
  }
  useEffect(() => {
    console.log("Inside The useEffect Condition");
    fetchData();

      // for(let i=0;i<39;i++){
      //   if((posts.list[i].dt_txt).includes("00:00:00")){
      //     maps.push(i);
      //   }
      // }   
      // console.log(maps);


  },[props]);
  
  console.log(posts)


  
    return (
      <div>

     {isLoading && (
    <div className="Weatherdata">
    <Weatherformat
    condition={posts.list[0].weather[0].description} 
    dates={posts.list[0].dt_txt}
    HT={posts.list[0].main.temp_max}
    LT={posts.list[0].main.temp_max}
    H={posts.list[0].main.humidity}
    SRT={posts.city.sunrise}
    SST={posts.city.sunset}
    />
    <Weatherformat
    condition={posts.list[9].weather[0].description} 
    dates={posts.list[9].dt_txt}
    HT={posts.list[9].main.temp_max}
    LT={posts.list[9].main.temp_max}
    H={posts.list[9].main.humidity}
    SRT={posts.city.sunrise}
    SST={posts.city.sunset}
    />
    <Weatherformat
    condition={posts.list[19].weather[0].description} 
    dates={posts.list[19].dt_txt}
    HT={posts.list[19].main.temp_max}
    LT={posts.list[19].main.temp_max}
    H={posts.list[19].main.humidity}
    SRT={posts.city.sunrise}
    SST={posts.city.sunset}
    />
    <Weatherformat
    condition={posts.list[28].weather[0].description} 
    dates={posts.list[28].dt_txt}
    HT={posts.list[28].main.temp_max}
    LT={posts.list[28].main.temp_max}
    H={posts.list[28].main.humidity}
    SRT={posts.city.sunrise}
    SST={posts.city.sunset}
    />
    <Weatherformat
    condition={posts.list[38].weather[0].description} 
    dates={posts.list[38].dt_txt}
    HT={posts.list[38].main.temp_max}
    LT={posts.list[38].main.temp_max}
    H={posts.list[38].main.humidity}
    SRT={posts.city.sunrise}
    SST={posts.city.sunset}
    /> 
     </div> 
   )} 
    </div>
  )
}
