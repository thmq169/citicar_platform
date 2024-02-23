import './Navbar.css'
import Collapse from 'common/Collapse'
import { Link } from 'react-router-dom'
import { useHover } from 'react-aria'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faEarthAsia, faPhone } from '@fortawesome/free-solid-svg-icons'

function MainNavbar() {
    const [showPopover, setShowPopover] = useState([]);
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const { hoverProps, isHovered } = useHover({
        onHoverStart: (e) =>
            setShowPopover(
                () => [e.target.getAttribute('data-hover-index')]
            ),
        onHoverEnd: (e) =>
            setShowPopover(
                () => []
            )
    });

    useEffect(() => {
        const navbar = document.querySelector('#main-navbar');

        let lastScroll = 0;

        if (navbar) {
            window.addEventListener('scroll', () => {
                let currentScroll = window.pageYOffset;

                if (currentScroll - lastScroll > 0) {
                    navbar.classList.add('scroll-down');
                    navbar.classList.remove('scroll-up');
                } else {
                    navbar.classList.add('scroll-up');
                    navbar.classList.remove('scroll-down');
                }

                lastScroll = currentScroll;
            });
        }
    }, [])

    useEffect(() => {
        const body = document.querySelector('body');

        if (showMobileNavbar) {
            body.classList.add('overflow-hidden')
        } else {
            body.classList.remove('overflow-hidden')
        }
    }, [showMobileNavbar])

    return (
        <>
            <nav id='main-navbar'
                className='bg-[white] p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all fixed top-0 right-0 left-0 z-[1000]'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-grow lg:flex-grow-0 space-x-4 items-center justify-between'>
                        <div>
                            <Link to="/">
                                <img className='h-8 w-auto' src='/img/logo/logo-1.jpg' alt='logo' />
                            </Link>
                        </div>

                        <div className='hidden lg:flex space-x-4 font-bold'>
                            <div className='p-2 flex items-center justify-between relative' {...hoverProps} data-hover-index={1}>
                                <span className='mr-1 text-primary-color'>Mua xe</span>
                                <FontAwesomeIcon icon={faCaretDown} className='text-primary-color' />
                                <div className={`${showPopover.includes('1') ? 'absolute' : 'hidden'} left-0 top-9`} >
                                    <div className='grid grid-cols-2 bg-[white] w-80  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 font-bold'>
                                        <Link to='#' className='p-1 mb-2 col-span-2'>Tất cả xe</Link>
                                        <Link to='#' className='p-1 mb-2'>Toyota</Link>
                                        <Link to='#' className='p-1 mb-2'>Honda</Link>
                                        <Link to='#' className='p-1 mb-2'>Nissan</Link>
                                        <Link to='#' className='p-1 mb-2'>Mercedes</Link>
                                        <Link to='#' className='p-1 mb-2'>Mitsubishi</Link>
                                        <Link to='#' className='p-1 mb-2'>Ford</Link>
                                        <Link to='#' className='p-1 mb-2'>Kia</Link>
                                        <Link to='#' className='p-1 mb-2'>Mazda</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='p-2  flex items-center justify-between relative' {...hoverProps} data-hover-index={2}>
                                <span className='mr-1 text-primary-color'>Bán xe</span>
                                <FontAwesomeIcon icon={faCaretDown} className='text-primary-color' />
                                <div className={`${showPopover.includes('2') ? 'absolute' : 'hidden'} left-0 top-9`} >
                                    <div className='flex flex-col bg-[white] w-40  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 font-bold'>
                                        <Link to='/ban-xe' className='p-1 mb-2'>Bán xe</Link>
                                        <Link to='/dinh-gia' className='p-1 mb-2'>Định giá</Link>
                                        <Link to='/thu-cu-doi-moi' className='p-1'>Thu cũ đổi mới</Link>
                                    </div>
                                </div>
                            </div>
                            <Link to='/about-us' className='p-2 '>Giới thiệu</Link>
                            <Link to='/services' className='p-2 '>Dịch vụ</Link>
                            <Link to='/faqs' className='p-2 '>FAQ</Link>
                        </div>

                        <button className='block lg:hidden' onClick={() => setShowMobileNavbar(true)}>
                            <FontAwesomeIcon icon={faBars} className='text-2xl text-primary-color' />
                        </button>
                    </div>

                    <div className='hidden lg:flex space-x-4 font-bold'>
                        <Link to='#' className='p-2  flex items-center justify-between'>
                            <FontAwesomeIcon icon={faEarthAsia} className='text-primary-color' />
                            <span className='ms-1'>EN</span>
                        </Link>
                        <a href='tel:02836367951' className='p-2  flex items-center justify-between'>
                            <FontAwesomeIcon icon={faPhone} className='text-primary-color' />
                            <span className='ms-1'>028 3636 7951</span>
                        </a>
                        <Link to='/login' className='p-2 '>Đăng nhập</Link>
                    </div>
                </div>
            </nav>

            {/* Mobile  */}
            {showMobileNavbar &&
                <div className={`transition-all overlay`} onClick={() => setShowMobileNavbar(false)}></div>
            }

            <nav className={`lg:hidden w-80 p-3
                shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[white] 
                fixed top-0 left-0 bottom-0 z-[1100] 
                overflow-x-scroll
                transition-all ${showMobileNavbar ? 'translate-x-[0]' : 'translate-x-[-100%]'}`}>

                <div className='flex flex-col space-y-2'>
                    <div className='pb-3 border-b-2 border-grey-color'>
                        <Link to='/' className='title-hightlight text-primary-color text-2xl'>Citi<span>Car</span></Link>
                    </div>
                    <div className='flex flex-col space-y-2 pb-3 border-b-2 border-grey-color font-bold'>
                        <Collapse title={'Mua xe'} className={'text-primary-color text-left p-2 pl-0 '}>
                            <div className='grid grid-cols-2 bg-grey-color w-auto p-2 font-bold'>
                                <Link to='/mua-xe' className='p-1 mb-2 col-span-2'>Tất cả xe</Link>
                                <Link to='/mua-xe?car-brand=toyota' className='p-1 mb-2'>Toyota</Link>
                                <Link to='#' className='p-1 mb-2'>Honda</Link>
                                <Link to='#' className='p-1 mb-2'>Nissan</Link>
                                <Link to='#' className='p-1 mb-2'>Mercedes</Link>
                                <Link to='#' className='p-1 mb-2'>Mitsubishi</Link>
                                <Link to='#' className='p-1 mb-2'>Ford</Link>
                                <Link to='#' className='p-1 mb-2'>Kia</Link>
                                <Link to='#' className='p-1 mb-2'>Mazda</Link>
                            </div>
                        </Collapse>

                        <Collapse title={'Bán xe'} className={'text-primary-color text-left p-2 pl-0 '}>
                            <div className='flex flex-col bg-grey-color w-auto p-2 font-bold'>
                                <Link to='#' className='p-1 mb-2'>Bán xe</Link>
                                <Link to='#' className='p-1 mb-2'>Định giá</Link>
                                <Link to='#' className='p-1'>Thu cũ đổi mới</Link>
                            </div>
                        </Collapse>
                        <Link to='/about-us' className='p-2 pl-0 '>Giới thiệu</Link>
                        <Link to='/services' className='p-2 pl-0 '>Dịch vụ</Link>
                        <Link to='/faqs' className='p-2 pl-0 '>FAQ</Link>
                    </div>
                    <div className='flex flex-col space-y-2 pb-3 font-bold'>
                        <Link href='#' className='p-2 pl-0  flex items-center justify-start'>
                            <FontAwesomeIcon icon={faEarthAsia} className='text-primary-color' />
                            <span className='ms-1'>EN</span>
                        </Link>
                        <a href='tel:02836367951' className='p-2 pl-0  flex items-center justify-start'>
                            <FontAwesomeIcon icon={faPhone} className='text-primary-color' />
                            <span className='ms-1'>028 3636 7951</span>
                        </a>
                        <Link to='/login' className='p-2 pl-0  flex items-center justify-start'>
                            <img className='h-4 w-auto mr-1' src='/svg/user.svg' />
                            <span>Đăng nhập</span>
                        </Link>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default MainNavbar;