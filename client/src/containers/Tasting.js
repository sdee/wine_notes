import { connect } from 'react-redux';
import TasteGraph from '../components/TasteGraph';

const mapStateToProps = (state) => {
  return {
    rating: state.rating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const Tasting = connect(mapStateToProps, mapDispatchToProps)(TasteGraph);

export default Tasting;