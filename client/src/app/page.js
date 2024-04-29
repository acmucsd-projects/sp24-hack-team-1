import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navbar/navbar'

export default function Home() {
  return (
    <body>
      <div>
      <NavBar></NavBar>
      </div>
      <h1 className={styles.title}>Travel Hacks in San Diego</h1>
      <p id='desc'>
        San Diego is a vibrant coastal city in Southern California known for its 
        beautiful beaches, perfect weather, and rich cultural diversity.
      </p>
      <Image
        src="/homepic1.svg"
        alt="homepic1"
        width={708}
        height={564}
        priority
      />
      <Image
        src="/homepic2.svg"
        alt="homepic2"
        width={621}
        height={283}
        priority
      />
      <button>
        Plan your itinerary
      </button>
    </body>
  )
}
