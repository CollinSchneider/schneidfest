import Person from "./Person";
import Hair from './lexi/Hair';
import Dress from './lexi/Dress';
import LongHair from "./lexi/LongHair";
import Legs from "./lexi/Legs";

export default function Lexi(props) {
  return <Person pupilTranslateX={props.pupilTranslateX} 
                  pupilTranslateY={props.pupilTranslateY}
                  speak={props.speak}
                  heightInPixels={700}
                  skinColor={'#ffd9a2'} 
                  hairComponent={<Hair />} 
                  longHairComponent={<LongHair />}
                  clothesComponent={<Dress />}
                  legsComponent={<Legs />} />
}