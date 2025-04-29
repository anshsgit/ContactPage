import './App.css';
import Navigation from './components/navigation/Navigation';
import Contact from './components/contact/Contact';
import ContactForm from './components/contactForm/ContactForm';

export default function App() {
  return (
    <div className='container'>
      <header>
      <Navigation />
      </header>

      <main>
        <Contact />
        <ContactForm />
      </main>
    </div>
  )
}