import React from 'react';
import ProgramTile from '../../components/Programs/ProgramTile';
import { Grid } from 'semantic-ui-react';

class ProgramsPage extends React.Component {
    render() {
        return (
            <div>
            <h2>Core Pillars Program</h2>
            <Grid columns={4}>
            <Grid.Row>
                <Grid.Column>
                    {ProgramTile("One", "Mindfulness")}
                </Grid.Column>
                <Grid.Column>
                    {ProgramTile("Two", "Values")}
                </Grid.Column>
                <Grid.Column>
                    {ProgramTile("Three", "Action")}
                </Grid.Column>
                <Grid.Column>
                    {ProgramTile("Four", "Flexibility")}
                </Grid.Column>
            </Grid.Row>
        </Grid>
            </div>
        )
    }
}

export default ProgramsPage;