import styles from './Button.module.css';

export default function Button({Icon, message, outline}) {
    const whichButton = outline? styles.secondaryContainer : styles.primaryContainer;

    return (
        <button className={whichButton}>
            <Icon className={styles.icon} /> {message}
        </button>
    )
}