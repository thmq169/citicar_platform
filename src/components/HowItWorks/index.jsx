import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from 'swiper'
import './HowItWorks.css'

function HowItWorks() {

    const list_hiw = [
        {
            title: 'Mua xe',
            cards: [
                {
                    card_title: 'Tìm xe',
                    card_content: "Tìm xe mà khách hàng cần trên website đã được chúng tôi xét duyệt cẩn thận và kiểm tra chuyên nghiệp.",
                    card_image: "img/how-it-works/how-it-works-1.png"
                },
                {
                    card_title: 'Đặt hẹn xem xe và lái thử',
                    card_content: "Tất cả các xe của chúng tôi đều được vệ sinh trước và sau khi lái thử, giúp trải nghiệm của khách hàng luôn tốt nhất.",
                    card_image: "img/how-it-works/how-it-works-1.png"
                },
                {
                    card_title: 'CitiCar giao xe tận nơi',
                    card_content: "Ghi nhận điểm giao xe mà khách hàng mong muốn và nhận chìa khóa xe tận tay.",
                    card_image: "img/how-it-works/how-it-works-3.png"
                },
                {
                    card_title: 'Dịch vụ hậu mãi uy tín',
                    card_content: "Đảm bản hoàn lại tiền trong vòng 5 ngày sau khi bạn mua xe được chứng nhận của CitiCar.",
                    card_image: "img/how-it-works/how-it-works-4.png"
                },
            ]
        },
        {
            title: 'Bán xe',
            cards: [
                {
                    card_title: 'Đặt lịch hẹn',
                    card_content: "Tất cả các xe của chúng tôi đều được vệ sinh trước và sau khi lái thử, giúp trải nghiệm của khách hàng luôn tốt nhất.",
                    card_image: "img/how-it-works/how-it-works-sell-1.png"
                },
                {
                    card_title: 'CitiCar kiểm tra xe',
                    card_content: "Ghi nhận điểm giao xe mà khách hàng mong muốn và nhận chìa khóa xe tận tay.",
                    card_image: "img/how-it-works/how-it-works-sell-2.png"
                },
                {
                    card_title: 'Hoàn thành thủ tục mua bán',
                    card_content: "Ghi nhận điểm giao xe mà khách hàng mong muốn và nhận chìa khóa xe tận tay.",
                    card_image: "img/how-it-works/how-it-works-sell-3.png"
                },
                {
                    card_title: 'Chủ xe nhận tiền trong 24h',
                    card_content: "Đảm bản hoàn lại tiền trong vòng 5 ngày sau khi bạn mua xe được chứng nhận của CitiCar.",
                    card_image: "img/how-it-works/how-it-works-sell-4.png"
                },
            ]
        },
        {
            title: 'Thu cũ đổi mới',
            cards: [
                {
                    card_title: 'Gửi yêu cầu trao đổi',
                    card_content: "Chỉ mất 2 phút để đặt lịch hẹn bán xe trên CitiCar!",
                    card_image: "img/how-it-works/how-it-works-trade-in-1.png"
                },
                {
                    card_title: 'Tìm xe mong muốn',
                    card_content: "Nhân viên của CitiCar sẽ kiểm tra xe của khách hàng một cách chuyên nghiệp trong vòng 30 phút.",
                    card_image: "img/how-it-works/how-it-works-trade-in-2.png"
                },
                {
                    card_title: 'Đăng ký lái thử',
                    card_content: "Sau khi đạt được thỏa thuận về giá cả, tiến hành thủ tục giao dịch nhanh chóng, tinh gọn.",
                    card_image: "img/how-it-works/how-it-works-trade-in-3.png"
                },
                {
                    card_title: 'Nhận xe mới',
                    card_content: "Nhận tiền nhanh chóng trong vòng 24 tiếng kể từ khi hoàn tất thủ tục giao dịch.",
                    card_image: "img/how-it-works/how-it-works-trade-in-4.png"
                },
            ]
        },
    ]

    return (
        <>
            <div className='py-8 pr-3 xl:px-0'>
                <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
                    Quy trình mua-bán xe tại <span className="title-hightlight text-3xl">Citi<span>Car</span></span>
                </h2>
                <div className="section-title-underline bg-primary-color"></div>
                <div className="mt-10">
                    <div className="custom1-pagination h-max mb-8 mt-6 mx-auto md:!w-max text-center"></div>
                    <Swiper
                        slidesPerView={1}
                        allowTouchMove={false}
                        spaceBetween={20}
                        modules={[Navigation, FreeMode, Pagination]}
                        navigation={false}
                        pagination={{
                            el: '.custom1-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="swiper-pagination-bullet w-max !mx-2 p-3 md:p-3 inline rounded-none bg-[white] text-grey-color-200 text-sm md:text-lg font-extrabold cursor-pointer transition-all !opacity-100">' + list_hiw[index].title + '</span>';
                            },
                        }}
                        className='swiper-wrapper-hiw'
                    >
                        {
                            list_hiw.map((item, index) => (
                                <SwiperSlide key={'how-it-works-tabs-' + index}>
                                    <Swiper
                                        slidesPerView={"auto"}
                                        allowTouchMove={true}
                                        spaceBetween={8}
                                        freeMode={true}
                                        modules={[Navigation, FreeMode, Pagination]}
                                        navigation={false}
                                        pagination={false}
                                        breakpoints={{
                                            768: {
                                                spaceBetween: 8,
                                            },
                                            1200: {
                                                slidesPerView: 4,
                                                spaceBetween: 16,
                                                allowTouchMove: false
                                            },
                                        }}
                                        className='swiper-inner-hiw pb-7 pt-5 px-3 md:pt-7 xl:px-20 '
                                    >
                                        {
                                            item.cards.map((card, cardIndex) => (
                                                <SwiperSlide className='w-[70vw] md:w-[45vw]' key={'how-it-works-cards-' + cardIndex}>
                                                    <div className="relative  bg-grey-color rounded-xl shadow-[0_0px_15px_4px_rgba(0,0,0,0.2)] overflow-hidden">
                                                        <div className={`h-[185px] items-center ${index === 0 ? " pt-8 mx-auto " : ""}`}>
                                                            <img src={card.card_image} className={`${index === 0 ? " w-[150px] " : " w-full h-full"} mx-auto block`} alt="" />
                                                        </div>
                                                        <div className='p-5 h-[172px]'>
                                                            <p className="text-primary-color text-lg font-semibold mb-2">{card.card_title}</p>
                                                            <p>{card.card_content}</p>
                                                        </div>
                                                        <div className='absolute top-0 right-0 rounded-bl-full shadow-xl pl-6 pr-5 py-2 text-lg text-primary-color font-semibold bg-secondary-color '>{cardIndex + 1}</div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>

                </div>
            </div>
        </>
    );
}

export default HowItWorks