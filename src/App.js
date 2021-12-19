import React, {Component} from 'react';
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./components/Banner";
import FloatCard from "./components/FloatCard";
import Services from "./components/Services";
import Faq from "./components/Faq";
import SlideShowContact from "./components/SlideShowContact";
import AboutProject from "./components/AboutProject";
import CompanyPlan from "./components/CompanyPlan";
import Partners from "./components/Partners";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <FloatCard/>
        <About/>
        <Services/>
        <Faq/>
        <SlideShowContact/>
        <AboutProject/>
        <CompanyPlan/>
        <Partners/>
        <BlogPost/>
        <Footer/>
      </div>
    );
  }
}

export default App;