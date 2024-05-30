import Link from "next/link"
import styles from "./page.module.css"
import Searchbar from "../components/Searchbar/Searchbar"
import Navbar from "../components/navbar/navbar"
import Image from 'next/image';
import ExploreCard from '../components/exploreCard/ExploreCard'

function MainPage() {
    return(
        <div className={styles.homeContainer}>
            <div>
                <Navbar></Navbar>
            </div>
            <Searchbar></Searchbar>
            <div className={styles.exploreCardsContainer}>
                <ExploreCard
                    title="card title 2"
                    imageURL="/homepic2.svg"
                    body="test desc 2"
                    />
                <ExploreCard
                    title="card title 2"
                    imageURL="/homepic2.svg"
                    body="test desc 2"
                    />
                <ExploreCard
                    title="card title 2"
                    imageURL="/homepic2.svg"
                    body="test desc 2"
                    />
            </div>
            <div className={styles.hack_footer}>
            <Image className={styles.hack_footer}
            src="/hack_footer.svg"
            alt="hack_footer"
            width={1440}
            height={229}
            priority
            />
          </div>
        </div>
    )
}
export default MainPage;