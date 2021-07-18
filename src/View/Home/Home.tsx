import styles from './Home.module.scss';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

function Home() {
    return (
        <div className={styles.Home}>
            <header className={styles.header}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </header>
        </div>
    );
}

export default Home;
