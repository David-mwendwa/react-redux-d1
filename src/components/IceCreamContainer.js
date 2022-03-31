import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = (props) => {
  return (
    <div>
      <p>
        Number of IceCream: <strong>{props.numOfIceCream}</strong>
      </p>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
