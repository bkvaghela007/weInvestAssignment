import React, { Component } from 'react'
import store from '../store'
import ModelPortfolio from './ModelPortfolio'

function ModelPortfolioContainer(){
  const state = store.getState();
 
  return(
    Object.keys(state.model_portfolios).map((modelkey) => {
        const model = state.model_portfolios[modelkey];
        return (
            <ModelPortfolio  key={modelkey}  value={model}
            />
        );
    })
  )
}

export default ModelPortfolioContainer;