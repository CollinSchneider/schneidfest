export default function Legs(props) {
  return(
    <>
      <div className='legs-container'>
        <div className='belt'>
          <div className='belt-buckle'></div>
        </div>
        <div className='suit-pants'>
          <div className='pants-base'></div>
          <div className='pant-legs'>
            <div className='pant-leg left'>
              <div className='shoe left'></div>
            </div>
            <div className='pant-leg right'>
              <div className='shoe right'></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .legs-container {
          width: 110px;
          height: 90%;
          margin: 0 auto;
        }
        .belt {
          height: 15px;
          background-color: #700000;
          width: 100%;
        }
        .belt-buckle {
          width: 15%;
          border: 3px solid gold;
          margin: 0 auto;
          height: calc(100% - 6px)
        }
        .suit-pants {
          height: 100%;
          width: 100%;
        }
        .pants-base {
          background-color: navy;
          width: 100%;
          height: 22%;
        }
        .pant-legs {
          display: flex;
          height: 70%;
          justify-content: space-between;
        }
        .pant-leg {
          background-color: navy;
          display: inline-block;
          width: calc(50% - 2px);
          height: 100%;
        }
        .pant-leg.left {
          margin-right: 2px;
        }
        .shoe {
          color: #700000;
          height: 20%;
          width: 40%;
        }
      `}</style>
    </>
  )
}