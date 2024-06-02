import Link from "next/link"
import styles from "./page.module.css"
import Searchbar from "../components/Searchbar/Searchbar"
import Navbar from "../components/navbar/navbar"

function MainPage() {
    return(
        <div className={styles.homeContainer}>
            <div>
                <Navbar></Navbar>
            </div>
            <Searchbar></Searchbar>
        </div>
    )
}
export default MainPage;