import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Review from './Review';
import Result from './Final_review';
import { CheckUserExist } from '../helper/helper';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/quiz" element ={<CheckUserExist><Review/></CheckUserExist>}></Route>
          <Route path="/result" element ={<CheckUserExist><Result/></CheckUserExist>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
