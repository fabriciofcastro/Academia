import '../src/styles/App.css';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Hero from './components/Hero/Hero';
import Plano from './components/Plano/Plano';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons.jsx/Reasons';

function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reasons />
         <Plano />
         <Depoimentos />
    </div>
  );
}

export default App;
