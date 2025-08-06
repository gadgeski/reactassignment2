import React from "react";

// 親コンポーネントから`history`配列と`onHistoryClick`関数を受け取る
function SearchHistory({ history, onHistoryClick }) {
  // 履歴が空の場合は何も表示しない
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="history-container">
      <h3>検索履歴</h3>
      <ul>
        {/* history配列をループして、都市名ごとにリスト項目を作成 */}
        {history.map((city) => (
          <li key={city} onClick={() => onHistoryClick(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
