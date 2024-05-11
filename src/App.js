import MainPage from './page/MainPage/MainPage';
import SetAlerts from './component/SetAlerts/SetAlerts';
import SlideBar from './component/ControlLayout/SlideBar';
import './App.css';
import DashBoard from './component/DashBoard/dashBoard/DashBoard';
import Topbar from './component/DashBoard/topbar/Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    // <div>
    //   <MainPage />
    //   {/* <SetAlerts /> */}
    // </div>
    <Router>
      <Topbar />
      <div className='container'>
        <SlideBar />
        <Switch>
          <Route exact path={"/"}>
            <DashBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
