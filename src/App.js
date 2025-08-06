import React, { useState, useCallback, useEffect } from "react"; // ★ 1. useEffectをインポート
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // ★ 2. アプリ起動時にlocalStorageから履歴を読み込む
  const [history, setHistory] = useState(() => {
    try {
      const savedHistory = localStorage.getItem("weatherHistory");
      // 保存されたデータがあればそれを使い、なければ空の配列で初期化
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error("Failed to parse history from localStorage", error);
      return [];
    }
  });

  // ★ 3. historyが更新されるたびに、その内容をlocalStorageに保存する
  useEffect(() => {
    localStorage.setItem("weatherHistory", JSON.stringify(history));
  }, [history]); // `history`配列が変更された時だけこの処理を実行

  const fetchWeather = useCallback(async (targetCity) => {
    if (!targetCity) return;

    setLoading(true);
    setWeather(null);
    setError(null);

    try {
      const response = await fetch(`https://wttr.in/${targetCity}?format=j1`);
      if (!response.ok) {
        throw new Error("天気情報の取得に失敗しました。");
      }
      const data = await response.json();
      setWeather(data);

      setHistory((prevHistory) => {
        const newHistory = [
          targetCity,
          ...prevHistory.filter((c) => c !== targetCity),
        ];
        return newHistory.slice(0, 5);
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const handleHistoryClick = (historyCity) => {
    setCity(historyCity);
    fetchWeather(historyCity);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>天気予報アプリ</h1>

        <WeatherForm
          city={city}
          setCity={setCity}
          getWeather={handleFormSubmit}
        />

        <WeatherDisplay loading={loading} error={error} weather={weather} />

        <SearchHistory history={history} onHistoryClick={handleHistoryClick} />
      </header>
    </div>
  );
}

export default App;
