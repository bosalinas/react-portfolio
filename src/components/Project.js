import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function Project(project) {
    let { projectName, link } = project;
    // let img = props.img;
    return (
            <Card style={{ width: '18rem' }}>
                <img/>
                <CardBody>
                    <CardTitle tag="h5">
                        {projectName}
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>{link}</Button>
                </CardBody>
            </Card>
    )
}
