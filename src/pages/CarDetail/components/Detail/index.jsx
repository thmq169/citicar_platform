import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Zoom } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

import VNDFormatToWord from 'utils/VNDFormatToWord';
import constaints from 'constaints';

import './Detail.css'

function Detail({ image, car }) {
    const BASE_URL = constaints.host
    const [activeThumb, setActiveThumb] = useState(null)
    const [bookmark, setBookMark] = useState(false)
    const [compare, setCompare] = useState(false)
    const { billionPart, millionPart } = VNDFormatToWord(car.price)

    const toggleBookMark = () => {
        setBookMark(!bookmark)
    }

    const toggleCompare = () => {
        setCompare(!compare)
    }

    useEffect(() => {
        console.log(activeThumb);
    }, [activeThumb])

    return (
        <>
            <div className="CitiCar-DetailImagesInfor px-3 py-8 xl:px-20">
                <div className="grid grid-cols-8 gap-6">
                    <div className="col-span-8 xl:col-span-5">
                        <div>
                            <Swiper
                                zoom={true}
                                navigation={true}
                                modules={[Navigation, Thumbs, Zoom]}
                                grabCursor={true}
                                thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
                                className='swiper-detail-main mb-2 h-auto rounded-2xl'
                                style={{ maxHeight: '500px' }}
                            >
                                {
                                    image ? image.map((item, index) => (
                                        <SwiperSlide key={'big-image' + item + index}>
                                            <div className='detail-big-image' style={{ backgroundImage: `url(${BASE_URL + item})`, backgroundRepeat: 'no-repeat', width: '100%', height: '420px', backgroundPosition: '50% 70%', backgroundSize: 'cover' }}></div>
                                        </SwiperSlide>
                                    )) : ""
                                }
                            </Swiper>
                            <Swiper
                                onSwiper={(setActiveThumb)}
                                slidesPerView={3}
                                spaceBetween={6}
                                navigation={true}
                                grabCursor={true}
                                modules={[Navigation, Thumbs]}
                                className='swiper-detail-thumb h-auto'
                                breakpoints={{
                                    768: {
                                        slidesPerView: 5
                                    },
                                    1220: {
                                        slidesPerView: 6
                                    },
                                }}
                            >
                                {
                                    image ? image.map((item, index) => (

                                        <SwiperSlide key={'small-image' + item + index}>
                                            <div className='thumb-image rounded-2xl' style={{ backgroundImage: `url(${BASE_URL + item})`, backgroundRepeat: 'no-repeat', width: '100%', height: '90px', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                                        </SwiperSlide>
                                    )) : ""
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-span-8 xl:col-span-3">
                        <div className="rounded-2xl shadow-2xl bg-grey-color h-full p-6">
                            <div>
                                <div className="flex space-x-2 items-center bg-primary-color text-secondary-color w-fit p-1 rounded-2xl text-xs">
                                    <FontAwesomeIcon icon={faCertificate} />
                                    <span className='font-bold'>Chứng chỉ CitiCar</span>
                                </div>
                                <div className='mt-2'>
                                    <h1 className='font-extrabold text-2xl text-primary-color'>{car.name}</h1>
                                </div>
                                <div className='flex items-center gap-4 mt-3'>
                                    <p className='text-primary-color text-lg font-medium'>Giá niêm yết:</p>
                                    <div className=" text-3xl text-start text-primary-color">
                                        <strong className='!font-extrabold'>
                                            {billionPart ? billionPart : ''}
                                            {billionPart ? <span className='px-1 text-xl font-semibold'>Tỷ</span> : ''}
                                            {millionPart}
                                            <span className='px-1 text-xl font-semibold'>Triệu</span>
                                        </strong>
                                    </div>
                                </div>
                                <div className='italic font-medium text-sm xl:text-end mt-2'>(Trả góp chỉ từ 50.000.000 VND/tháng)</div>
                                <div className='my-4 p-6 rounded-2xl bg-grey-color-200 bg-opacity-10'>
                                    <div className='h-full  grid grid-cols-2 gap-3'>
                                        <div className='flex items-center gap-2'>
                                            <img className='detai-img' src="/img/car-detail/car-detail-icon/user-groups-sm.png" alt="" />
                                            <span className='text-base text-primary-color font-semibold'>{car.number_of_owner ? car.number_of_owner : 0} Chủ Sở Hữu  Cũ</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img className='detai-img' src="/img/car-detail/car-detail-icon/speed-lg.png" alt="" />
                                            <span className='text-base text-primary-color font-semibold'>{car.odo}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img className='detai-img' src="/img/car-detail/car-detail-icon/calendar-lg.png" alt="" />
                                            <span className='text-base text-primary-color font-semibold'>{car.year_of_manufacture}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img className='detai-img' src="/img/car-detail/car-detail-icon/car-status-lg.png" alt="" />
                                            <span className='text-base text-primary-color font-semibold'>{car.car_status}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img className='detai-img' src="/img/car-detail/car-detail-icon/earth-lg.png" alt="" />
                                            <span className='text-base text-primary-color font-semibold'>{car.origin}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img className='detai-img' src="/img/car-detail/car-detail-icon/transmission-lg.png" alt="" />
                                            <span className='text-base text-primary-color font-semibold'>{car.transmission}</span>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <a href='#overview' className='text-base text-primary-color-500 underline font-extrabold hover:underline hover:text-primary-color-500'>Xem toàn bộ thông số</a>
                                    </div>
                                </div>
                                <div className='my-4 p-3 rounded-full bg-grey-color-200 bg-opacity-10'>
                                    <div className="flex justify-around">
                                        <div className="cursor-pointer select-none" onClick={toggleBookMark}>
                                            {bookmark === false ? <i class="fa-regular fa-bookmark fa-xl"></i> : <i class="fa-solid fa-bookmark fa-xl"></i>}
                                            <span className='ml-2 text-base font-semibold'>Lưu</span>
                                        </div>
                                        <div className="cursor-pointer select-none" onClick={toggleCompare}>
                                            {compare === false ? <i class="fa-regular fa-square fa-xl"></i> : <i class="fa-solid fa-square fa-xl"></i>}
                                            <span className='ml-2 text-base font-semibold'>So sánh</span>
                                        </div>
                                        <div className="cursor-pointer select-none">
                                            <i class="fa-solid fa-share-from-square fa-xl"></i>
                                            <span className='ml-2 text-base font-semibold'>Chia sẻ</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="py-3 rounded-full w-full bg-primary-color text-grey-color text-lg font-bold">Đặt lịch xem xe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail