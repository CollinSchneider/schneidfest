import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BogeyCursor from '../components/BogeyCursor';
import BogeyEffect from '../components/BogeyEffect';
// import DragRingGame from '../components/drag-ring-game/View'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bogeyClickCounter: 0,
      lastClickTs: null,
      bogeyIsCursor: false,
      displayBogeyEffect: false
    }
  }

  bogeyClickListener = () => {
    const NUM_CLICKS_FOR_BOGEY = 4;
    const MS_TO_CONSIDER_CLICKS = 750;
    this.setState(previousState => {
      if(this.state.lastClickTs = null || Date.now() - this.state.lastClickTs <= MS_TO_CONSIDER_CLICKS) {
        const currentNumClicks = previousState.bogeyClickCounter + 1;
        if(currentNumClicks === NUM_CLICKS_FOR_BOGEY) {
          return this._reachedBogeyCursorClickCount(previousState);
        } else {
          return this._incrementBogeyCursorClickCount(previousState);
        }
      } else {
        return { 
          bogeyClickCounter: 1,
          lastClickTs: Date.now()
        }
      }
    })
  }

  _reachedBogeyCursorClickCount = previousState => {
    const bogeyIsBecomingCursor = !previousState.bogeyIsCursor;
    return { 
      bogeyClickCounter: 0,
      lastClickTs: null,
      bogeyIsCursor: bogeyIsBecomingCursor,
      displayBogeyEffect: bogeyIsBecomingCursor
    }
  }

  _incrementBogeyCursorClickCount = previousState => {
    return {
      bogeyClickCounter: previousState.bogeyClickCounter + 1,
      lastClickTs: Date.now()
    }
  }

  render() {
    return (
      <>
        <Layout>
          <Head>
            <title>SchneidFest 2023</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Nav />
          <BogeyCursor isVisible={this.state.bogeyIsCursor} />
          <BogeyEffect isVisible={this.state.displayBogeyEffect} />
          <div className="full-height-container">
            <div className='block'>
              <h1 className="title cursive" onClick={this.bogeyClickListener}>SchneidFest 2023</h1>
              <h2 className="sub-title cursive">Details coming soon.</h2>
            </div>
          </div>
          <div className='img-container'>
            <Image src={'/collin-lexi.png'} height={765} width={1150} />
          </div>
          {/* <DragRingGame /> */}
          <Footer />
        </Layout>
        <style jsx>{`
          h1, h2, h3 {
            cursor: default;
          }
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
            text-align: center;
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
            -webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
          }
          .sub-title {
            font-size: 52px;
            margin: 0;
            -webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
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
}
