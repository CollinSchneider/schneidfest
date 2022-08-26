export default function LeftSideOfRing(props) {
  // console.log(`LEFT: ${props.left}`)
  return(
    <>
      <div className='left-side-of-ring'></div>
      <style jsx>{`
        .left-side-of-ring {
          z-index: 0;
          position: absolute;
          left: ${props.startingLeftPositionInPixels}px;
          transform: translate(${props.leftTransformTranslationInPixels}px, 0px);
          width: ${props.widthInPixels}px;
          height: ${props.widthInPixels * 2}px;
          border: 10px solid gold;
          border-right: 0;
          border-top-left-radius: 110px;  /* 100px of height + 10px of border */
          border-bottom-left-radius: 110px; /* 100px of height + 10px of border */
        }
      `}</style>
    </>
  )
}