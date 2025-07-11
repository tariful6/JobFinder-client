import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import imgBg1 from '../../../assets/images/carousel1.jpg'
import imgBg2 from '../../../assets/images/carousel2.jpg'
import imgBg3 from '../../../assets/images/carousel3.jpg'
import Slide from './Slide';

const HeroSlider = () => {
    return (
        <div className=' my-6 container mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop = {true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <Slide image={imgBg1} text='Get Your Web Development Project Done  in minutes'></Slide></SwiperSlide>
                <SwiperSlide> <Slide image={imgBg2} text='Start Your Digital Marketing Project Running'></Slide></SwiperSlide>
                <SwiperSlide> <Slide image={imgBg3} text='Start Your Graphical Project in minutes'></Slide></SwiperSlide> 
            </Swiper>
        </div>
    );
};

export default HeroSlider;