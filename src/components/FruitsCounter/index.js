// Write your code here
import {component} from 'react'
import './index.css'

class FruitCounter extends component {
  state = {mango: 0, banana: 0}

  EatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  EatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button className="button" onClick={this.EatMango} type="button">
              Eat Mango
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button className="button" onClick={this.EatBanana} type="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
