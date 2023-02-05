import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Pagination, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const ShowMealItems = ({ headerText, meals }) => {
  return (
    <section className="container my-0 mx-auto py-10">
      <h2 className="font-dancingScript font-bold sm:text-[44px] text-[32px] tracking-tight mb-8 text-gradient-2 text-center">
        {headerText}
      </h2>

      <div className="flex justify-center items-center">
        <Swiper
          modules={[Mousewheel, Keyboard, Pagination, FreeMode]}
          mousewheel={true}
          keyboard={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            620: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1060: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 65,
            },
          }}
        >
          {meals.map((meal) => {
            return (
              <SwiperSlide key={meal.id}>
                <div
                  className="meal md:w-[350px]  w-[300px]  z-[1] relative cursor-pointer"
                  key={meal.id}
                  id={meal.id}
                >
                  <Link to={`/detail/${meal.id}`}>
                    <img
                      src={meal.image}
                      alt={meal.title}
                      className="w-full  object-cover"
                    />

                    <p className="font-nunitoSans text-[16px] font-extrabold my-2 px-2 absolute left-[1px] top-[50%] text-whiteColor z-20 ">
                      {meal.title}
                    </p>
                    <div className="gradient"></div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ShowMealItems;

{
  /* <div
  className={`w-[30px] h-[30px] rounded-full flex justify-center items-center circle mb-2 cursor-pointer absolute top-[10px] right-[10px] bg-whiteColor border  z-20`}
>
  <span className="text-[18px] text-greenShade ">
    <HiHeart />
  </span>
</div>; */
}
