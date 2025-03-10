import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class CourseEdit extends Component {
  
    course = {
        id:'123',
        name: '',
        description: ''
    };

    constructor(props) {
        super(props);
        this.state = {course: this.course};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        /*if (this.props.match.params.id !== 'new') {
            const crse = await (
                await fetch(`/course/${this.props.match.params.id}`)).json();
            this.setState({course: crse});
        }*/
        const id = this.course.id; 
        console.log('out of condition value of id is:'+id);
        if (id !== 'new') {
            console.log('value of id is:'+id);
        await fetch('/course/'+id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5rYWp3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTcyMDc0ODUxOSwiZXhwIjoxNzIwNzUyMTE5fQ.zcRnoO3Rkv75qD3FPYSqB0mvtSgp5fqAXWj738MMAbw'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({course: data}));
    }


    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let course = {...this.state.course};
        course[name] = value;
        this.setState({course});
    }

async handleSubmit(event) {
    event.preventDefault();
    const {course} = this.state;

    await fetch('/course' + (course.id ? '/' + course.id : ''), {
        method: (course.id) ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5rYWp3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTcyMDc0ODUxOSwiZXhwIjoxNzIwNzUyMTE5fQ.zcRnoO3Rkv75qD3FPYSqB0mvtSgp5fqAXWj738MMAbw'
        },
        body: JSON.stringify(course),
    });
    this.props.history.push('/course');
}

    render() {
        const {course} = this.state;
        const title = <h2>{this.course.id ? 'Edit Client' : 'Add Client'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={this.course.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" value={this.course.description || ''}
                               onChange={this.handleChange} autoComplete="description"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/adminCourses">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
   
}

export default CourseEdit;