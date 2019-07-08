import React, { Component } from 'react';
import { connect } from 'react-redux';
class PortfolioConstituent extends React.Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PORTFOLIO_CONSTITUENTS', value: this.props.location.pathname.slice(-1) })
  }

  onCellChange(e) {
    console.log('dataupdated-1', e);
  }

  IncrementItem = (value) =>{
    return value += 1;

  }
  decrementItem = (value) =>{
    return value -=1;
  }

  renderTableData(tabledata) {
    if (!tabledata.model_portfolios) {
      return Object.keys(tabledata).map((data, index) => {
        const { weight, instrument } = tabledata[data] //destructuring
        let modelvalue = parseInt(weight);
        return (
          <tr key={index}>
            <td>{instrument.name}</td>
            <td>{weight}</td>
            <td><button onClick={()=>{this.IncrementItem(modelvalue)}}>+</button><input  step='1' min="1" value={modelvalue} onChange={() => this.onCellChange()}/>  <button onClick={this.decrementItem(modelvalue)}>-</button></td>
          </tr>
        )
      })
    }
  }
  renderTableHeader(tabledata) {
    if (!tabledata.model_portfolios) {
      let header = Object.keys(tabledata)
      return (
        <tr>
          <td>Category/Stock</td>
          <td>Model Weight(%)</td>
          <td>Weight(100%)</td>
        </tr>
      )

    }
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <h1 id='title'>Portfolio Constituents</h1>
        <table id='portfolioData'>
          <tbody>
            {this.renderTableHeader(items)}
            {this.renderTableData(items)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state
});

PortfolioConstituent = connect(mapStateToProps)(PortfolioConstituent)
export default PortfolioConstituent;