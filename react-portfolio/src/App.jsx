import styles from './App.module.css';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';

// insert new components here
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
