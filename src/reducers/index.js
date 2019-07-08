const initialState = {
    model_portfolios :[
        {
            id: 1,
            name: 'HONGKONG TECHNOLOGY',
            volatility: '26.8%',
            month_return: '2.34%',
            mean_return: '2.96%',
            currency: 'SGD',
            investment: '6000',
            eligibility: "Available for all investors",
            constituents: [
                {
                  weight: '3%',
                  instrument: {
                    id: 1,
                    name: 'CSX corp',
                    type: 'Equity'
                  }
                },
                {
                  weight: '10%',
                  instrument: {
                    id: 6,
                    name: 'Norfolk Southern Corp',
                    type: 'Bond'
                  }
                },
                {
                  weight: '20%',
                  instrument: {
                    id: 10,
                    name: 'USD CASH',
                    type: 'CASH'
                  }
                }
              ]
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MODAL_PORTFOLIO':
            return Object.assign({}, state);
        case 'FETCH_PORTFOLIO_CONSTITUENTS':
            let result = state.model_portfolios.filter(x=>x.id == action.value);
            if(result && result.length>0){
                return Object.assign({},result[0].constituents)
            }
            else{
                return Object.assign({}, state.model_portfolios[0].constituents);
            }
           
          case 'UPDATE_PROFOLIO_CONSTITUENTS':
            break;
        default:
            return state;

    }
}