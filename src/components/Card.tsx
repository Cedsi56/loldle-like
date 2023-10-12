import {FC, ReactNode} from "react";
import styles from './Card.module.scss';

type Props = {
    color: string,
    text: string,
    delay?: string,
    children?: ReactNode,
}

export const Card: FC<Props> = ({color, text, delay, children}) => {
    if (color == "yellow-under") {
        return <div className={styles.box} style={{animationDelay: delay ? delay : "0"}}>
        <div className={styles.box__front}/>
        <div className={styles.box__back} style={{backgroundColor: color}}>
            <span>{text}</span>
            <div className={styles.cardcontentdown}>
                {children}
            </div>
        </div>
    </div>
    } else if (color == "yellow-over"){
        return <div className={styles.box} style={{animationDelay: delay ? delay : "0"}}>
        <div className={styles.box__front}/>
        <div className={styles.box__back} style={{backgroundColor: color}}>
            <span>{text}</span>
            <div className={styles.cardcontentup}>
                {children}
            </div>
        </div>
    </div>
    } else {
        return <div className={styles.box} style={{animationDelay: delay ? delay : "0"}}>
        <div className={styles.box__front}/>
        <div className={styles.box__back} style={{backgroundColor: color}}>
            <span>{text}</span>
            <div className={styles.cardcontent}>
                {children}
            </div>
        </div>
    </div>
    }
}