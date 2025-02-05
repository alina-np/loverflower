import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "shared/lib/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
