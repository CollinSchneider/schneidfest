export default function Footer() {
  return (
    <>
      <div className='footer cursive'>
        Made with ❤️ by the groom.
      </div>
      <style jsx>{`
        .footer {
          padding: 50px;
          text-align: center;
        }
        .cursive {
          font-family: 'Rubik', sans-serif;
          font-family: 'Rubik Beastly', cursive;
          font-family: 'Sacramento', cursive;
          font-family: 'Satisfy', cursive;
        }
      `}</style>
    </>
  )
}