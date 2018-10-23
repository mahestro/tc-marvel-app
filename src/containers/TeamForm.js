import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '../components/TextField'
import Button from '../components/Button'
import Message from '../components/Message'
import ProjectTypeSelector from '../components/ProjectTypeSelector';
import * as siteActions from '../actions/teamActions';
import * as Routes from '../constants/routes';

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

  componentWillReceiveProps(nextProps) {
    if (this.props.team.id !== nextProps.team.id) {
      // loading course directly from refreshing browser
      this.setState({team: Object.assign({}, nextProps.team)});
    }
  }

  onSubmit = e => {
    e.preventDefault();

    if (!this.isFormValid())
      return;

    const team = {
      ...this.state.team,
      projectTypes: this.state.team.projectTypes.map(t => {
        return { _id: t._id }
      })
    }

    this.setState({saving: true});

    this.props.actions.saveTeam(team)
      .then(() => {
        this.setState({saved: true});
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleTextfield = e => {
    const field = e.target.name;
    let team = this.state.team;
    team[field] = e.target.value;
    this.setState({team: Object.assign({}, team)});
  }

  handleAddProjectType = e => {
    const projectTypeId = e.target.name.substr(e.target.name.indexOf('_') + 1);
    let team = this.state.team;
    let newProjectType;

    this.props.dropDownItems.find(obj => {
      if (obj.marvelAppId === projectTypeId) {
        newProjectType = obj;
        return true;
      }

      return false;
    });

    if (newProjectType) {
      team.projectTypes.push(newProjectType);
      this.setState({ team });
    }
  }

  handleDeleteProjectType = e => {
    const index = Number(e.target.name.substr(e.target.name.indexOf('_') + 1));
    let team = this.state.team;
    team.projectTypes.splice(index, 1);

    this.setState({ team });
  }

  isFormValid = () => {
    let formIsValid = true;
    let errors = {};

    if (this.state.team.idTopcoderChallenge.trim() === '') {
      formIsValid = false;
      errors.idTopcoderChallenge = 'Challenge is required';
    }

    if (this.state.team.idTeamMarvelApp.trim() === '') {
      formIsValid = false;
      errors.idTeamMarvelApp = 'Marvelapp team is required';
    }

    if (this.state.team.teamName.trim() === '') {
      formIsValid = false;
      errors.teamName = 'Team Name is required';
    }

    if (this.state.team.baseName.trim() === '') {
      formIsValid = false;
      errors.baseName = 'Base Name is required';
    }

    if (this.state.team.projectTypes.length === 0) {
      formIsValid = false;
      errors.projectType = 'At least one project type needs to be added';
    }

    this.setState({errors});
    return formIsValid;
  }

  render() {
    const {
      idTopcoderChallenge,
      idTeamMarvelApp,
      teamName,
      baseName,
      projectTypes
     } = this.state.team;
    const { errors, saving, saved } = this.state;

    return (
      <div>
        {
          saved && (
            <Message title="Team edited successfully">
              <p><Link to={Routes.TEAMS}>Back to teams</Link></p>
            </Message>
          )
        }

        {
          !saved &&
          <section className="form">
            <h5>Edit Team</h5>

            <div className="wrapper--form">
              <form onSubmit={this.onSubmit}>
               <TextField
                  type="text"
                  name="idTopcoderChallenge"
                  value={idTopcoderChallenge}
                  label="Topcoder Challenge ID"
                  placeholder="e.g. 3006714"
                  required={true}
                  error={errors.idTopcoderChallenge}
                  onChange={this.handleTextfield}
                />

                <TextField
                  type="text"
                  name="idTeamMarvelApp"
                  value={idTeamMarvelApp}
                  label="Marvelapp Team ID"
                  placeholder="e.g. 5219"
                  required={true}
                  error={errors.idTeamMarvelApp}
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
                  handleDeleteProjectType={this.handleDeleteProjectType}
                  handleAddProjectType={this.handleAddProjectType}
                  error={errors.projectType}
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
  const foundTeam = teams.find(team => team.idTeamMarvelApp === id);
  if (foundTeam) return foundTeam;
  return null;
}

function mapStateToProps(state, ownProps) {
  const idTeamMarvelApp = ownProps.match.params.id;
  let team = {
    idTeamMarvelApp: '',
    idTopcoderChallenge: '',
    teamName: '',
    baseName: '',
    projectTypes: []
  };

  if (idTeamMarvelApp && state.teams.length > 0) {
    team = getTeamById(state.teams, idTeamMarvelApp);
  }

  return {
    team: team,
    dropDownItems: state.site.projectTypes.map(item => {
      return {
        ...item,
        _id: item.id
      }
    })
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(siteActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
