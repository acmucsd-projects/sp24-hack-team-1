import Link from "next/link"
import styles from "./page.module.css"

function Planning() {
    return(
        <Link href="/">
                <button className={styles.btn}>Go to Planning Page</button>
        </Link>
    )
}
export default Planning;