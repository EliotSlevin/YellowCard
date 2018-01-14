import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation';
import { authState$, identUpdate, logoutRequest } from '../../user'
import AppNavigator from './AppNavigator'

export class App extends React.Component {
  componentDidMount() {
    const dispatch = this.props.dispatch
    // subscribe to update events
    authState$.subscribe((next) => {
      if (!next) dispatch(logoutRequest())
      else {
        const user = next
        dispatch(identUpdate(user))
      }
    })
  }

  componentWillUnmount() {
    authState$.unsubscribe()
  }

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(App);