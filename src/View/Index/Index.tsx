import styles from "./index.module.scss";
import React from 'react';
import BannerSwiper from "../../components/swiper/Swiper";
import {UnitInfo,UnitName,UnitBanners} from "../../assets/data/data";
import {useLocation , useHistory} from 'react-router-dom';
function Index() {
    const history = useHistory()
    let index = Number(useLocation().search.replace(/\?type=/, ""))
    const prev = index === 0 ? 8 : index - 1
    const next = index === 8 ? 0 : index + 1
    const jump = (index : number) => history.push(`/index?type=${index}`)
    return (
        <div className={styles.Index}>
            <div className={styles.hidden_scroll}>
                <div className={styles.list}>
                    <header className={styles.header}>
                        <div className={styles.star_icon}/>
                        <div className={styles.star_icon_double}/>
                        <BannerSwiper banner={UnitBanners[index]}/>
                    </header>
                    <div className={styles.inner}>
                        <h1>{UnitInfo[index].title}简介</h1>
                        <div dangerouslySetInnerHTML = {{__html: UnitInfo[index].txt}}/>
                        <div className={styles.option}>
                            <div className={styles.prev}  onClick={()=>{jump(prev)}}> <p>{UnitName[prev]}</p> </div>
                            <div className={styles.next}  onClick={()=>{jump(next)}}> <p>{UnitName[next]}</p> </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
