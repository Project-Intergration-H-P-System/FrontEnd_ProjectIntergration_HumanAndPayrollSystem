import { Route, Router } from 'react-router-dom';
import './App.css';
import Dashboard from './component/DashBoard/Dashboard/Dashboard';
import Layout from './page/Layout';
function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
  );
}

export default App;
