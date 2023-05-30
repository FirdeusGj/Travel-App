import './App.css';
import Cheapest from './components/Cheapest/Cheapest';
import MainPage from './components/MainPage/MainPage';
import Nav from './components/Nav/nav'
function App() {
  return (
    <div className="App">
      <Nav/>
      <MainPage/>
      <Cheapest/>
    </div>
  );
}

export default App;
