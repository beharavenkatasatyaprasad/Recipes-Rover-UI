import Topnav from './topnav';
import Searchfield from './searchfield';
import CardGroup from './recipecard';
import PublishModal from './publishmodal';
import PublishBtn from './publishtab-btn';
import './css/common.css';

function App() {
  return (
    <div className="App">
      <Topnav />
      <Searchfield />
      <CardGroup />
      <PublishModal />
      <PublishBtn />
    </div>
  );
}

export default App;
