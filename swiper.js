import React, { useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel,Autoplay } from "swiper/modules";
import haybale from "./../../assets/images/haybale.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Box, Typography } from "@mui/material";
const Slider = () => {
  const getArrayOfGivenLength = (n, initial = 0) => {
    let array = [];
    for (initial; initial <= n; initial++) {
      array.push(initial);
    }
    return array;
  };
  useEffect(() => {
    console.log(getArrayOfGivenLength(10, 1));
  }, []);
  return (
    <Box>
      <Swiper
       
        modules={[Navigation, Pagination, Scrollbar,Mousewheel, A11y, Autoplay]}
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {getArrayOfGivenLength(10, 1).map((x, i) => (
          <SwiperSlide key={i}>
            <Box>
              <img src={haybale} style={{width:"100%"}} alt="" />
              <Typography
                className="manRope800"
                sx={{
                  color: "primary.main",
                  fontSize: {
                    lg: "30px",
                  },
                  lineHeight: {
                    lg: "36px",
                  },
                  mb: { lg: "15px" },
                }}
              >
                Our Benefits
              </Typography>
              <Typography
                className="manRope500"
                sx={{ lineHeight: { lg: "36px" }, fontSize: { lg: "16px" } }}
              >
                It has survived not only five centuries em simply dummy text.
                Duis aute irure dolor in eprehenderit in voluptate velit esse
                cillum.
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
