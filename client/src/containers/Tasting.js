import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadTasting } from '../actions'

class Tasting extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadTasting());
  }

  render() {
  	// return <QuizCard {...this.props} />;
  }

}

Tasting.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default connect(state => state.tasting)(Tasting); //what does this do
