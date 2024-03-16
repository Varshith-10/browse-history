import {Component} from 'react'
import './index.css'
import Body from '../Body'

class Navbar extends Component {
  state = {search: ''}
  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }
  render() {
    const {initialHistoryList} = this.props
    const {search} = this.state
    return (
      <div className="container">
        <navbar className="navbar">
          <h1> History </h1>
          <div className="imgCont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="seacrh"
            />
            <input
              type="Search"
              placeholder="seacrh History"
              className="inpt"
              onChange={this.onChangeSearch}
              value={search}
            />
          </div>
        </navbar>
        <div className="itemsCont">
          {initialHistoryList.map(each => (
            <Body eachItem={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Navbar
