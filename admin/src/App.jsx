import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import router from "./router";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
