import React from 'react';
import { connect } from 'react-redux';
import { Segment, Tab, Grid, Image, Divider } from 'semantic-ui-react';


class SectionPage extends React.Component {
    
    getSectionContent() {
        const program = this.props.match.params.program;
        const program_id = this.props.programSectionMap[program];
        const sectionContent = this.props.section[program_id].reduce((panes, section) => {
            panes.push({ menuItem: section.title, render: () => (
            <Tab.Pane>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            {section.description}
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={'/'+section.image_id}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Tab.Pane>
            )});
            return panes;
        }, []);
        return (

            <Tab
                menu={{ fluid: true, vertical: true, tabular: true }}
                menuPosition='left'
                panes={sectionContent}
            />
        );
    }

    render() {
        return (
            <Segment style={{ margin: '30px', padding: '30px' }}>
            <h2><center>{this.props.match.params.program}</center></h2>
            <Divider />
            <h3>What does {this.props.match.params.program} do?</h3>
            {this.getSectionContent()}
            </Segment>
        );
    }
}

const mapStateToProps = (state) => ({
    section: state.section,
    programSectionMap: state.programSectionMap
});

export default connect(mapStateToProps)(SectionPage);