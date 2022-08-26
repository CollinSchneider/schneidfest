import React from "react";

export default class Diamond extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shimmers: [] }
  }

  componentDidMount() {
    if(this.props.shimmer) {
      this.setState({ shimmers: this.generateShimmerDivs() })
    }
  }

  generateShimmerDivs() {
    return(
      <>
        <div className='shimmer' style={{ 
          position: "absolute",
          marginLeft: `${Math.random() * 100}%`,
          width: '4px',
          height: '4px',
          backgroundColor: 'white'
        }}></div>
        <div className='shimmer' style={{ 
          position: "absolute",
          marginLeft: `${Math.random() * 100}%`,
          width: '4px',
          height: '4px',
          backgroundColor: 'white'
        }}></div>
        <div className='shimmer' style={{ 
          position: "absolute",
          marginLeft: `${Math.random() * 100}%`,
          width: '4px',
          height: '4px',
          backgroundColor: 'white'
        }}></div>
        <div className='shimmer' style={{ 
          position: "absolute",
          marginLeft: `${Math.random() * 100}%`,
          width: '4px',
          height: '4px',
          backgroundColor: 'white'
        }}></div>
      </>
    );
  }

  render() {
    return(
      <>
        <div className='diamond'>
          {this.state.shimmers}
        </div>
        <style jsx>{`
          .diamond {
            position: absolute;
            z-index: 3;
            top: 10px;
            width: 100%;
            height: 100px;
          }
          .diamond:before {
            content: "";
            width: 0;
            position: absolute;
            border-bottom: 20px solid #e1e1e1;
            border-right: 20px solid transparent;
            border-left: 120px solid transparent;
            margin-top: -20px;
          }
          .diamond:after {
            content: "";
            width: 0;
            position: absolute;
            border-top: 20px solid #e1e1e1;
            border-right: 20px solid transparent;
            border-left: 120px solid transparent;
          }
        `}</style>
      </>
    )
  }
}