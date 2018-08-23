import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../images/taj-2.jpg'
import slide2 from '../images/taj-3.jpg'
import slide3 from '../images/taj-4.jpg'
import slide4 from '../images/taj-5.jpg'
 
class TajCarousel extends Component {
  render() {
    return (
      <Carousel height="756px" showThumbs={false} infiniteLoop autoPlay>
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
      </Carousel>
    )
  }
}
 
export default TajCarousel
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 