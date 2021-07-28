import {Swiper, SwiperSlide,} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import styles from "./Swiper.module.scss";
import React from "react";

interface Props {
    banner: string[],
    isLong: boolean
    jump? : string[]
}

const BannerSwiper = (props: Props) => {
    SwiperCore.use([Pagination, Autoplay]);
    console.log(props.jump)
    const getClass = (type: boolean) => {
        if (type) {
            return styles.long_item
        } else {
            return styles.short_item
        }
    }
    const jumpToWebsite = (index:number) => {
        console.log(1)
        console.log(props.jump)
        if(props.jump){
            window.open(props.jump[index])
        }
    }
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 3000}}
            loop={true}
        >
            {
                props.banner.map((img,index) => {
                    return <SwiperSlide key={img}>
                        <img
                            className={getClass(props.isLong)}
                            src={require(`../../assets/image/${img}.png`).default}
                            alt={""}
                            onClick={()=>{jumpToWebsite(index)}}
                        />
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}

export default BannerSwiper;