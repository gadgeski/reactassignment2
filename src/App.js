import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  // ★ 1. ローディング状態を管理するstateを追加
  const [loading, setLoading] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();

    if (!city) {
      alert("都市名を入力してください。");
      return;
    }

    // ★ 2. 通信開始前にローディングをtrueにする
    setLoading(true);
    setWeather(null);
    setError(null);

    try {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);

      if (!response.ok) {
        throw new Error(
          "天気情報の取得に失敗しました。都市名を確認してください。"
        );
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      // ★ 3. 通信完了後（成功・失敗問わず）にローディングをfalseにする
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>天気予報アプリ</h1>
        <form onSubmit={getWeather}>
          <input
            type="text"
            placeholder="都市名を入力 (例: London)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">天気を取得</button>
        </form>

        {/* ★ 4. loadingがtrueの時にメッセージを表示 */}
        {loading && <p>ローディング...</p>}

        {error && <p style={{ color: "tomato" }}>{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.nearest_area[0].areaName[0].value}の天気</h2>
            <p>
              <strong>気温:</strong> {weather.current_condition[0].temp_C}°C
            </p>
            <p>
              <strong>天気:</strong>{" "}
              {weather.current_condition[0].weatherDesc[0].value}
            </p>
            <p>
              <strong>体感温度:</strong>{" "}
              {weather.current_condition[0].FeelsLikeC}°C
            </p>
            <p>
              <strong>風速:</strong>{" "}
              {weather.current_condition[0].windspeedKmph} km/h
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
