import React from "react";
import '../styles/ProgramTile.css';
import { Modal, Image, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
var slugify = require('slugify');

function ProgramTile(program) {
    const sectionSlug = slugify(program.title, {replacement: '-', lower: true})
    const sectionLink = `/programs/${sectionSlug}`;
    const imageLink = `/${program.image_id}`
    return (
        <Modal className="ProgramModal" trigger= {
            <Card className="ProgramTile">
                <Image src={imageLink} wrapped />
                <Card.Content>
                    <Card.Meta>Part {program.program_id}</Card.Meta>
                    <Card.Header>{program.title}</Card.Header>
                </Card.Content>
            </Card>
        }>
            <Modal.Content>
                <Modal.Description>
                    {program.description}
                </Modal.Description>
                <Button primary as={Link} to={sectionLink}>Start</Button>
            </Modal.Content>
        </Modal>
    );
}

export default ProgramTile;