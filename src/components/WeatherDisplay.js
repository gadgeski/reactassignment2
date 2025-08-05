import React from "react";

// 親コンポーネント(App.js)から表示に必要なデータをpropsで受け取る
function WeatherDisplay({ loading, error, weather }) {
  // ローディング中ならメッセージを表示
  if (loading) {
    return <p>ローディング...</p>;
  }

  // エラーがあればメッセージを表示
  if (error) {
    return <p style={{ color: "tomato" }}>{error}</p>;
  }

  // 天気データがあれば結果を表示
  if (weather) {
    return (
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
          <strong>体感温度:</strong> {weather.current_condition[0].FeelsLikeC}°C
        </p>
        <p>
          <strong>風速:</strong> {weather.current_condition[0].windspeedKmph}{" "}
          km/h
        </p>
      </div>
    );
  }

  // 何もなければ何も表示しない
  return null;
}

export default WeatherDisplay;
