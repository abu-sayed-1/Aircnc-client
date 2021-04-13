import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Home from './Component/Home/Home';
import Division from './Component/Division/Division';
import RoomDetail from './Component/Division/RoomDetail/RoomDetail';
import HouseRules from './Component/HouseRules/HouseRules';
import WhoComing from './Component/WhoComing/WhoComing';
import PaymentGateWays from './Component/PaymentGateWays/PaymentGateWays';
import Login from './Component/SignUpAndLogin/Login/Login';
import SignUp from './Component/SignUpAndLogin/SignUp/SignUp';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [signUpAndLoggedInUser, setSignUpAndLoggedInUser] = useState(false);
  return (
    <UserContext.Provider value={{ signUpAndLoggedInUser, setSignUpAndLoggedInUser }} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/division">
            <Division />
          </Route>
          <Route path="/roomDetail:id">
            <RoomDetail />
          </Route>
          <Route path="/houseRules">
            <HouseRules />
          </Route>
          <Route path="/whoComing">
            <WhoComing />
          </Route>
          <PrivateRoute path="/paymentGateWays">
            <PaymentGateWays />
          </PrivateRoute>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
