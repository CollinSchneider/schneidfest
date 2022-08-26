import React from 'react';
import Finger from './Finger'
import Draggable from 'react-draggable';
import LeftSideOfRing from './LeftSideOfRing'
import RightSideOfRing from './RightSideOfRing'
import Us from '../cartoons/Us';
// import Diamond from './Diamond';

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      startingLeftPositionInPixels: 0,
      leftTransformTranslationInPixels: 0,
      ringContainerWidthInPixels: 0,
      xCoordinateToConsiderDestination: 0,
      userPlacedRingOnFinger: false,
      userDeclinedInvite: false
    }
  }
  // onDragStart = () => {}
  onDrag = (_e, dragData) => this.setState({ leftTransformTranslationInPixels: dragData.x });

  onDragStop = (e, dragData) => {
    const bufferPx = 50;
    const currentXCoord = this.state.startingLeftPositionInPixels + dragData.x;
    const baseOfFingerWidth = window.innerWidth / 16;
    const cantComeXCoord = window.innerWidth - (window.innerWidth / 5);
    if(currentXCoord <= baseOfFingerWidth + bufferPx) {
      this.setState({ userPlacedRingOnFinger: true, userDeclinedInvite: false });
    } else if(currentXCoord + bufferPx >= cantComeXCoord) {
      this.setState({ userDeclinedInvite: true, userPlacedRingOnFinger: false })
    } else {
      this.setState({ userDeclinedInvite: false, userPlacedRingOnFinger: false })
    }
  }

  componentDidMount = () => {
    this.setDimensions();
    window.addEventListener('resize', this.setDimensions);
  }

  setDimensions = () => {
    const isMobile = window.innerWidth < 744;
    document.body.classList.add(isMobile ? 'mobile' : 'desktop')
    const calcedRingContainerWidth = (
      window.innerWidth * 0.1 < 40 ? 40 :
        window.innerWidth * 0.1 > 100 ? 100 : 
        window.innerWidth * 0.1
    ) + 20;
    this.setState({ 
      startingLeftPositionInPixels: window.innerWidth * 0.5,
      ringContainerWidthInPixels: calcedRingContainerWidth,
      xCoordinateToConsiderDestination: (window.innerWidth / 16) * -1
    })
  }

  render() {
    return(
      <>
        <div className='ring-game-container'>
          <Finger />
          <LeftSideOfRing startingLeftPositionInPixels={this.state.startingLeftPositionInPixels} 
                          leftTransformTranslationInPixels={this.state.leftTransformTranslationInPixels} 
                          widthInPixels={(this.state.ringContainerWidthInPixels / 2) - 10}/>
          <Draggable bounds='parent' axis='x' onDrag={this.onDrag} onStop={this.onDragStop}>
            <div className='ring-container'>
              {/* <Diamond shimmer={true} /> */}
              <RightSideOfRing />
            </div>
          </Draggable>
          <div className='decline'>
            <h1>Can't come :(</h1>
          </div>
        </div>
        <Us bounce={this.state.userPlacedRingOnFinger}
            collinSpeachBubble={this.state.userPlacedRingOnFinger ? 'We can\'t wait to celebrate with you!' : 
                                  this.state.userDeclinedInvite ? 'That\'s ok, we understand!' : null} />
        <style jsx>{`
          .ring-container {
            position: absolute;
            z-index: 2;
            left: ${this.state.startingLeftPositionInPixels}px;
            top: 0;
            width: ${this.state.ringContainerWidthInPixels}px;
            height: ${this.state.ringContainerWidthInPixels}px;
            cursor: grab;
          }
          .ring-game-container {
            position: relative;
            width: 100%;
            margin: 0 auto;
            max-height: 120px;
            min-height: 60px;
            height: calc(10vw + 20px);
            display: flex;
            align-items: center;
          }
          .decline {
            width: 20%;
            border: 1px solid black;
            height: 50px;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            right: 0;
          }
        `}</style>
      </>
    )
  }
}