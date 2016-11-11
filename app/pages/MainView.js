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
import ChallengePage from '../components/challenge/ChallengePage';


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="swipeview" hideNavBar component={SwipeView} initial={true}/>

    <Scene key="groupsearch" hideNavBar component={GroupSearch} />
    <Scene key="groupjoin" hideNavBar component={GroupJoin} />
    <Scene key="grouptype" hideNavBar component={GroupType} />
    <Scene key="groupname" hideNavBar component={GroupName} />
    <Scene key="groupdashboard" hideNavBar component={GroupDashboard}/>
    <Scene key="challengepage" hideNavBar component={ChallengePage}/>

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
