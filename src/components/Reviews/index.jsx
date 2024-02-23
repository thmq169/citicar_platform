import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'

function Reviews() {

  const list_reviews = [
    {
      num_stars: 5,
      heading: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate.",
      user: "Lorem ipsum"
    },
    {
      num_stars: 5,
      heading: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate.",
      user: "Lorem ipsum"
    },
    {
      num_stars: 5,
      heading: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate.",
      user: "Lorem ipsum"
    },
    {
      num_stars: 5,
      heading: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate.",
      user: "Lorem ipsum"
    },
    {
      num_stars: 5,
      heading: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate.",
      user: "Lorem ipsum"
    },
    {
      num_stars: 5,
      heading: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate.",
      user: "Lorem ipsum"
    },
    {
      num_stars: 5,
      heading: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate.",
      user: "Lorem ipsum"
    },
  ]

  const render_rate_stars = (stars) => {
    let total_star = []
    for (let index = 0; index < stars; index++) {
      total_star.push(
        <span key={"rate-star-" + index + 1}>
          <FontAwesomeIcon icon={faStar} style={{ fontSize: '16px', marginRight: "5px", color: '#fdcf33' }} />
        </span>
      )

    }
    return <div>{total_star}</div>
  }

  return (
    <>
      <div className="reviews bg-primary-color px-3 py-8 xl:px-20 h-3/6">
        <h2 className="font-semibold text-center text-2xl md:text-3xl text-grey-color px-2 md:px-3 ">
          <span className="title-hightlight text-3xl">Citi<span>Car</span></span> tự hào hỗ trợ thành công rất nhiều chủ xe
        </h2>
        <div className="section-title-underline bg-grey-color"></div>
        <div className="mb-0 md:my-10">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={8}
            freeMode={true}
            modules={[Navigation, FreeMode]}
            grabCursor={true}
            breakpoints={{
              768: {

              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {
              list_reviews.map((review, index) => (
                <SwiperSlide key={"reviews-" + index} className='review relative w-[300px] md:w-[350px] xl:w-[400px] h-auto flex flex-col'>
                  <div className=" p-5 bg-grey-color rounded-2xl relative h-full">
                    <div className="flex justify-between items-center">
                      {render_rate_stars(review.num_stars)}
                      <div>
                        <FontAwesomeIcon icon={faQuoteRight} className='text-4xl' />
                      </div>
                    </div>
                    <div className="text-start flex flex-col ">
                      <h5 className='font-semibold text-xl mb-2'>{review.heading}</h5>
                      <p>
                        {review.content}
                      </p>
                      <div className="text-end mt-2">
                        {review.user}
                      </div>
                    </div>
                  </div>
                  <div className="relative -z-10 bg-grey-color w-16 h-12 -rotate-[30deg] translate-x-[50px] -translate-y-[30px]"></div>

                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Reviews