import { Component } from "react"
import "./css/View.css"
import ViewCard from "../Components/ViewCard"

import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

class View extends Component {
    render() { 

        return (
            <Container fluid className="view-container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Product Name</th>
                            <th>Product Info</th>
                            <th>Reference #</th>
                            <th>Country</th>
                            <th>Image</th>
                            <th>File Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.files.map(file => (
                            <ViewCard
                                key={file.id}
                                file={file}
                            />
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
 
export default View;