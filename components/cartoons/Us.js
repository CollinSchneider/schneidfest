import React from 'react';
import Lexi from './Lexi';
import Collin from './Collin';

export default class Us extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      pupilTranslateX: 0,
      pupilTranslateY: 0,
    }
  }

  componentDidMount() {
    const midYCoordinate = window.innerHeight / 2;
    const midXCoordinate = window.innerWidth / 2;
    window.addEventListener('mousemove', mouseCoordinates => {
      this.setState({
        pupilTranslateX: ((midXCoordinate - mouseCoordinates.x) / midXCoordinate) * -100,
        pupilTranslateY: ((midYCoordinate - mouseCoordinates.y) / midYCoordinate) * -100
      })
    })
  }

  render() {
    return(
      <>
        <div className='people-container'>
          <Lexi pupilTranslateX={this.state.pupilTranslateX} 
                pupilTranslateY={this.state.pupilTranslateY} 
                bounce={this.props.bounce} />
          <Collin pupilTranslateX={this.state.pupilTranslateX} 
                  pupilTranslateY={this.state.pupilTranslateY} 
                  bounce={this.props.bounce}
                  speak={this.props.collinSpeachBubble}/>
        </div>
        <style jsx>{`
          .people-container { 
            display: flex; 
            align-items: end;
          }
        `}</style>
      </>
    )
  }
}