export default function LongHair(props) {
  return(
    <>
      <div className='long-hair'></div>
      <style jsx>{`
        .long-hair {
          position: absolute;
          margin-top: -30px;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          margin-left: 40px;
        }
        .long-hair:before {
          content: "";
          width: 0;
          position: absolute;
          top: -30px;
          border-bottom: 80px solid #eaea42;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
        }
      `}</style>
    </>
  )
}