import '../src/styles/App.css';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
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
         <Join />
         <Footer />
    </div>
  );
}

export default App;
