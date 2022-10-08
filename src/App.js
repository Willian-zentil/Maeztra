import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FullBanner from './components/FullBanner/FullBanner';
import Marcas from './components/Marcas/Marcas';
import Shelf from './components/Shelf/Shelf';
import MiddleBanner from './components/MiddleBanner/MiddleBanner';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';


function App() {
  return (
    <div className="App">
      <Header/>
      <FullBanner />
      <Marcas />
      <Shelf />
      <MiddleBanner />
      <Newsletter />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
