import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RequestSuccess from './RequestSuccess';
import RequestError from './RequestError';
import TextField from '../components/TextField'
import Button from '../components/Button'
import ProjectTypeSelector from '../components/ProjectTypeSelector';
import { TCMARVEL_API_BASE_URL, MAIL_RECEIVER } from '../constants/config';
import * as siteActions from '../actions/teamActions';

class TeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: Object.assign({}, props.team),
      errors: {},
      saving: false,
      saved: false
    }
  }

  componentDidMount() {
    if (!isNaN(this.props.match.params.id)) {
      const teamId = Number.parseInt(this.props.match.params.id, 10);

      // Load team
    }
  }

  onSubmit = e => {
    e.preventDefault();

    if (!this.isFormValid())
      return;

    this.setState({saving: true});
  }

  handleTextfield = e => {
    const field = e.target.name;
    let team = this.state.team;
    team[field] = e.target.value;
    this.setState({team: Object.assign({}, team)});
  }

  handleAddProjectType = e => {

  }

  handleDeleteProjectType = e => {

  }

  isFormValid = () => {
    let formIsValid = true;
    let errors = {};

    if (this.state.team.email.trim() === '') {
      formIsValid = false;
      errors.email = 'Email is required. Please enter your email address';
    }

    if (this.state.team.tcHandle.trim() === '') {
      formIsValid = false;
      errors.tcHandle = 'Topcoder handle is required. Please enter your Topcoder handle';
    }

    this.setState({errors});
    return formIsValid;
  }

  render() {
    const {
      challengeId,
      teamName,
      baseName,
      projectTypes
     } = this.state.team;
    const { errors, saving, saved } = this.state;

    return (
      <div>
        {
          saved && <RequestSuccess />
        }

        {
          !saved &&
          <section className="form">
            <h5>Edit Team</h5>

            <div className="wrapper--form">
              <form onSubmit={this.onSubmit}>
               <TextField
                  type="text"
                  name="challengeId"
                  value={challengeId.toString()}
                  label="Topcoder Challenge ID"
                  placeholder="e.g. 3006714"
                  required={true}
                  error={errors.challengeId}
                  onChange={this.handleTextfield}
                />

                <TextField
                  type="text"
                  name="teamName"
                  value={teamName}
                  label="Team Name"
                  placeholder="Marvelapp Team Name"
                  required={true}
                  error={errors.teamName}
                  onChange={this.handleTextfield}
                />

                <TextField
                  type="text"
                  name="baseName"
                  value={baseName}
                  label="Prototype Base Name"
                  placeholder="e.g. Ratio"
                  required={true}
                  error={errors.baseName}
                  onChange={this.handleTextfield}
                />

                <ProjectTypeSelector
                  dropDownItems={this.props.dropDownItems}
                  projectTypes={projectTypes}
                  addProjectTypeHandler={this.handleAddProjectType}
                  handleDeleteProjectType={this.handleDeleteProjectType}
                  handleAddProjectType={this.handleDeleteProjectType}
                />

                <div className="form__submit-area">
                  <Button
                    label="Save Team"
                    progress={saving} />
                </div>

              </form>
            </div>
          </section>
        }
      </div>
    );
  }
}

function getTeamById(teams, id) {
  const foundTeam = teams.filter(team => team.teamId == id);
  if (foundTeam) return foundTeam[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const teamId = ownProps.match.params.id;
  let team = {
    teamId: -1,
    challengeId: -1,
    teamName: '',
    baseName: '',
    requestsCount: 0,
    projectTypes: []
  };

  if (teamId && state.teams.length > 0) {
    team = getTeamById(state.teams, teamId);
  }

  return {
    team: team,
    dropDownItems: state.site.projectTypes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(siteActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
