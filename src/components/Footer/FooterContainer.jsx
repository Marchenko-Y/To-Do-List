import { connect } from "react-redux";
import { setVisibilityFilter } from "../../redux/reducers/todolist-reducer";
import Footer from "./Footer";

const mapStateToProps = state => {
  return {};
};

const mapDispathToProps = dispatch => {
  return {
    setVisibilityFilter: filter => {
      dispatch(setVisibilityFilter(filter));
    }
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(Footer);

export default FooterContainer;
