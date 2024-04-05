import logo from './logo.svg';
import './App.css';
import SlideBar from './component/ControlLayout/SlideBar';
import EmployeeTable from './component/EmployeeBenefits/EmployeeBenefits';

function App() {
  return (
    <div className='App'>
      <div className='AppGlass'>
        <SlideBar />
      </div>
    </div>
  );
}

export default App;
