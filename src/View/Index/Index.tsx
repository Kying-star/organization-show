import styles from "./index.module.scss";
import React from 'react';
import BannerSwiper from "../../components/swiper/Swiper";
import {banner,UnitName} from "../../assets/data/data";
import {useLocation} from 'react-router-dom';
function Index() {
    let title = useLocation().search.replace(/\?type=/,"")
    console.log(UnitName)
    return (
        <div className={styles.Index}>
            <div className={styles.hidden_scroll}>
                <div className={styles.list}>
                    <header className={styles.header}>
                        <div className={styles.star_icon}/>
                        <div className={styles.star_icon_double}/>
                        <BannerSwiper banner={banner}/>
                    </header>
                    <div className={styles.inner}>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
