
import Link from "next/link"
import styles from "./page.module.css"
import NavBar from '../components/navbar/navbar'
import Map from '../components/navbar/map'
import{
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useJsApiLoader,
} from "@react-google-maps/api"

function map() {
    return(
        <div>
            <div>
            <NavBar></NavBar>
            </div>
            <div>
            <Map></Map>
            </div>
        </div>
    )
}

export default map;