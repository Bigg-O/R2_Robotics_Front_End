import { Component } from 'react'
import "./css/ViewCard.css"

import Button from "react-bootstrap/Button"

class ViewCard extends Component {
    render() { 
        return ( 
            <tr>
                <td>{this.props.file._id}</td>
                <td>{this.props.file.dateCreated}</td>
                <td>{this.props.file.productName}</td>
                <td>{this.props.file.productInfo}</td>
                <td>{this.props.file.referenceNumber}</td>
                <td>{this.props.file.country}</td>
                <td>TBD</td>
                <td>TBD</td>
                <td>
                    <Button variant="link" className="edit">Edit</Button>
                    <Button variant="link" className="delete">Delete</Button>
                </td>
            </tr>
        );
    }
}
 
export default ViewCard;