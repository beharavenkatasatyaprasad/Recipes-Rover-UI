import Topnav from './topnav';
import Searchfield from './searchfield';
import CardGroup from './recipecard';
import './css/common.css';

function App() {
  return (
    <div className="App">
      <Topnav />
      <Searchfield />
      <CardGroup />    
    </div>
  );
}

export default App;
