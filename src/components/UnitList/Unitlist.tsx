import styles from './Unitlist.module.scss'
import React from "react";
import {useHistory} from "react-router-dom";

interface Props {
    Unitlist: string[]
}
const Unitlist = (props: Props) => {
    const history = useHistory()
    const jump = (index: number) => index < 9 ? history.push(`/index?type=${index}`) : ""

    return (
        <div className={styles.inner}>
            {
                props.Unitlist.map((img, index) => {
                    return (
                        <img
                            onClick={() => {
                                jump(index)
                            }}
                            className={styles.list_item}
                            src={require(`../../assets/image/Home/${img}.png`).default} alt={""}/>
                    )
                })
            }
                </div>
                )
            }
export default Unitlist;