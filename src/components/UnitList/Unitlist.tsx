import styles from './Unitlist.module.scss'
import React from "react";
import {Link} from "react-router-dom";

interface Props {
    Unitlist: string[]
}

const Unitlist = (props: Props) => {
    return (
        <div className={styles.inner}>
            {
                props.Unitlist.map((img) => {
                    return <Link key={img} to={`/index?type=${img}`}>
                        <img
                            className={styles.list_item}
                            src={require(`../../assets/image/Home/${img}.png`).default} alt={""}/>
                    </Link>
                })
            }
        </div>
    )
}
export default Unitlist;