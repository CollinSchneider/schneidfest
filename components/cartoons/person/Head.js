export default function Head(props) {
  return(
    <>
      {!props.speak ? null : <div className='speach-bubble'>{props.speak}</div>}
      <div className='person-head skin-color'>
        {props.hairComponent}
        <div className='person-eyes'>
          <div className='person-eye'>
            <div className='pupil'></div>
          </div>
          <div className='person-eye'>
            <div className='pupil'></div>
          </div>
        </div>
        {props.smile ? <div className='smile'></div> : null}
      </div>
      {props.longHairComponent}
      <style jsx>{`
        .speach-bubble {
          background-color: white;
          padding: 50px;
          border-radius: 999px;
          font-size: 18px;
          border: 3px solid black;
          text-overflow: wrap;
          max-width: 350px;
          position: absolute;
          margin-left: 320px;
          margin-top: 25px;
        }

        .person-head {
          margin: 0 auto;
          border-radius: 999px;
          // height: 100px;
          height: 15%;
          width: 80px;
          position: relative;
          overflow: hidden;
          z-index: 5;
          background-color: #ffd9a2;
        }
        .skin-color {
          background-color: ${props.skinColor};
        }

        .person-eyes {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          margin: 15px 0px 10px 0px;
        }
        .person-eyes .person-eye {
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          background: white;
          height: 20px;
          width: 16px;
          display: flex;
          align-items: end;
          justify-content: center;
          overflow: hidden;
        }
        .person-eyes .person-eye .pupil {
          border-radius: 50%;
          background: ${props.eyeColor || 'brown'};
          height: 15px;
          width: 7px;
          transform: translate(${props.pupilTranslateX}%, ${props.pupilTranslateY}%);
        }

        .smile {
          width: 10px;
          margin: 0 auto;
          margin-top: 20%;
          background: white;
          height: 20px;
        }
        .smile:before {
          content: "";
          width: 0;
          position: absolute;
          border-top: 10px solid white;
          border-left: 20px solid transparent;
          margin-left: -10px;
        }
        .smile:after {
          content: "";
          width: 0;
          position: absolute;
          border-top: 10px solid white;
          border-right: 20px solid transparent;
          margin-left: 10px;
        }
      `}</style>
    </>
  )
}