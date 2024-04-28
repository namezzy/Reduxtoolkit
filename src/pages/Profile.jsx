import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {subNumber } from "../store/features/counter";

export class Profile extends PureComponent {


  subNumber(num) {
      this.props.subNumber(num)
  }
  
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>Page Counter: {counter}</h2>
        <button onClick={(e) => this.subNumber(5)}>-5</button>
        <button onClick={(e) => this.subNumber(8)}>-8</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  subNumber(num) {
      dispatch(subNumber(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
