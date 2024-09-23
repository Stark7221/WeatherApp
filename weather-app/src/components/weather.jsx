import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    const apiKey = "a4f42ef0235d9e41209421884fccdf3d"; 
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},TR&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError(""); 
    } catch (err) {
      setError("Şehir bulunamadı. Lütfen doğru bir şehir ismi girin.");
      setWeatherData(null); 
    }
  };

  return (
    <div style={{ margin: "20px", fontSize: "18px" }}>
      <h1>Hava Durumu</h1>
      <input
        type="text"
        placeholder="Şehir ismini girin"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <button
        onClick={fetchWeather}
        style={{ padding: "10px", fontSize: "16px", marginLeft: "10px" }}
      >
        Verileri Getir
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{display:"flex", justifyContent:"center",color:"black"}}>{weatherData.name}</h2>
          <p style={{display:"flex", justifyContent:"center",color:"black"}}>Sıcaklık: {weatherData.main.temp} °C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
