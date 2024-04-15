import Link from "next/link"
import styles from "./page.module.css"

function MainPage() {
    return(
        <Link href="/">
                <button className={styles.btn}>Go to MainPage Page</button>
        </Link>
    )
}
export default MainPage;