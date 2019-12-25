import React from 'react';
import ProgramTile from '../../components/Programs/ProgramTile';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPrograms } from "../../redux/actions";

class ProgramsPage extends React.Component {
    componentDidMount() {
        this.props.fetchPrograms();
    }
    
    getProgramTiles() {        
        const tiles = this.props.programs.map(program => (
            <Grid.Column>
                {ProgramTile(program)}
            </Grid.Column>
        ));
        return (
          <Grid columns={this.props.programs.length}>
              <Grid.Row>
                  {tiles}
              </Grid.Row>
          </Grid>
        );
    }

    render() {
        console.log(this.props.programs);
        return (
            <div>
            <h2>Core Pillars Program</h2>
                {this.getProgramTiles()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    programs: state.programs
})
const mapDispatchToProps = (dispatch) => ({
    fetchPrograms: () => dispatch(fetchPrograms())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsPage);