import {FC, ReactNode} from "react";
import styles from './Card.module.scss';

type Props = {
    color: string,
    delay?: string,
    children?: ReactNode,
}

export const Card: FC<Props> = ({color, delay, children}) => {
    return <div className={styles.box} style={{animationDelay: delay ? delay : "0"}}>
        <div className={styles.box__front}/>
        <div className={styles.box__back} style={{backgroundColor: color}}>
            {children}
        </div>
    </div>
}