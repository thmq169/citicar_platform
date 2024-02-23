import Autocomplete from 'common/AutoComplete'

import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from 'react';
import { Link } from 'react-router-dom';

import carBrandJson from 'JsonUI/carBrand'
import bodyTypeJson from 'JsonUI/bodyType'
import brandModelJson from 'JsonUI/brandModel'
import priceScope from 'JsonUI/priceScope'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar, faFileCircleCheck, faMagnifyingGlass, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import capitalization from 'utils/capitalization';
import brandModel from 'JsonUI/brandModel';
import mileages from 'JsonUI/mileages';


function HeroFunctions() {
    const [brandSellCar, setBrandSellCar] = useState('')
    const [modelSellCar, setModelSellCar] = useState('')
    const [mileage, setMileage] = useState('')

    return (
        <>
            <div className='m-auto xl:-mt-[5rem] mb-[4rem] px-3 w-full lg:w-4/5 relative z-[99] background-opacity-0'>
                <div className='grid grid-cols-3 gap-4 items-stretch'>
                    <div className='col-span-3 xl:col-span-2'>
                        <div className='background-opacity-0 rounded-2xl shadow-xl h-full'>
                            <div className='flex flex-col space-y-6 bg-primary-color p-5 rounded-t-3xl'>

                                <p className='hidden xl:block text-2xl font-bold'>
                                    <Link to="/mua-xe" style={{ color: 'white' }}>
                                        Mua xe
                                    </Link>
                                </p>
                                <div className='rounded-3xl p-4 bg-[white] flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-primary-color' />
                                    <input
                                        className='text-[black] w-full'
                                        placeholder='Tìm kiếm xe' />
                                </div>


                                <div className='block md:flex justify-between items-center'>
                                    <p className='text-[white]'>
                                        Hãy để chúng tôi giúp bạn tìm được xe mà bạn muốn.
                                    </p>

                                    <Link to="/mua-xe">
                                        <button className='font-bold text-primary-color text-bold bg-secondary-color shadow-xl rounded-3xl p-3 mt-2 w-full md:mt-0 md:w-auto'>
                                            Giúp tôi chọn xe
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-5">
                                <Swiper
                                    slidesPerView={5}
                                    slidesPerGroup={5}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 7,
                                            slidesPerGroup: 7
                                        },
                                    }}
                                >
                                    {
                                        carBrandJson.map((carBrand, index) =>
                                            <SwiperSlide key={"hero-function-car-brand-" + index}>
                                                <div className='group'>
                                                    <Link to={`/mua-xe?car_brand=${carBrand.name}`}>
                                                        <div className='flex justify-center'>
                                                            <img className='w-auto h-6 xl:h-8' src={carBrand.logo} />
                                                        </div>
                                                        <p className='text-center mt-2 group-hover:font-bold'>{capitalization(carBrand.name)}</p>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>

                            <div className="mt-3 p-5">
                                <Swiper
                                    slidesPerView={5}
                                    slidesPerGroup={5}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 7,
                                            slidesPerGroup: 7
                                        },
                                    }}
                                >
                                    {
                                        bodyTypeJson.map((bodyType, index) =>
                                            <SwiperSlide key={"hero-function-body-type-" + index}>
                                                <Link to={`/mua-xe?body_type=${bodyType.name.toLowerCase()}`}>
                                                    <div className='group'>
                                                        <div className='flex justify-center'>
                                                            <img className='w-auto h-6 xl:h-8' src={bodyType.img} />
                                                        </div>
                                                        <p className='text-center mt-2 group-hover:font-bold'>{bodyType.name}</p>
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>

                            <div className='flex space-x-4 p-6'>
                                {
                                    priceScope.map((price, index) =>
                                        <Link
                                            key={"hero-function-price-" + index}
                                            to={`/mua-xe?price=${price.value}`}
                                            className='w-full bg-grey-color p-2 rounded-2xl flex justify-center items-center'>
                                            <p className='text-center text-sm font-bold'>{price.text}</p>
                                        </Link>
                                    )
                                }

                                <Link to={'/mua-xe'} className='w-full bg-primary-color p-2 rounded-2xl flex justify-center items-center'>
                                    <p className='font-bold text-center text-secondary-color'><strong>Tất cả xe</strong></p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='hidden xl:block xl:col-span-1'>
                        <div className='bg-[white] rounded-2xl p-5 shadow-xl h-full'>
                            <div className='flex flex-col space-y-5'>
                                <p className='text-2xl font-bold'>
                                    <Link to="/ban-xe">
                                        Bán xe
                                    </Link>
                                </p>

                                <div className='flex flex-col space-y-4'>
                                    <Autocomplete
                                        placeholder='Chọn hãng xe'
                                        viewOptions={brandModel.reduce((views = [], model) => {
                                            views.push(model.brand)
                                            return views
                                        }, [])}
                                        valueOptions={brandModel.reduce((values = [], model) => {
                                            values.push(model.brand)
                                            return values
                                        }, [])}
                                        value={brandSellCar}
                                        setValue={setBrandSellCar} />

                                    <Autocomplete
                                        placeholder='Chọn model'
                                        viewOptions={brandModelJson.filter((brandModel) => {
                                            return brandModel.brand.toLowerCase() === brandSellCar.toLowerCase()
                                        })[0]?.models}

                                        valueOptions={brandModelJson.filter((brandModel) => {
                                            return brandModel.brand.toLowerCase() === brandSellCar.toLowerCase()
                                        })[0]?.models}
                                        value={modelSellCar}
                                        setValue={setModelSellCar} />

                                    <Autocomplete
                                        placeholder='Số Km'
                                        viewOptions={mileages.map((each) =>
                                            each.label
                                        )}

                                        valueOptions={mileages.map((each) =>
                                            each.label
                                        )}
                                        value={mileage}
                                        setValue={setMileage} />

                                    <button className='font-bold text-[white] text-bold bg-primary-color shadow-xl rounded-3xl p-4'>
                                        Tiếp tục
                                    </button>
                                </div>

                                <p className='text-sm'>
                                    Để tiếp tục, đồng ý với Chính sách quyền riêng tư, Điều khoản sử dụng & điều kiện niêm yết.
                                </p>

                                <div className='flex space-x-2 bg-grey-color p-4 rounded-2xl'>
                                    <div className='flex flex-col justify-center'>
                                        <FontAwesomeIcon icon={faScrewdriverWrench} className='text-3xl text-primary-color' />
                                        <p className='font-bold text-xs text-center text-primary-color mt-1'>Thủ tục kiểm tra đơn giản</p>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <FontAwesomeIcon icon={faCommentsDollar} className='text-3xl text-primary-color' />
                                        <p className='font-bold text-xs text-center text-primary-color mt-1'>Thanh toán nhanh chóng</p>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <FontAwesomeIcon icon={faFileCircleCheck} className='text-3xl text-primary-color' />
                                        <p className='font-bold text-xs text-center text-primary-color mt-1'>Đơn giản các giấy tờ giao dịch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-3 xl:hidden xl:col-span-1'>
                        <div className='flex space-x-5'>
                            <div className='bg-primary-color text-secondary-color w-full p-5 rounded-2xl shadow-xl text-xl font-bold text-center'>Mua xe</div>
                            <div className='bg-grey-color text-primary-color w-full p-5 rounded-2xl shadow-xl text-xl font-bold text-center'>Bán xe</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default HeroFunctions;