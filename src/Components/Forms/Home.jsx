import "../css/Home.css"
import { useNavigate } from "react-router-dom";
import HomeForm from "./HomeForm"
import { useState } from "react"

import Container from "react-bootstrap/Container"
import axios from "axios";

const HEROKU_URI="https://r2-robotics-backend.herokuapp.com"
const HEADERS = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
    }
}

const Home = () => {
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    
    const handleSubmit = e => {
        e.preventDefault()
        const user_id = localStorage.getItem("user_id")
        const JWT = localStorage.getItem("JWT")
        
        setFile(e.target.formFile.files[0])
        const formData = new FormData()
        formData.append("file", file)
        formData.append("user_id", user_id)
        formData.append("product_name", e.target.formProductName.value)
        formData.append("product_info", e.target.formProductInfo.value)
        formData.append("reference_number", e.target.formReferenceNumber.value)
        formData.append("country", e.target.formCountry.value)

        if (file) {
            axios
            .post(HEROKU_URI + "/files/create", formData, {
                // .post("http://localhost:3001/files/create", formData, {
                    headers: {
                        Authorization: `Bearer ${JWT}`,
                        "Content-Type": 'multipart/form-data'
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
        } else {
            alert("wait til the file loads and try again please!")
        }
    }


    return (
        <Container fluid className="home-container">
            <HomeForm onSubmit={handleSubmit}/>
        </Container>
    );
}
 
export default Home;