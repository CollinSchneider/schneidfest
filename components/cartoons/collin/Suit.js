export default function Suit() {
  return(
    <>
      <div className='suit-jacket left-side'>
        <div className='chest-pocket'></div>
      </div>
      <div className='button-up'>
        <div className='tie-knot'></div>
        <div className='tie'></div>
      </div>
      <div className='suit-jacket right-side'>
      </div>
      <style jsx>{`
        .suit-jacket {
          background-color: navy;
          height: 100%;
          width: 30%;
          margin-top: 5px;
          display: inline-block;
        }
        .suit-jacket:after {
          content: "";
          width: 0;
          position: absolute;
          top: 115px;
          border-top: 20px solid navy;
          border-left: 120px solid transparent;
          border-right: 120px solid transparent;
        }
        .suit-jacket.left-side:after {
          left: -80px;
          transform: rotate(270deg);
        }
        .suit-jacket.right-side:after {
          right: -80px;
          transform: rotate(-270deg);
        }
        .button-up {
          width: 40%;
          height: 100%;
          background-color: white;
          display: inline-block;
        }
        .tie-knot {
          width: 10px;
          margin: 0 auto;
        }
        .tie-knot:after {
          content: "";
          width: 0;
          position: absolute;
          border-top: 10px solid black;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
        }
        .tie {
          width: 10px;
          margin: 0 auto;
          height: 87%;
          margin-top: 10px;
          background-color: black;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
        }
        tie:before {
          content: "";
          width: 0;
          position: absolute;
          border-bottom: 5px solid black;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          top: 10px;
        }
        .tie:after {
          content: "";
          width: 0;
          position: absolute;
          border-top: 10px solid black;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          top: calc(87% + 15px);
        }
      `}</style>
    </>
  )
}