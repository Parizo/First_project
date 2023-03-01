import './App.css';
import ProductList from './components/products/ProductList';
import Feedback from './feedback/Feedback';
import Hero from './hero/Hero';
import Nav from './nav/Nav';
import Footer from './footer/Footer'





function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ProductList />
      <Feedback />

      <Footer />
    </div>
  );
}

export default App;
