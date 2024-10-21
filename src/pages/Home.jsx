import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

//images
import img1 from '../images/slide1.jpg';
import img2 from '../images/slide2.jpg';
import img3 from '../images/slide3.jpg';
import img4 from '../images/slide4.jpg';
import img5 from '../images/slide5.jpg';

   
  function Home (){
    
    return(
      
        
      <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1}/></SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
        <SwiperSlide><img src={img4}/></SwiperSlide>
        <SwiperSlide><img src={img5}/></SwiperSlide>
        <SwiperSlide><img src={img5}/></SwiperSlide>
        
      </Swiper>
    </>
    


    );
      
      
        
        
    

    
  }

export default Home;