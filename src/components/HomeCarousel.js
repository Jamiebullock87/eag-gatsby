import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../images/home1.jpg'
import slide2 from '../images/home2.jpg'
import slide3 from '../images/home3.jpg'
import slide4 from '../images/home4.jpg'
import slide5 from '../images/home5.jpg'
 
class HomeCarousel extends Component {
  render() {
    return (
      <Carousel height="100vh" showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src={slide1} />
        </div>
        <div>
          <img src={slide2} />
        </div>
        <div>
          <img src={slide3} />
        </div>
        <div>
          <img src={slide4} />
        </div>
        <div>
          <img src={slide5} />
        </div>
      </Carousel>
    )
  }
}
 
export default HomeCarousel
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 