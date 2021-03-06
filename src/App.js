import React from "react";
import GlobaslStyled from "./styles/styled";
import Header from "./components/Header";
import Routes from "./routes";
import { HashRouter } from "react-router-dom";
import history from "./services/history";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter basePath="/" history={history}>
          <Header />
          <Routes />
          <GlobaslStyled />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            transition={Slide}
            className="toast-container"
          />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
