import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer} from 'react-toastify';
import AppRoutes from "./routes/AppRoutes";
import {  logIn } from "./redux/accions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    token && dispatch(logIn(token));
  }, [dispatch]);
  return (  
    <div className="App">
      <ToastContainer limit={3}/>
      <AppRoutes />
    </div>
  );
}

export default App;
