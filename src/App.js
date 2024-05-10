import './App.css';
import SlideBar from './component/ControlLayout/SlideBar';
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
