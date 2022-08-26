export default function Finger(props) {
  return(
    <>
      <div className='finger'>
        <div className='bottom-of-finger'></div>
        <div className='finger-knuckle'></div>
        <div className='top-of-finger'>
          <div className='fingernail'></div>
        </div>
      </div>
      <style jsx>{`
        .finger {
          width: 40%;
          max-height: 100px;
          min-height: 40px;
          height: 10vw;
          left: 0;
          z-index: 1;
          position: absolute;
          display: flex;
          align-items: center;
        }
        .bottom-of-finger, .finger-knuckle, .top-of-finger {
          background: #ffddb0;
        }
        .bottom-of-finger {
          display: inline-block;
          height: 100%;
          width: 40%;
        }
        .finger-knuckle {
          display: inline-block;
          // position: absolute;
          margin-left: -10%;
          margin-right: -10%;
          height: 110%;
          width: 20%;
          border-radius: 50%;
        }
        .top-of-finger {
          display: inline-block;
          height: 100%;
          width: 38%;
          border-top-right-radius: 999px;
          border-bottom-right-radius: 999px;
        }
        .fingernail {
          background-color: rgb(255 255 255 / 96%);
          position: absolute;
          width: 30%;
          min-width: 90px;
          left: 60%;

          top: 0;
          bottom: 0;
          margin-top: auto;
          margin-bottom: auto;

          max-height: 90px;
          min-height: 30px;
          height: calc(10vw - 10px);
          border: 1px solid #b0b0b0;
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
          border-top-left-radius: 20%;
          border-bottom-left-radius: 20%
        }
      `}</style>
    </>
  )
}