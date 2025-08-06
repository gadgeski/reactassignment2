import React, { useState, useCallback } from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory"; // ★ 1. SearchHistoryをインポート

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]); // ★ 2. 検索履歴を保存するstateを追加

  // ★ 3. 天気取得ロジックを再利用可能な関数に切り出し
  // useCallbackを使って、不要な再生成を防ぎパフォーマンスを最適化
  const fetchWeather = useCallback(async (targetCity) => {
    if (!targetCity) return; // 対象の都市がなければ何もしない

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

      // ★ 4. 成功した場合、履歴を更新
      setHistory((prevHistory) => {
        // 重複を除き、新しい都市を先頭に追加した配列を返す
        const newHistory = [
          targetCity,
          ...prevHistory.filter((c) => c !== targetCity),
        ];
        // 履歴は最新5件までにする
        return newHistory.slice(0, 5);
      });
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []); // useCallbackの第二引数に空配列を指定し、関数を初回レンダリング時のみ生成

  // フォーム送信時の処理
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city); // 入力されているcityで天気取得
  };

  // 履歴クリック時の処理
  const handleHistoryClick = (historyCity) => {
    setCity(historyCity); // フォームの入力値も更新
    fetchWeather(historyCity); // クリックされた都市で天気取得
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>天気予報アプリ</h1>

        <WeatherForm
          city={city}
          setCity={setCity}
          getWeather={handleFormSubmit} // 渡す関数を更新
        />

        <WeatherDisplay loading={loading} error={error} weather={weather} />

        {/* ★ 5. SearchHistoryコンポーネントを描画 */}
        <SearchHistory history={history} onHistoryClick={handleHistoryClick} />
      </header>
    </div>
  );
}

export default App;
