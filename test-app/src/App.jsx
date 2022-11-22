import Header from "./components/header/Header";
// import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
        <TopBar />
<Routes>
  <Route strict exact path="/">
    <Home/>
  </Route>
  <Route strict exact path="/register">
   {user ? <Home/> : <Register/>} 
  </Route>
  <Route strict exact path="/login">
  {user ? <Home/> : <Login/>} 
  </Route>
  <Route strict exact path="/write">
  {user ? <Write/> : <Register/>} 
  </Route>
  <Route strict exact path="/settings">
    <Settings/>
  </Route>
  <Route strict exact path="/post/:id">
    <Single/>
  </Route>
</Routes>

        <Login />
 
        </Router>
  );
}

export default App;
