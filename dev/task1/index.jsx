import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Atomate from './atomate.js';

export default class Task1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ""
        };
        this.Atomate = new Atomate("");
        this.handlerChangedInput = this.handlerChangedInput.bind(this);
    }

    handlerChangedInput(e){
        this.setState({
            data: e.target.value
        });
    }

    render(){
        this.Atomate.setData(this.state.data);
        return(
            <Row>
                <Col xs = {6} sm = {6}>
                    <input type = "text" onChange = {this.handlerChangedInput} className = "input" />
                </Col>
                <Col xs = {6} sm = {6}>
                    <ul className = "list-style">
                        <li className = "list-style-item">
                            {this.Atomate.Do()}
                        </li>
                    </ul>
                </Col>
            </Row>
        );
    }
}