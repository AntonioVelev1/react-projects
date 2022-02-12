import './App.css';
import Header from './components/Header/Header';
import * as socketService from './services/socketService';


function App() {
  socketService.openSocets();
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
