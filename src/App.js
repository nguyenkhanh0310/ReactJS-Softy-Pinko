import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';
import './animate.css';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import BannerMain from './components/BannerMain';
import BoxHighlight from './components/BoxHighlight';
import BannerText from './components/BannerText';
import BigItem from './components/BigItem';
import HomeParallax from './components/HomeParallax';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import CounterParallax from './components/CounterParallax';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <BannerMain/>
      <BoxHighlight/>
      <BannerText/>
      <BigItem/>
      <HomeParallax/>
      <Testimonials/>
      <PricingPlans/>
      <CounterParallax/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
