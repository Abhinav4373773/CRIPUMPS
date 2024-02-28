import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Awards } from './components/Awards';
import { Detail } from './components/Detail';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App bg-gradient-to-t from-amber-200 via-amber-50 to-white h-auto">
     <Header className=''/>
     <Awards/>
     <Detail/>
     <Footer/>
    </div>
  );
}

export default App;
