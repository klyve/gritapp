import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {Scene, Router} from 'react-native-router-flux';

import * as friendActions from '../actions/friends';
import SwipeView from '../components/SwipeView';

// Group modules
import GroupType from '../components/group/GroupType';
import GroupName from '../components/group/GroupName';
import GroupSearch from '../components/group/GroupSearch';
import GroupJoin from '../components/group/GroupJoin';

import GroupDashboard from '../components/group/GroupDashboard';



class MainView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;

    return (
      <Router>
      <Scene key="root">
        <Scene key="swipeview" hideNavBar component={SwipeView} state={state} {...actions} initial={true}/>

        <Scene key="groupsearch" hideNavBar component={GroupSearch} state={state} {...actions} />
        <Scene key="groupjoin" hideNavBar component={GroupJoin} state={state} {...actions} />
        <Scene key="grouptype" hideNavBar component={GroupType} state={state} {...actions} />
        <Scene key="groupname" hideNavBar component={GroupName} state={state} {...actions} />
        <Scene key="groupdashboard" hideNavBar component={GroupDashboard} state={state} {...actions}/>

      </Scene>
    </Router>
    );
  }
}


export default connect(state => ({
    state
  }),
  (dispatch) => ({
    actions: bindActionCreators(friendActions, dispatch)
  })
)(MainView);
