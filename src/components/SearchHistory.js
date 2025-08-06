import React from "react";

// ★ 1. onClearHistoryをpropsとして受け取る
function SearchHistory({ history, onHistoryClick, onClearHistory }) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <h3>検索履歴</h3>
        {/* ★ 2. クリアボタンを設置 */}
        <button onClick={onClearHistory} className="clear-btn">
          履歴をクリア
        </button>
      </div>
      <ul>
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
