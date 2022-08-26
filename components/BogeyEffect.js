import React from "react";
import BogeyEffectItem from "./BogeyEffectItem";

export default class BogeyEffect extends React.Component {
  constructor(props) {
    super(props);
    this.numBogeys = 50;
  }

  bogeyEls = () => {
    let arr = [];
    for(let i = 0; i < this.numBogeys; i++) {
      let dimension = 200 * Math.random();
      dimension = dimension < 30 ? 30 : dimension;
      arr.push(<BogeyEffectItem height={dimension} width={dimension} left={i * 2} startAnimationSeconds={Math.random() * 5} />)
    }
    return arr;
  }

  render() {
    return (
      <>
        <div className={`bogey-effect-container ${this.props.isVisible ? '' : 'hidden'}`}>
          {this.props.isVisible && this.bogeyEls()}
        </div>
      </>
    );
  }
}