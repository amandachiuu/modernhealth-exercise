import React from "react";
import './ProgramTile.css';
import { Card } from 'semantic-ui-react';

function ProgramTile(num, name) {
    return (
        <Card className="ProgramTile">
            <Card.Content>
                <Card.Meta>Part {num}</Card.Meta>
                <Card.Header>{name}</Card.Header>
            </Card.Content>
        </Card>
    );
}

export default ProgramTile;