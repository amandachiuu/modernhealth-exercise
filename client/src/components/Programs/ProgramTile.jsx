import React from "react";
import './ProgramTile.css';
import { Modal, Image, Card } from 'semantic-ui-react';

function ProgramTile(program) {
    const imageStyle = {
        height: '300px',
        width: '100%'
    };
    return (
        <Modal trigger= {
            <Card className="ProgramTile">
                <Image src={program.image_id} wrapped />
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
            </Modal.Content>

        </Modal>
    );
}

export default ProgramTile;