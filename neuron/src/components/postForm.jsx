import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class PostForm extends Component {


    constructor(props){
        super(props);
        this.state = {
            body:''
        };

        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name ]:e.target.value});
    }

    render() { 
        return ( 
            <React.Fragment>
                <Form>
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