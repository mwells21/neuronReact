import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class PostForm extends Component {


    constructor(props){
        super(props);
        this.state = {
            body:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name ]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const post ={
            body: this.state.body
        }


        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data=>console.log(data))
        this.setState({body: ''})
    }

    render() { 
        return ( 
            <React.Fragment>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="makePost">Post</Label>
                        <Input type="textarea" name="body" id="makePost" 
                        onChange ={this.onChange} 
                        value={this.state.body}
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </React.Fragment>
         );
    }
}
 
export default PostForm;