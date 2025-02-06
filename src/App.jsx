import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage"; // Admin Panel component
import UserPage from "./components/UserPage"; // User Notes-Finding component
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Routing for different pages */}
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
