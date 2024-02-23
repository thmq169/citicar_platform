// UI Component
import CarSwiper from "components/CarSwiper";

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// Reducers
import { getCars } from 'redux/reducers/carsSlice'

// Selectors
import { allCarsSelector, statusCarsSelector } from 'redux/selectors';
import { Link, useLocation, useNavigate } from "react-router-dom";

function CertifiedCars() {
    const dispatch = useDispatch()
    const routes = useLocation()

    useEffect(() => {
        dispatch(getCars(1))

    }, [routes.pathname, dispatch])

    const statusCars = useSelector(statusCarsSelector)
    const cars = useSelector(allCarsSelector)

    return (
        <div className="bg-grey-color py-12">
            <div className="px-3 lg:px-0 w-full lg:w-4/5 m-auto">
                <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
                    Các xe nổi bật tại <span className="title-hightlight text-3xl">Citi<span>Car</span></span>
                </h2>
                <div className="section-title-underline bg-primary-color"></div>

                <div className="text-secondary-color p-11 mt-10 mb-5 rounded-2xl shadow-2xl background-primary-linear flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-start lg:justify-around items-stretch">
                    <div className="h-full flex lg:justify-center items-center">
                        <div className="border-y-secondary-color">
                            <p>Chứng Chỉ</p>
                            <p><span className="title-hightlight text-3xl">Citi<span>Car</span></span></p>
                        </div>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-1.png" />
                        <span className="font-bold text-center">Đạt 160 điểm kiểm tra</span>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-2.png" />
                        <span className="font-bold text-center">Miễn Phí Bảo Dưỡng</span>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-3.png" />
                        <span className="font-bold text-center">1 năm bảo hành</span>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-4.png" />
                        <span className="font-bold text-center">Đảm bảo chất lượng</span>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-5.png" />
                        <span className="font-bold text-center">5 ngày hoàn tiền</span>
                    </div>
                </div>

                <div className="mt-10">
                    <CarSwiper
                        statusCars={statusCars}
                        cars={cars}
                    />

                </div>

                <div className="mt-3">
                    <Link to='/mua-xe'>
                        <p className="font-bold text-primary-color text-center">
                            Xem thêm
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CertifiedCars