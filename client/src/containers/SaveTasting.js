import { connect } from 'react-redux';
import SaveButton from '../components/SaveButton';
import { saveTasting } from '../actions'

const mapStateToProps = (state) => {
  return {
    rating: state.rating
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

    onClick: (e) => {
      e.preventDefault();
      dispatch(saveTasting(ownProps.rating));
    }

});

const SaveTasting = connect(mapStateToProps, mapDispatchToProps)(SaveButton);

export default SaveTasting;
