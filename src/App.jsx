import './App.css'
import Features from './components/Features';
import FooterContent from './components/FooterContent';
import Frame from './components/Frame1';
import Home from './components/Home'
import Metrics from './components/Metrics';
import Solution from './components/Solution';

function App() {

  return (
    <div>
      <Home></Home>
      <Features></Features>
      <Frame></Frame>
      <Metrics></Metrics>
      <Solution></Solution>
      <FooterContent></FooterContent>
    </div>
  )
}

export default App;
