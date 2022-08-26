export default function Dress() {
  return(
    <>
      <div className='dress'></div>
      <style jsx>{`
        .dress {
          // background-color: white;
          position: absolute;
          bottom: 0;
          height: 90%;
          width: 100%;
        }
        .dress:after {
          content: "";
          width: 0;
          position: absolute;
          border-top: 525px solid white;
          border-left: 75px solid transparent;
          border-right: 75px solid transparent;
          margin-left: -21px;
        }
      `}</style>
    </>
  )
}