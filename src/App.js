import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import Login from './pages/Authentication/Login/Login';
import NotFound from './pages/Shared/NotFound/NotFound';
import firebaseAuthInit from './firebase/firebase-init/firebase.init';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Appointment from './pages/Appointment/Appointment';
import Register from './pages/Authentication/Register/Register';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import About from './pages/About/About';

firebaseAuthInit();


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
      
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path="/servicesDetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
