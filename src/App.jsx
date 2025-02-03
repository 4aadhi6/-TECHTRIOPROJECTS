import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage'; // Admin Panel component
import UserPage from './components/UserPage';   // User Notes-Finding component
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">MERN Notes-Proving</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">User Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin">Admin Panel</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routing for different pages */}
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
