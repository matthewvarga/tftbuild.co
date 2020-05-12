import { setTheme } from "../../../../actions/index";
import { connect } from 'react-redux';
import NavBar from './navbar/index'; 


const mapStateToProps = (state, ownProps) => ({
	theme: state.theme
});

// dispach 
const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(setTheme(theme))
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
