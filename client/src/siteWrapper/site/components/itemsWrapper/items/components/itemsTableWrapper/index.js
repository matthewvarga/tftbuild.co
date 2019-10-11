import { setDescriptionVisibility } from "../../../../../../../actions/index";
import { connect } from 'react-redux';
import Items from './itemsTable/index'; 


const mapStateToProps = (state, ownProps) => ({
    descriptionVisibility: state.descriptionVisibility
});

// dispach 
const mapDispatchToProps = dispatch => ({
    setDescriptionVisibility: descriptionVisibility => dispatch(setDescriptionVisibility(descriptionVisibility))
});


export default connect(mapStateToProps, mapDispatchToProps)(Items);
