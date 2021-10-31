import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Home from "./pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";

import LoginUi from "./pages/Login/LoginUi/LoginUi";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./component/PrivateRoute";
import AllServices from "./pages/Services/AllServices";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LoginUi></LoginUi>
            </Route>
            <PrivateRoute path="/packages">
              <AllServices></AllServices>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:pakId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
