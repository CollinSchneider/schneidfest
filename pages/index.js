import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import DragRingGame from '../components/drag-ring-game/View'

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>SchneidFest 2023</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <div className="full-height-container">
          <div className='block'>
            <h1 className="title cursive">SchneidFest 2023</h1>
            <h1 className="sub-title cursive">Details coming soon.</h1>
          </div>
        </div>
        <div className='img-container'>
          <Image src={'/collin-lexi.png'} height={765} width={1150} />
        </div>
        {/* <DragRingGame /> */}
        <Footer />
      </Layout>
      <style jsx>{`
        .full-height-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .img-container {
          max-height: 100vh;
          overflow: hidden;
        }
        .cursive {
          font-family: 'Rubik', sans-serif;
          font-family: 'Rubik Beastly', cursive;
          font-family: 'Sacramento', cursive;
          font-family: 'Satisfy', cursive;
        }
        .title {
          font-size: 120px;
          margin: 0;
        }
        .sub-title {
          font-size: 52px;
          margin: 0;
        }
        @media(max-width: 800px) {
          .title {
            font-size: 80px
          }
          .sub-title {
            font-size: 40px;
          }
        }
        @media(max-width: 550px) {
          .title {
            font-size: 60px
          }
          .sub-title {
            font-size: 32px;
          }
        }
        @media(max-width: 400px) {
          .title {
            font-size: 40px;
          }
          .sub-title {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  )
}
