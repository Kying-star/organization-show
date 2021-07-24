import {Swiper, SwiperSlide,} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import styles from "./Swiper.module.scss";
import React from "react";
interface Props {
    banner: string[],
    isLong: boolean
}

const BannerSwiper = (props: Props) => {
    SwiperCore.use([Pagination, Autoplay]);
    const getClass = (type: boolean) => {
        if (type) {
            return styles.long_item
        } else {
            return styles.short_item
        }
    }
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 3000}}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                props.banner.map((img) => {
                    return <SwiperSlide key={img}>
                        <img
                            className={getClass(props.isLong)}
                            src={require(`../../assets/image/${img}.png`).default}
                            alt={""}
                        />
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}

export default BannerSwiper;