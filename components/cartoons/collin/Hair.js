export default function Hair() {
  return(
    <>
      <div className='hair'></div>
      <style jsx>{`
        .hair {
          background-color: brown;
          height: 20%;
          width: 100%;
          border-bottom-left-radius: 50px;
          border-bottom-right-radius: 50px;
        }
      `}</style>
    </>
  )
}