import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './HeroCarousel.css'

function HeroCarousel() {
    const heroImages = [
        'img/hero-carousel/carousel.png',
        'img/hero-carousel/carousel.png',
        'img/hero-carousel/carousel.png',
    ]
    return (
        <div id='hero-carousel' className='mt-16'>
            <Swiper
                loop={true}
                modules={[Navigation, Autoplay, Pagination]}
                grabCursor={true}
                pagination={{
                    clickable: false,
                }}
                autoplay={{ delay: 4000 }}
                className='HeroSwiper'
            >

                {
                    heroImages.map((item, index) => (
                        <SwiperSlide key={"hero-carousel-" + index}>
                            <img
                                className="block w-max"
                                key={'hero-image-' + index}
                                src={item}
                                alt={'hero-image-' + index + 1}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}

export default HeroCarousel;