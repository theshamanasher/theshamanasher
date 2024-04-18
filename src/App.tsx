import './App.css'

//local imports
import ParallaxHero from './components/ParallaxHero';
import heroImg from './assets/img/demo/demo-hero.jpg'

function App() {

  return (
    <>
    <div></div>
    <ParallaxHero 
        title="Welcome to Our Website!" 
        imageUrl={heroImg} // Replace with your image URL
    />
        
    </>
  )
}

export default App
