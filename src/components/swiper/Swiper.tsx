import {Swiper, SwiperSlide,} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import styles from "./Swiper.module.scss";
import React from "react";

interface Props {
    banner : string[]
}

const BannerSwiper = (props:Props) =>{
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 2500}}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
    {
        props.banner.map((img) => {
            return <SwiperSlide key={img}>
                <img  className={styles.item} src={require(`../../assets/image/Home/banner/${img}.png`).default}  alt={""}/>
            </SwiperSlide>
        })
    }
    </Swiper>
    )
}

export default BannerSwiper;