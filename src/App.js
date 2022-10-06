import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';
import Assignment from './component/Assignment/Assignment';
import PhoneBar from './component/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <Assignment></Assignment>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
