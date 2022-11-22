import Header from "./components/header/Header";
// import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
    <div className="App">
   
     <TopBar/>
      {/* <Header/>  */}
          {/* <Home/> */}
      <Login/>
    </div>
    </>
  );
}

export default App;
