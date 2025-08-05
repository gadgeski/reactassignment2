import React from "react";

// 親コンポーネント(App.js)から props を受け取る
function WeatherForm({ city, setCity, getWeather }) {
  return (
    // onSubmitで、親から渡されたgetWeather関数を実行する
    <form onSubmit={getWeather}>
      <input
        type="text"
        placeholder="都市名を入力 (例: London)"
        value={city} // 表示する値は親の`city` state
        onChange={(e) => setCity(e.target.value)} // 入力時に親の`setCity`関数を実行
      />
      <button type="submit">天気を取得</button>
    </form>
  );
}

export default WeatherForm;
