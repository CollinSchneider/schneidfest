export default function Torso(props) {
  return(
    <>
      <div className='person-torso-container'>
        <div className='person-arm-container left'>
          <div className='person-arm left' style={{ backgroundColor: props.sleeveColor || '#ffd9a2' }}></div>
          <div className='person-hand skin-color'></div>
        </div>
        <div className='person-torso skin-color'>
          {props.clothesComponent}
        </div>
        <div className='person-arm-container right'>
          <div className='person-arm right' style={{ backgroundColor: props.sleeveColor || '#ffd9a2' }}></div>
          <div className='person-hand skin-color'></div>
        </div>
      </div>
      <style jsx>{`
        .person-torso-container {
          position: relative;
          height: 33%;
          display: flex;
          align-items: start;
        }
        .person-torso {
          display: inline-block;
          position: relative;
          height: 100%;
          width: 105px;
          border-top-right-radius: 50px;
          border-top-left-radius: 50px;
          overflow: hidden;
          z-index: 1;
          background-color: #ffd9a2;
        }
        .person-arm {
          display: inline-block;
          height: 100%;          
          width: 35px;
          border-radius: 999px;
          margin-top: 15px;
        }
        .person-arm-container {
          height: 100%;
        }
        .person-arm-container.left {
          transform: skew(-3deg);
          margin-right: -10px;
        }
        .person-arm-container.right {
          transform: skew(3deg);
          margin-left: -10px;
        }
        .person-hand {
          background-color: #ffd9a2;
          height: 35px;
          width: 35px;
          border-radius: 50%;
          background-color: ${props.skinColor};
          margin: 0 auto;
          margin-top: -15px;
        }
      `}</style>
    </>
  )
}