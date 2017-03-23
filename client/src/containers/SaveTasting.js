import { connect } from 'react-redux';
import SaveButton from '../components/SaveButton';
import { saveTasting } from '../actions'

const mapStateToProps = (state) => {
  return {
    rating: state.rating
  }
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
        const {rating} = propsFromState;
        const { dispatch } = propsFromDispatch;

        return {
         onClick: () => dispatch(saveTasting(rating))
       };
};

const SaveTasting = connect(mapStateToProps, null, mergeProps)(SaveButton);

export default SaveTasting;
