import React from "react";
import Image from 'next/image'

export default function BogeyEffectItem({ height, width, left, startAnimationSeconds }) {
  return(
    <>
      <div className={`bogey-effect-item`}>
        <Image src={'/bogey.png'} height={height} width={width} />
      </div>
      <style jsx>{`
        .bogey-effect-item {
          position: fixed;
          left: ${left}vw;
          bottom: -50vh;
          animation: animate ${startAnimationSeconds}s;
        }
        @keyframes animate {
          from {
            bottom: -50vh;
          }
          to {
            bottom: 150vh;
          }
        }
      `}</style>
    </>
  )
}