import React, { Component } from 'react';

import logo from '../Market.jpg';


class ModalPorfolio extends React.Component  {
  render(){
    let data1 = this.props.value;
    let portfolioId = '/portfolio/:'+ data1.id;
    return (
        <div className="card">
          <div className="borderbtm"><img className="portfoliImga" src={logo} alt="" /></div>
          <div className="borderbtsm" ><span>Volatility</span><span style={{ float: 'right' }}>{data1.volatility}</span></div>
          <div className="borderbtm" ><span>1 Month Return</span><span style={{ float: 'right' }}>{data1.month_return}</span></div>
          <div className="borderbtm" ><span>Mean Return</span><span style={{ float: 'right' }}>{data1.mean_return}</span></div>
          <div className="borderbtm" ><span>Minimum Investment</span><span style={{ float: 'right' }}><span className="xxsmall">{data1.currency}</span>{data1.investment}</span></div>
          <div className="borderbtm"><span>Eligibility</span><span style={{ float: 'right' }}>{data1.eligibility}</span></div>
          <div className="divlink"><a href={portfolioId} title="Explore Investment Idea" >Explore Investment Idea</a></div>
        </div>
   );
  }
}

export default ModalPorfolio;

