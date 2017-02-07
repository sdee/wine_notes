import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TasteGraph from '../components/TasteGraph';

class Tasting extends Component {

  componentDidMount() {
    console.log("componentDidMount");
    const { dispatch } = this.props;
  }

  render() {
    return <TasteGraph {...this.props} />;
  	
  }

}

Tasting.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default connect(state => state.rating)(Tasting); //what does this do
