import '../src/styles/App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons.jsx/Reasons';

function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reasons />
    </div>
  );
}

export default App;
