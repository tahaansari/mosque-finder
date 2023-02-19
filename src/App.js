import "./App.css";

function App() {
  if ("geolocation" in navigator) {
    console.log("Available");
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  } else {
    console.log("Not Available");
  }
  return (
    <div className="App">
      <h1>Mosque Finder</h1>
    </div>
  );
}

export default App;
