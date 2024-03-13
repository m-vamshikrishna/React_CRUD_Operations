import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Routes>

      <Route exact path="/" element={<Home />} />
      <Route exact path="/addUser" element={<AddUser />} />
      <Route exact path="/edituser/:id" element={<EditUser />} />
      <Route exact path="/viewuser/:id" element={<ViewUser />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
