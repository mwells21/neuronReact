import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class Profile extends Component {
    state = {         
        user: 'Michael Wells',
        group: 'Research',
        profileImage: 'data:image/png;base64,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',
        profileBio: 'Research Programer' 
    }

    render() { 
        return (
            <React.Fragment>
                <Card>
                    <CardImg  src={this.state.profileImage} alt="Card image cap" width="100px" height="300px" />
                    <CardBody>
                    <CardTitle>{this.state.user}</CardTitle>
                    <CardSubtitle>{this.state.group}</CardSubtitle>
                    <CardText>{this.state.profileBio}</CardText>
                    <Button>Button</Button>
                    </CardBody>
                </Card>
            </React.Fragment> 
          );
    }
}
 
export default Profile;