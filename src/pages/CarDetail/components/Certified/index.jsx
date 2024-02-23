function Certified() {
    const certificates = [
        {
            title: "Không bị tai nạn",
            image: "/img/car-detail/car-certified/no_accidents.svg"
        },
        {
            title: "Không cháy nổ",
            image: "/img/car-detail/car-certified/no_fire.svg"
        },
        {
            title: "Không ngập nước",
            image: "/img/car-detail/car-certified/no_flood.svg"
        },
    ]
    return (
        <section id='certificate' className="px-3 py-8 xl:px-20 xl:py-12 bg-grey-color">
            <div className="text-secondary-color p-11 mt-10 mb-14 rounded-2xl shadow-2xl background-primary-linear flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-start lg:justify-around items-stretch">
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
            <div>
                <div className="flex items-center text-center mb-4">
                    <span className='flex-1 h-[2px] bg-primary-color'></span>
                    <h1 className="text-center text-primary-color font-bold mb-3 mx-5 ">Chứng nhận CitiCar</h1>
                    <span className='flex-1 h-[2px] bg-primary-color'></span>
                </div>
                <div className="text-center text-base font-semibold mb-8">
                    Hãy yên tâm và tự tin khi bạn mua một chiếc xe được chứng nhận tại CitiCar.
                </div>
                <div className='flex justify-around md:justify-center items-baseline md:gap-28'>
                    {
                        certificates.map(certificate => (
                            <div className="flex flex-col justify-center items-center">
                                <img className='w-100 mb-2' src={certificate.image} alt="" />
                                <span className='font-semibold text-base'>{certificate.title}</span>
                            </div>
                        ))
                    }

                </div>
                <div className='grid grid-cols-2 gap-8 mt-12'>
                    <div className="video col-span-2 xl:col-span-1 h-[320px] md:h-[500px] xl:h-[320px]">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SBQlKwZnIFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="col-span-2 xl:col-span-1">
                        <p className="text-start text-lg text-primary-color font-bold mb-3">Báo cáo kiểm định</p>
                        <div className="rounded-lg p-6 border border-grey-color-200 border-opacity-25">
                            <a href="" className='flex justify-between items-center hover:text-primary-color'>
                                <div className='flex gap-2'>
                                    <img src="/img/car-detail/car-inspection/road-tests-checks.svg" alt="" />
                                    <span className='font-bold text-base'>Kiểm tra đường bộ</span>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <div class="w-6 h-6 rounded-full border-2 text-xs bg-secondary-color text-grey-color flex justify-center items-center"><p>3</p></div>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </a>
                            <div className='w-full h-[1px] bg-grey-color-200 bg-opacity-25 rounded-full my-3'></div>
                            <a href="" className='flex justify-between items-center hover:text-primary-color'>
                                <div className='flex gap-2'>
                                    <img src="/img/car-detail/car-inspection/exterior-checks.svg" alt="" />
                                    <span className='font-bold text-base'>Ngoại thất</span>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <div class="w-6 h-6 rounded-full border-2 text-xs bg-secondary-color text-grey-color flex justify-center items-center"><p>6</p></div>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </a>
                            <div className='w-full h-[1px] bg-grey-color-200 bg-opacity-25 rounded-full my-3'></div>

                            <a href="" className='flex justify-between items-center hover:text-primary-color'>
                                <div className='flex gap-2'>
                                    <img src="/img/car-detail/car-inspection/interior-checks.svg" alt="" />
                                    <span className='font-bold text-base'>Nội thất</span>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <div class="w-6 h-6 rounded-full border-2 text-xs bg-[#52c41a] text-grey-color flex justify-center items-center"><p><i class="fa-solid fa-check"></i></p></div>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </a>
                            <div className='w-full h-[1px] bg-grey-color-200 bg-opacity-25 rounded-full my-3'></div>
                            <a href="" className='flex justify-between items-center hover:text-primary-color'>
                                <div className='flex gap-2'>
                                    <img src="/img/car-detail/car-inspection/underbody-and-under-the-hood-checks.svg" alt="" />
                                    <span className='font-bold text-base'>Khung xe & Mui xe</span>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <div class="w-6 h-6 rounded-full border-2 text-xs bg-secondary-color text-grey-color flex justify-center items-center"><p>6</p></div>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </a>
                        </div>

                        <div className="flex gap-3 py-4">
                            <button className="flex-1 text-base rounded-full p-2 border-primary-color border hover:bg-primary-color hover:text-grey-color transition-all">
                                <i className="fa-solid fa-download me-2"></i>
                                Tải báo cáo
                            </button>
                            <button className='flex-1 text-base text-grey-color rounded-full p-2 bg-primary-color'>
                                Xem chi tiết
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certified