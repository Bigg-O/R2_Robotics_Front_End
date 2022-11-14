import { Component } from 'react'
import "./css/ViewCard.css"

import Button from "react-bootstrap/Button"

class ViewCard extends Component {
    render() { 
        return ( 
            <tr>
                <td>{this.props.file.id}</td>
                <td>{this.props.file.id}</td>
                <td>{this.props.file.id}</td>
                <td>{this.props.file.id}</td>
                <td>{this.props.file.id}</td>
                <td>{this.props.file.id}</td>
                <td>{this.props.file.id}</td>
                <td>{this.props.file.id}</td>
                <td>
                    <Button variant="link" className="edit">Edit</Button>
                    <Button variant="link" className="delete">Delete</Button>
                </td>
            </tr>
        );
    }
}
 
export default ViewCard;