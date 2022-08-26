import React from "react"

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFixed: false }
  }

  componentDidMount() {
    this._listenToScroll();
  }
  
  scrollToTop = () => {

  }

  _listenToScroll = () => {
    window.addEventListener('scroll', _e => {
      console.log(window.scrollY)
      if(window.scrollY > 35 && !this.state.isFixed) {
        this.setState(() => { return { isFixed: true } });
      } else if(window.scrollY <= 35 && this.state.isFixed) {
        this.setState(() => { return { isFixed: false } });
      }
    })
  }

  render() {
    return (
      <>
        <nav className={`nav ${this.state.isFixed ? 'fixed' : ''}`}>
          <a href='#' onClick={this.scrollToTop}>
            <div className='logo cursive'>SchneidFest</div>
          </a>
        </nav>
        <style jsx>{`
          nav {
            padding: 10px;
            width: calc(100vw - 20px);
            background-color: rgba(255, 255, 255, 0.8);
            z-index: 2;
          }
          nav.fixed {
            position: fixed;
            box-shadow: 1px 0px 20px grey;
          }
          nav a {
            color: black;
            text-decoration: none;
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
}