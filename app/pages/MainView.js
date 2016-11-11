import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {Actions, Scene, Router} from 'react-native-router-flux';

import SwipeView from '../components/SwipeView';

// Group modules
import GroupType from '../components/group/GroupType';
import GroupName from '../components/group/GroupName';
import GroupSearch from '../components/group/GroupSearch';
import GroupJoin from '../components/group/GroupJoin';
import GroupDashboard from '../components/group/GroupDashboard';
import GroupSettingsMain from '../components/group/groupSettings/GroupSettingsMain';
import Notifications from '../components/Notifications';

import Profile from '../components/Profile';


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="swipeview" hideNavBar component={SwipeView} initial={true}/>

    <Scene key="groupsearch" hideNavBar component={GroupSearch} />
    <Scene key="groupjoin" hideNavBar component={GroupJoin} />
    <Scene key="grouptype" hideNavBar component={GroupType} />
    <Scene key="groupname" hideNavBar component={GroupName} />
    <Scene key="groupdashboard" hideNavBar component={GroupDashboard}/>
    <Scene key="groupsettingsmain" hideNavBar component={GroupSettingsMain}/>

    <Scene key="profile" hideNavBar component={Profile}/>
    <Scene key="notifications" hideNavBar component={Notifications}/>


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
