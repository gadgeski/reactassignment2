# 天気予報アプリ 🌤️

このプロジェクトは、React を使用して作成されたシンプルな天気予報アプリケーションです。ユーザーは都市名を入力することで、その都市の現在の天気情報を取得できます。また、検索履歴が自動で保存され、過去に検索した都市をワンクリックで再検索できます。

このプロジェクトは、React の基本的な概念（コンポーネント、state、props）から、より実践的な機能（API 通信、ローカルストレージへのデータ保存など）までを段階的に学ぶことを目的としています。

## -React weather app interface-

## 主な機能

- **天気検索**: 都市名を入力して、現在の天気、気温、体感温度、風速を取得して表示します。
- **検索履歴**: 検索した都市の履歴を 5 件まで表示します。
- **履歴からの再検索**: 履歴内の都市名をクリックすると、その都市の天気を再度取得できます。
- **履歴の永続化**: 検索履歴はブラウザのローカルストレージに保存されるため、ページを再読み込みしたり、ブラウザを閉じたりしても履歴は消えません。
- **履歴のクリア**: 「履歴をクリア」ボタンで、保存されている検索履歴をすべて削除できます。
- **ローディング・エラー表示**: API と通信中は「ローディング...」と表示し、情報取得に失敗した場合はエラーメッセージを表示します。

---

## 使用技術 💻

- **React**: UI を構築するためのメインライブラリ。
  - **Hooks (`useState`, `useEffect`, `useCallback`)**: コンポーネントの状態管理やライフサイクルイベントの処理に使用。
- **wttr.in API**: 天気情報を取得するための外部 API。
- **Fetch API**: API との通信に使用。
- **CSS**: アプリケーションの基本的なスタイリングに使用。
- **LocalStorage**: 検索履歴をブラウザに永続的に保存するために使用。

---

## プロジェクトの構造 📁

このアプリケーションは、機能ごとにコンポーネントに分割されています。

- `App.js`: アプリケーション全体の **state**（状態）とロジックを管理する親コンポーネントです。
- `components/WeatherForm.js`: ユーザーが都市名を入力し、検索ボタンをクリックするためのフォームコンポーネントです。
- `components/WeatherDisplay.js`: API から取得した天気情報を表示するコンポーネントです。ローディング中やエラー発生時の表示も担当します。
- `components/SearchHistory.js`: 検索履歴の表示と、履歴のクリア機能を持つコンポーネントです。

---

## 使い方 🚀

このプロジェクトをローカル環境で動かすには、以下の手順に従ってください。

1.  **リポジトリをクローンする**:

    ```bash
    git clone <リポジトリのURL>
    ```

2.  **プロジェクトディレクトリに移動**:

    ```bash
    cd <プロジェクト名>
    ```

3.  **依存関係をインストール**:

    ```bash
    npm install
    ```

4.  **開発サーバーを起動**:

    ```bash
    npm start
    ```

    これにより、開発モードでアプリケーションが起動します。
    ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

    ***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
