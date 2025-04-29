import styles from './ContactForm.module.css';
import serviceImage from '../../assets/Service.png'
import Button from '../button/Button';
import {MdOutlineMessage, MdAlternateEmail} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';

console.log(MdOutlineMessage);

export default function ContactForm() {
    return (
        <div className={styles.container}>
            <section className={styles.formContainer}>
                <div className={styles.buttonContainer}>
                <div className={styles.innerButtonContainer}>
                <Button Icon={MdOutlineMessage} message='VIA SUPPORT CHAT' outline={false} />
                <Button Icon={IoMdCall} message='VIA CALL' outline={false} />
                </div>

                <Button Icon={MdAlternateEmail} message='VIA EMAIL FORM' outline={true} />

                </div>
                <form className={styles.form}>
                    <div className={styles.formEntry}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' />
                    </div>
                    
                    <div className={styles.formEntry}>
                    <label htmlFor='email'>E-mail</label>
                    <input id='email' type='text' />
                    </div>
                    
                    <div className={styles.formEntry}>
                    <label htmlFor='text'>Text</label>
                    <textarea id='text' rows='8' />
                    </div>

                    <div className={styles.button}>
                    <button>SUBMIT</button>
                    </div>
                    
                </form>
               
                
            </section>

            <section>
                <img src={serviceImage} alt="Service image" />
            </section>
        </div>
    )
}