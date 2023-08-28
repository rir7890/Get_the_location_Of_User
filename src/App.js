import "./App.css";
import { useState } from "react";
import axios from "axios";
console.log(process.env.REACT_APP_API_KEY);
function App() {
  const apiURL = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_API}`;
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoding] = useState(false);
  const [result, setResult] = useState(false);

  // useEffect(() => {
  //   const getUserLocationFromAPI = async () => {
  //     try {
  //       const response = await axios.get(apiURL);
  //       console.log(response.data);
  //       setCity(response.data.city);
  //       setCountry(response.data.country);
  //     } catch (error) {
  //       // setError("Something went wrong getting Geolocation from API!");
  //       // return <h1>Something went wronf with api</h1>;
  //       return <h1>something went wrong with api</h1>;
  //     }
  //   };

  //   setTimeout(() => {
  //     getUserLocationFromAPI();
  //     setLoding(true);
  //   }, 3000);

  //   setLoding(false);
  // }, []);
  const getLocation = () => {
    const getUserLocationFromAPI = async () => {
      try {
        const response = await axios.get(apiURL);
        console.log(response.data);
        setCity(response.data.city);
        setCountry(response.data.country);
      } catch (error) {
        // setError("Something went wrong getting Geolocation from API!");
        // return <h1>Something went wronf with api</h1>;
        return <h1>something went wrong with api</h1>;
      }
    };

    setLoding(true);
    setTimeout(() => {
      getUserLocationFromAPI();
      setLoding(false);
      setResult(true);
    }, 4000);
  };

  return (
    <div className="App">
      {result && (
        <p className="result">
          Your country is {country} and City is {city}
        </p>
      )}

      <button onClick={getLocation} className="ShowLocation">
        {loading === true ? "Loading.." : "Show My location"}
      </button>
    </div>
  );
}

export default App;
