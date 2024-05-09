import logo from './logo.svg';
import './App.css';
import SlideBar from './component/ControlLayout/SlideBar';
import QuanityOfLeaveDays from './component/QuantityOfLeaveDays/QuanityOfLeaveDays';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <div >
        <SlideBar />
      </div>
    </div>
  );
}

export default App;
