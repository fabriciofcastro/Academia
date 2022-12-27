import '../src/styles/App.css';
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
    </div>
  );
}

export default App;
