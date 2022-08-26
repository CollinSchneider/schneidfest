export default function Legs(props) {
  return(
    <>
      <div className='person-legs-container'>
        {props.legsComponent}
      </div>
      <style jsx>{`
        .person-legs-container { height: 52%; }
      `}</style>
    </>
  )
}