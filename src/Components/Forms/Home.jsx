import "../css/Home.css"
import { useNavigate } from "react-router-dom";
import HomeForm from "./HomeForm"

import Container from "react-bootstrap/Container"
import axios from "axios";

const HEROKU_URI="https://r2-robotics-backend.herokuapp.com"

const Home = () => {
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        axios
            .post(HEROKU_URI + "/files/create", {
            // .post("http://localhost:3001/files/create", {
                "user_id": localStorage.getItem("user_id"),
                "productId": e.target.formProductId.value,
                "productName": e.target.formProductName.value,
                "productInfo": e.target.formProductInfo.value,
                "referenceNumber": e.target.formReferenceNumber.value,
                "country": e.target.formCountry.value,
                "image": e.target.formImage.value,
                "file": e.target.formFile.value
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("JWT")}`
                }
            })
            .then(resp => {
                console.log(resp)
                alert("successfully file and or image has been uploaded!")
                navigate("/view")
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
    }


    return (
        <Container fluid className="home-container">
            <HomeForm onSubmit={handleSubmit}/>
        </Container>
    );
}
 
export default Home;