import './MainPage.css';
import SlideBar from '../../component/ControlLayout/SlideBar';
import { UilBell } from "@iconscout/react-unicons";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainPage = () => {
    return (
        <div>
            <div className='App'>
                <SlideBar />
                <ToastContainer />
            </div>
            <div className='Bell-main' >
                <UilBell />
            </div>
        </div>
    );
}

export default MainPage;
