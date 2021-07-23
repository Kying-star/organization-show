import styles from './Home.module.scss';
import React from 'react';
import BannerSwiper from "../../components/swiper/Swiper"
import Unitlist from "../../components/UnitList/Unitlist";
import {banner,UnitLists} from "../../assets/data/data";

function Home() {
    return <div className={styles.Home}>
        <div className={styles.hidden_scroll}>
            <div className={styles.list}>
                <header className={styles.header}>
                    <div className={styles.star_icon}/>
                    <div className={styles.star_icon_double}/>
                    <BannerSwiper banner={banner} isLong={false}/>
                </header>
                <Unitlist Unitlist={UnitLists}/>
                <footer className={styles.footer}>©红岩网校工作站出品</footer>
            </div>
        </div>
    </div>;
}

export default Home;
