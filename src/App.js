import React, { useState } from "react";
import "./App.css";
// ★ 1. 作成したコンポーネントをインポート
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 天気取得のロジックはApp.jsに残す
  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) {
      alert("都市名を入力してください。");
      return;
    }
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
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>天気予報アプリ</h1>

        {/* ★ 2. WeatherFormコンポーネントを呼び出し、必要なpropsを渡す */}
        <WeatherForm city={city} setCity={setCity} getWeather={getWeather} />

        {/* ★ 3. WeatherDisplayコンポーネントを呼び出し、必要なpropsを渡す */}
        <WeatherDisplay loading={loading} error={error} weather={weather} />
      </header>
    </div>
  );
}

export default App;
