import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';

import Task1 from './task1/';

class Exercise extends React.Component{
    render(){
        return(
            <Row>
                <Col xs = {12} sm = {12} className = "text-center">
                    <h3>Задание {this.props.num}</h3>
                    <h4>{this.props.title}</h4>
                    <h5>{this.props.description}</h5>
                    <Task1 />
                </Col>
            </Row>
        );
    }
}

class Page extends React.Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs = {12} sm = {12} className = "text-center">
                        <h1>Автоматы с магазинной памятью</h1>
                        <h2>Рябцев Владимир Дмитриевич.</h2>
                    </Col>
                </Row>
                <Exercise
                    num = "1"
                    title = "Построить примитивный МП - автомат."
                    description = "7. {1^n 0^m | m&gt;n≥0}."

                />
            </Grid>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('app'));