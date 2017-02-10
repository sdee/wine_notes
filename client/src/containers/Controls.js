import { connect } from 'react-redux';
import SliderPanel from '../components/SliderPanel';
import { setRating } from '../actions'

const mapStateToProps = (state) => {
  return {
    rating: state.rating
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onMoveSlider: (component, status) => { dispatch(setRating(component, status)) }
  }
}

const Controls = connect(mapStateToProps, mapDispatchToProps)(SliderPanel);

export default Controls;