import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import {  logIn } from "./redux/accions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    token && dispatch(logIn(token));
  }, [dispatch]);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
