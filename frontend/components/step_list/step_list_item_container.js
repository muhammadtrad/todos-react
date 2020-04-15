import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { receiveStep, removeStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { step }) => ({
    removeStep: () => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receiveStep(step))
});


export default connect(
    null,
    mapDispatchToProps
)(StepListItem);