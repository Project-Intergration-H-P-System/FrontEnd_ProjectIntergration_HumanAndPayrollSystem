import './MainPage.css';
import SlideBar from '../../component/ControlLayout/SlideBar';
import { UilBell } from "@iconscout/react-unicons";
const MainPage = () => {
    return (
        <div>
            <div className='App'>
                <SlideBar />
            </div>
            <div className='Bell-main' >
                <UilBell />
            </div>
        </div>
    );
}

export default MainPage;
