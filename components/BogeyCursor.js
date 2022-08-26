import React from "react";
import Image from 'next/image';

export default class BogeyCursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      isMobile: null
    }
  }

  componentDidMount = () => {
    this.mouseListener = window.addEventListener('mousemove', e => {
      this.setState(() => { 
        return { x: e.pageX + 10, y: e.pageY + 10 } 
      })
    });
    // window.addEventListener('scroll', () => this.forceUpdate())
    this.setState({ isMobile: window.innerWidth < 500 });
  }
  
  render() {
    return (
      <>
        <div className={`bogey-cursor-container ${this.state.isMobile ? 'mobile' : ''} ${this.props.isVisible ? null : 'hidden'}`} 
              style={{ left: this.state.x, top: this.state.y }}>
          <Image src={'/bogey.png'} height={100} width={100} />
        </div>
        <style jsx>{`
          .bogey-cursor-container {
            position: absolute;
            z-index: 5;
          }
          .bogey-cursor-container.mobile {
            display: none !important;
          }
          .hidden {
            display: none;
          }
        `}</style>
      </>
    )
  }
}