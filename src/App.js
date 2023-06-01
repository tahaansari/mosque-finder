import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [data,setData] = useState([])

  const successCallback = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(()=>{
    const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyA1CNOzDRK_7kj6rKs3q91FemXCfG6ppnE&location=18.9754603,72.8283965&rankby=distance&type=mosque";
    fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        jsonData.results.forEach(element => {
          document.getElementById('data').innerHTML = element.name;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  })

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return (
    <div className="App">
      <h1>List of MosqueFinder</h1>
      {/* <h2>
        Fajr : <span>5.20</span>
      </h2>
      <h2>
        Zuhar : <span>1.30</span>
      </h2>
      <h2>
        Asr : <span>5.15</span>
      </h2>
      <h2>
        Magrib : <span>6.41</span>
      </h2>
      <h2>
        Isha : <span>8.30</span>
      </h2> */}
    </div>
  );
}

export default App;
