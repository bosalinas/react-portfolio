import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardSubtitle } from 'reactstrap';
import Portfolio from "./Portfolio"


export default function Project(props) {
    let project = props.projectName;
    let link = props.link;
    // let img = props.img;
    return (
        <Portfolio>
            <Card style={{ width: '18rem' }}>
                <img/>
                <CardBody>
                    <CardTitle tag="h5">
                        {project}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6">
                        {link}
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </Portfolio>
    )
}
