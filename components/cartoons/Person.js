import React from 'react';
import Head from './person/Head';
import Torso from './person/Torso';
import Legs from './person/Legs';

export default class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <div className={`person-cartoon-container ${this.props.bounce ? 'bounce' : null}`}>
          <Head pupilTranslateX={this.props.pupilTranslateX}
                pupilTranslateY={this.props.pupilTranslateY}
                eyeColor={this.props.eyeColor}
                hairComponent={this.props.hairComponent} 
                longHairComponent={this.props.longHairComponent} 
                speak={this.props.speak}
                smile={true} />
          <Torso clothesComponent={this.props.clothesComponent} sleeveColor={this.props.sleeveColor} />
          <Legs legsComponent={this.props.legsComponent} />
        </div>
        <style jsx>{`
          .person-cartoon-container {
            display: inline-block;
            position: relative;
            height: ${this.props.heightInPixels}px;
            transition: top 200ms ease;
            top: ${this.props.bounce ? '-35px' : 0};
          }
        `}</style>
      </>
    )
  }
}