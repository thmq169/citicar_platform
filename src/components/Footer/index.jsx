import Collapse from "common/Collapse"

function Footer() {

    const contacts_infors = [
        {
            title: "Địa chỉ",
            information: '19 Đ. Nguyễn Hữu Thọ, Tân Hưng, Quận 7, Thành phố Hồ Chí Minh',
            icon: '',
        },
        {
            title: "Hotline",
            information: '028 3636 7951',
            icon: '',
        },
        {
            title: "Email",
            information: 'info@citicar.vn',
            icon: '',
        }
    ]

    const footer_navigation = [
        {
            title: 'Dịch vụ',
            sections: [
                {
                    section: 'Mua xe',
                    path: '/mua-xe'
                },
                {
                    section: 'Bán xe',
                    path: '/ban-xe'
                },
                {
                    section: 'Trade in',
                    path: '/thu-cu-doi-moi'
                },
            ]
        },
        {
            title: 'Về chúng tôi',
            sections: [
                {
                    section: 'Đánh giá',
                    path: '/'
                },
                {
                    section: 'Bài viết',
                    path: '/'
                },
                {
                    section: 'FAQs',
                    path: '/'
                },
            ]
        },
        {
            title: 'Ngôn ngữ',
            sections: [
                {
                    section: 'Tiếng việt',
                    path: '/'
                },
                {
                    section: 'English',
                    path: '/'
                },
            ]
        },
    ]
    return (
        <>
            <div className=' bg-primary-color px-3 py-8 xl:px-20'>
                <div className="flex flex-col items-center leading-7">
                    <h2 className="capitalize font-semibold text-center text-3xl text-grey-color ">Theo Dõi Thông Tin Của Chúng Tôi</h2>
                    <p className="text-center text-grey-color my-2">Đăng ký để nhận các thông tin và ưu đãi mới nhất từ chúng tôi.</p>
                    <form action="" className='w-full xl:w-2/4 md:w-3/4'>
                        <div className="flex flex-grow w-100 rounded-full overflow-hidden ">
                            <input type="email" placeholder='Enter your email' className='flex-1 px-3 py-2 outline-none' />
                            <button type='submit' className="bg-primary-color-500 text-grey-color px-3 py-2">Đăng ký</button>
                        </div>
                    </form>
                    <div className="grid grid-cols-1 md:grid-cols-9 xl:grid-cols-9 gap-8 text-grey-color my-10">
                        <div className="col-span-9 md:col-span-5 xl:col-span-3 2xl:col-span-3">
                            <div className="text-4xl font-semibold mb-3">CitiCar</div>
                            <p className="">Nền tảng cung cấp dịch vụ mua-bán xe chuyên nghiệp. Mang đến cho khách hàng trải nghiệm liền mạch, nhanh chóng và tin cậy.</p>
                        </div>
                        <div className="col-span-9 md:col-span-4 xl:col-span-2 2xl:col-span-2">
                            <div className="text-2xl font-medium mb-4">Thông tin liên hệ</div>
                            <div className="uppercase font-extrabold text-sm mb-2">CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ CITICAR VIỆT NAM</div>
                            {
                                contacts_infors.map((contact, index) =>
                                    <div className='mb-2' key={'contact-info-' + index}>
                                        <span className='font-semibold mr-2'>{contact.title}:</span>
                                        <span>{contact.information}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-span-9 md:col-span-9 xl:col-span-4 2xl:col-span-4">
                            <div className="grid grid-cols-3 gap-8">
                                {
                                    footer_navigation.map((item, index) => (
                                        <div className='col-span-full md:col-span-1' key={'footer-navigation-' + index}>
                                            <Collapse light title={item.title} className={'block md:hidden text-xl font-medium mb-1 w-full transition-all duration-150'}>
                                                {
                                                    item.sections.map((section, index) =>
                                                        <div className='mb-2' key={'section-' + index}>
                                                            <a href={section.path} className='text-grey-color hover:text-grey-color-200'> {section.section}</a>
                                                        </div>
                                                    )
                                                }
                                            </Collapse>
                                            <div className="hidden md:block text-2xl font-medium mb-4">{item.title}</div>
                                            {
                                                item.sections.map((section, index) =>
                                                    <div className='hidden md:block mb-2'  key={'section-mobile-' + index}>
                                                        <a href={section.path} className='text-grey-color hover:text-grey-color-200'> {section.section}</a>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '0.75px' }} className='w-full bg-grey-color rounded-full'></div>
                    <div className='mt-4 text-grey-color'>
                        <p className='text-lg mb-2'>© Copyright 2023 CitiCar. All rights reserved.</p>
                        <p className='italic text-sm'>All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, trademarks and brands does not imply endorsement.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer