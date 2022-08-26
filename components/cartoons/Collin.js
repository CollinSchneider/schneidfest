import Person from "./Person";
import Hair from './collin/Hair';
import Suit from './collin/Suit';
import Legs from "./collin/Legs";

export default function Collin(props) {
  return <Person pupilTranslateX={props.pupilTranslateX}
                  pupilTranslateY={props.pupilTranslateY}
                  speak={props.speak}
                  heightInPixels={750}
                  skinColor={'#ffd9a2'} 
                  sleeveColor={'navy'} 
                  eyeColor={'green'}
                  hairComponent={<Hair />} 
                  clothesComponent={<Suit />}
                  legsComponent={<Legs />} />
}