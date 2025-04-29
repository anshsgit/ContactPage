import navImage from '../../assets/Frame.png';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.container}>
            <img src={navImage} alt='Logo' />

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;