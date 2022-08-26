export default function RightSideOfRing(props) {
  return(
    <>
      <div className='right-side-of-ring'></div>
      <style jsx>{`
        .right-side-of-ring {
          position: relative;
          margin-left: 49.5%;
          display: inline-block;
          width: calc((100% - 20px) / 2);
          height: calc(100% - 20px);
          border: 10px solid gold;
          border-left: 0;
          border-top-right-radius: 110px;  /* 100px of height + 10px of border */
          border-bottom-right-radius: 110px; /* 100px of height + 10px of border */
        }
      `}</style>
    </>
  )
}