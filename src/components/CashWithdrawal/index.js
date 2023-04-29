// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-con">
        <div className="cash-withdrawal-con">
          <div className="user-details-con">
            <div className="initial-con">
              <p className="initial"> {initial}</p>
            </div>
            <p className="name"> {name}</p>
          </div>
          <div className="balance-con">
            <p className="your-bal">Your Balance</p>
            <p className="balance">
              {' '}
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum"> CHOOSE SUM (IN RUPEES) </p>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
