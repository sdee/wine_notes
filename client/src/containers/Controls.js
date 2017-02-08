import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SliderPanel from '../components/SliderPanel';

const mapStateToProps = (state) => {
  return {
    rating: state.rating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const Controls = connect(mapStateToProps, mapDispatchToProps)(SliderPanel);

export default Controls;