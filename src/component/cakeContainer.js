import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeActions";
const cakeContainer = (props) => {
  return (
    <div>
      <h2> number of cakes -{props.numOfCakes} </h2>
      <p onClick={props.buyCake}> buy cake </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
