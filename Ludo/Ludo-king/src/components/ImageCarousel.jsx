// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// const ImageCarousel = () => {
//   return (
//     <section className="mb-4 flex justify-center">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         loop={true}
//         autoplay={{ delay: 3000 }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Pagination, Navigation, Autoplay]}
//         className="w-full max-w-[90%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]"
//       >
//         <SwiperSlide>
//           <img src="dice.webp" alt="Image 1" className="w-full h-full object-contain rounded-lg mx-auto" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="dice.webp" alt="Image 2" className="w-full h-full object-contain rounded-lg mx-auto" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="dice.webp" alt="Image 3" className="w-full h-full object-contain rounded-lg mx-auto" />
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default ImageCarousel;


// import React, { useState, useEffect } from "react";

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "./ludooDice.jpg",
//     "./ludooDice.jpg",
//     "./ludooDice.jpg",
//     "./ludooDice.jpg",
   
//   ];

//   // Shining animation keyframes (add to your CSS file)
//   const shineAnimation = `
//     @keyframes shine {
//       0% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.5); }
//       50% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.9); }
//       100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.5); }
//     }
//   `;

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg md:rounded-xl">
//       <style>{shineAnimation}</style>
      
//       {/* Carousel Container */}
//       <div
//         className="flex transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((img, i) => (
//           <div key={i} className="min-w-full">
//             <img
//               src={img}
//               alt={`Slide ${i + 1}`}
//               className="w-full h-auto object-cover rounded-lg 
//                        md:h-48 md:rounded-xl md:animate-shine"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               i === currentIndex ? "bg-gray-700" : "bg-gray-300"
//             }`}
//             onClick={() => setCurrentIndex(i)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;







import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./1.jpg",
    "./ludooDice.jpg",
    "./ludooDice.jpg",
    "./ludooDice.jpg",
  ];

  const gradientBorderStyles = `
    @keyframes borderFlow {
      0% { background-position: 0% 0%; }
      100% { background-position: 200% 200%; }
    }

    .gradient-border {
      position: relative;
      padding: 3px;
      border-radius: 0.75rem;
      background: linear-gradient(
        45deg,
        #ff00ff,
        #00ffff,
        #ffff00,
        #ff00ff,
        #00ffff
      );
      background-size: 200% 200%;
      animation: borderFlow 3s linear infinite;
    }

    @media (min-width: 768px) {
      .gradient-border {
        border-radius: 1rem;
      }
    }

    .carousel-inner {
      position: relative;
      border-radius: 0.75rem;
      overflow: hidden;
    }

    @media (min-width: 768px) {
      .carousel-inner {
        border-radius: 1rem;
      }
    }
  `;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-2">
      <style>{gradientBorderStyles}</style>
      
      {/* Gradient Border Container */}
      <div className="gradient-border">
        {/* Carousel Container */}
        <div className="carousel-inner">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="min-w-full">
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex 
                ? "bg-[#00ffff] shadow-glow" 
                : "bg-gray-300 opacity-50"
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;