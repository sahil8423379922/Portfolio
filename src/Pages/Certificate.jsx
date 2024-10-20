import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import p1 from "./Images/p1.jpeg";
import p2 from "./Images/p2.jpeg";
import p3 from "./Images/p3.png";


export default function Certificate() {
  return (
    <div className="container px-4 py-5">
       <h2 class="pb-2 border-bottom">Certificate Achived</h2>
      <Carousel
        showArrows={true}      // Enable navigation arrows
        infiniteLoop={true}    // Infinite looping of slides
        showThumbs={false}     // Hide thumbnails
        autoPlay={true}        // Enable auto-play
        interval={3000}        // Time between slides
        stopOnHover={true}     // Stop auto-play on hover
        swipeable={true}       // Enable swipe gestures
      >
       <div style={{ display: "flex", justifyContent: "center" }}>
    <img src={p1} style={{ width: "360px", height: "250px", margin: "0 10px" }} alt="Image 1" />
    <img src={p2} style={{ width: "360px", height: "250px", margin: "0 10px" }} alt="Image 2" />
    <img src={p3} style={{ width: "360px", height: "250px", margin: "0 10px" }} alt="Image 3" />
  </div>
        
      </Carousel>

    </div>
  );
}
