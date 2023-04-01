// Write your code here
import {Component} from 'react'
import './index.css'

/* const coinUrl = [
  {
    coinId: 1,
    headUlr: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    displayText: 'HEADS',
  },
  {
    coinId: 2,
    headUlr: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    displayText: 'TAILS',
  },
] */

const coinStatus = ['Heads', 'Tails']

class CoinToss extends Component {
  state = {total: 0, head: 0, tail: 0, coinStatusValue: coinStatus[0]}

  changeCoinStatusAndRender = () => {
    const {coinStatusValue} = this.state
    let imgUrl
    if (coinStatusValue === 'Heads') {
      imgUrl = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="img"
        />
      )
    } else {
      imgUrl = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="img"
        />
      )
    }
    return imgUrl
  }

  changeCoinStatus = () => {
    const randomPickUp =
      coinStatus[Math.floor(Math.random() * coinStatus.length)]
    if (randomPickUp === 'Heads') {
      this.setState(prevState => ({
        total: prevState.total + 1,
        head: prevState.head + 1,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tail: prevState.tail + 1,
      }))
    }
    this.setState({coinStatusValue: randomPickUp})
  }

  render() {
    const {total, head, tail} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="toss">Heads (or) Tails</p>
          {this.changeCoinStatusAndRender()}
          <button
            type="button"
            className="coin-click"
            onClick={this.changeCoinStatus}
          >
            Toss Coin
          </button>
          <div className="values">
            <p>Total: {total}</p>
            <p>Heads: {head}</p>
            <p>Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
