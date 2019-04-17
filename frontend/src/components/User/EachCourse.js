import React, {
    Component
} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {
    Link,
    withRouter
} from "react-router-dom";
import logo from "../User/Faculty/imagess.jpeg";

export default class EachCourse extends Component {
    constructor() {
        super();
        this.state = {
            class: []
        };
    }
    componentDidMount() {

        axios.get("/course").then(res => {
            if (res.status === 200) {
                // console.log('from search helper',res.data);
                this.setState({
                    class: res.data.course
                });
            }
        });
    }

    render() {
        let classesResult = null;

        console.log('mounted', this.state.class)
        if (this.state.class != null) {
            classesResult = this.state.class.map(singleClass => {
                return ( <
                    div style = {
                        {
                            width: "300px",
                            height: "350px"
                        }
                    }
                    className = "col s12 m7"
                    key = {
                        singleClass.id
                    } >
                    <
                    div className = "card" >
                    <
                    div className = "card-image" >
                    <
                    img src = {
                        logo
                    }
                    /> < /
                    div > <
                    div className = "card-content" >
                    <
                    span style = {
                        {
                            color: "black"
                        }
                    }
                    className = "card-title" > {
                        singleClass.courseName
                    } <
                    /span> <
                    p > {
                        singleClass.course_description
                    } < /p> < /
                    div > <
                    div className = "card-action" >
                    <
                    Link to = "/eachCourseView" / >
                    <
                    /div> < /
                    div > <
                    /div>
                );
            });

            return ( <
                div className = "contianer" >
                <
                div > {
                    classesResult
                } < /div> < /
                div >
            );
        }
    }
}