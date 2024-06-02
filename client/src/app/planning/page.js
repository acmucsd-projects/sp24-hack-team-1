import Link from "next/link"
import styles from "./page.module.css"
import NavBar from '../components/navbar/navbar'

function Planning() {
    return(
        <div>
            <div>
            <NavBar></NavBar>
            </div>
            <h1>
                Your planner is empty. Click the plus to get planning!
            </h1>
        </div>
    )
}
export default Planning;