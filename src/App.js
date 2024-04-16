import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import './App.css';
import Header from './components/Header'
import Notes from './pages/Notes'
import Footer from './components/Footer'
import Note from './pages/Note'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<Notes />} />
            <Route path="/note/:id" element={<Note />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
