export default function Legs(props) {
  return(
    <>
      <div className='dress-bottom'>

      </div>
      <style jsx>{`
        .dress-bottom { 
          width: 100%;
          // background: white;
          height: 85%;
        }
        .dress-bottom:after {
          content: "";
          width: 0;
          position: absolute;
          border-bottom: 646px solid white;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          margin-top: -300px;
          margin: 0 auto;
          margin-top: -300px;
          margin-left: -22px;
        }
      `}</style>
    </>
  )
}