import React from 'react';
//import logo from '../assets/logo.svg';
import './App.css';
import '../styles/styles.scss';
import FeatureBlock from '../components/FeatureBlock';
import Retailers from '../components/Retailers';
import SaleoffTreatment from '../components/SaleoffTreatment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LandingCover from '../components/LandingCover';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <LandingCover />
        <div className="wrapper">
          <FeatureBlock />
          <Retailers />
        </div>
          <SaleoffTreatment />
          <Footer />  
      </div>
    );
  }
}

export default App;
