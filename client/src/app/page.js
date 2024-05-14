import Image from 'next/image';
import styles from './page.module.css';
import SearchBar from './components/Searchbar/Searchbar';
import NavBar from './components/navbar/navbar';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Yeseva+One&display=swap" rel="stylesheet"></link>
      <div>
      <NavBar></NavBar>
      </div>
        <h1 className={styles.title}>Travel Hacks in San Diego</h1>
        <div className={styles.homebody}>
          <div className={styles.homeimg1}>
            <Image className={styles.img1}
            src="/sdpic1.png"
            alt="homepic1"
            width={708}
            height={564}
            priority
            />
          </div>
          <div className={styles.homerightside}>
            <p className={styles.desc}>
            San Diego is a vibrant coastal city in Southern California known for its 
            beautiful beaches, perfect weather, and rich cultural diversity.
            </p>
            <Image className={styles.img2}
            src="/img2.jpg"
            alt="homepic2"
            width={250}
            height={250}
            priority
            />
            <button>
              Plan your itinerary
            </button>
          </div>
      </div>
    </div>
  )
}
