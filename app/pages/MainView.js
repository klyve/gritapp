import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {Actions, Scene, Router} from 'react-native-router-flux';



// Homescreen
import SwipeView from '../components/SwipeView';

// Group modules
import GroupType from '../components/group/GroupType';
import GroupName from '../components/group/GroupName';
import GroupSearch from '../components/group/GroupSearch';
import GroupJoin from '../components/group/GroupJoin';
import GroupDashboard from '../components/group/GroupDashboard';
import GroupSettingsMain from '../components/group/groupsettings/GroupSettingsMain';
import Notifications from '../components/Notifications';

import Profile from '../components/Profile';

import ChallengePage from '../components/challenge/ChallengePage';
import SinglePictureView from '../components/challenge/SinglePictureView';

import ProfileSettingsMain from '../components/myprofile/ProfileSettingsMain';
import ProfileBioEdit from '../components/myprofile/ProfileBioEdit';


import LoginView from '../components/user/LoginView';
import RegisterView from '../components/user/RegisterView';

import Signup from '../components/user/signup';
import DescriptionEdit from '../components/group/groupsettings/DescriptionEdit';


import Loadingscreen from '../components/Loadingscreen';


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="loading" hideNavBar component={Loadingscreen} initial={true}/>
    <Scene key="swipeview" hideNavBar component={SwipeView}/>

    <Scene key="loginview" hideNavBar component={LoginView}/>
    <Scene key="registerview" hideNavBar component={RegisterView} />


    <Scene key="groupsearch" hideNavBar component={GroupSearch} />
    <Scene key="groupjoin" hideNavBar component={GroupJoin}/>
    <Scene key="grouptype" hideNavBar component={GroupType} />
    <Scene key="groupname" hideNavBar component={GroupName} />
    <Scene key="groupdashboard" hideNavBar component={GroupDashboard} />

    <Scene key="groupsettingsmain" hideNavBar component={GroupSettingsMain}/>

    <Scene key="profile" hideNavBar component={Profile} />
    <Scene key="notifications" hideNavBar component={Notifications}/>

    <Scene key="challengepage" hideNavBar component={ChallengePage}/>
    <Scene key="singlepictureview" hideNavBar component={SinglePictureView}/>
    <Scene key="profilesettingsmain" hideNavBar component={ProfileSettingsMain}/>
    <Scene key="profilebioedit" hideNavBar component={ProfileBioEdit}/>

    <Scene key="signup" hideNavBar component={Signup}/>

    <Scene key="descriptionedit" hideNavBar component={DescriptionEdit}/>

  </Scene>
);

class MainView extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { state, actions } = this.props;

    return (
      <Router scenes={scenes} state={state} {...actions} />
    );
  }
}


export default connect(state => ({
    state
  }),
  (dispatch) => ({
    actions: bindActionCreators(dispatch)
  })
)(MainView);
