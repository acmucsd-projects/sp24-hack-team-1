import Link from "next/link"
import styles from "./page.module.css"
import NavBar from '../components/navbar/navbar'
import Card from '../components/locationCard/Card'

function Planning() {
    return(
        <div>
            <div>
            <NavBar></NavBar>
            </div>
            <h1>
                Your planner is empty. Click the plus to get planning!
            </h1>
            <div className={styles.cardsContainer}>
                <Card
                title="Card Title"
                imageURL="https://images.app.goo.gl/PFrR8yG3jZ2NYrsV9"
                body="this is a test desc"
                />
                <Card
                title="card title 2"
                imageURL="/homepic2.svg"
                body="test desc 2"
                />
                <Card
                title="card title 2"
                imageURL="/homepic2.svg"
                body="test desc 2"
                />
                <Card
                title="card title 2"
                imageURL="/homepic2.svg"
                body="test desc 2"
                />
                <Card
                title="card title 2"
                imageURL="/homepic2.svg"
                body="test desc 2"
                />
                <Card
                title="card title 2"
                imageURL="/homepic2.svg"
                body="test desc 2"
                />
                <Card
                title="card title 2"
                imageURL="/homepic2.svg"
                body="test desc 2"
                />
            </div>
        </div>
    )
}
export default Planning;