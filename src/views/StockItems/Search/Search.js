import React, { Component } from 'react';
// import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap'
import { Progress } from 'reactstrap';
const tags=[
  "Meta Data",
  "1. Information",
  "2. Symbol",
  "3. Last Refreshed", 
  "4. Interval",
  "Time Series (1min)",
  "1. open",
  "2. high",
  "3. low",
  "4. close",
  "5. volume",
  "2018-01-12 16:00:00"
];

// const api='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${query}&interval=1min&apikey=CN44QJ5JXJY6KEHX';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symboll: undefined,
      info: undefined,
      refreshTime: undefined,
      interval: undefined,
      priceSeries: undefined,
      keywords: ''
      // open: undefined,
      // high:undefined,
      // low: undefined,
      // close: undefined,
      // volume: undefined


    }
    this.showInfo = this.showInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  static defaultProps = {
    symboll: 'Msft',
    //  symboll: '',
  };
  _getInfo = (symboll) => {
    const main = this;
    let query = '';
    main.setState({
        infoStatus: 'loading'
    });
    if (!symboll || symboll == '') {
      query = this.props.symboll;
    } else {
      query = symboll;
    }
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${query}&interval=1min&apikey=CN44QJ5JXJY6KEHX`)
    .then( function(response) {
      return response;
    })
    .then( function(response) {
      setTimeout( function() {
        main.setState({
        infoStatus: 'loaded'
      });
      }, 300);
      return response.json();
    })
    .then( function(data) {

      // let intervalTime=data[tags[5]][tags[3]];
      // let refreshTime=data[tags[5]][tags[4]];
      main.setState({
        symboll: data[tags[0]][tags[2]],
        info: data[tags[0]][tags[1]],
        refreshTime: data[tags[0]][tags[3]],
        interval: data[tags[0]][tags[4]],
        priceSeries: data[tags[5]]
        // open: data[tags[5]][tags[11]][tags[6]],
        // high:data[tags[5]][tags[11]][tags[7]],
        // low: data[tags[5]][tags[11]][tags[8]],
        // close: data[tags[5]][tags[11]][tags[9]],
        // volume: data[tags[5]][tags[11]][tags[10]]

      });
    })
    .catch( function() {
      main.setState({
        infoStatus: 'error'
      });
    })
  };
  componentWillMount() {
    this._getInfo();
            
  };
  _handleSubmit = (event) => {
    
    event.preventDefault();
    this.setState({
    keywords: event.target.search.value
    });
    this._getInfo(event.target.search.value);
  };
  handleClick(){
    this._getInfo(this.state.keywords)

  }
  showInfo() {
    const {  
      symboll,
      info,
      refreshTime,
      interval,
      priceSeries,
      // open,
      // high,
      // low,
      // close,
      // volume,
      infoStatus } = this.state
  
    return (





    <div className='animated fadeIn mt-1'>
      <div className="row">
          <div className="col-md-12">
            <div className="card">

              <div>
                <table className="table table-bordered table-striped table-condensed">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Information</th>
                      <th>Last Refreshed</th>
                      <th>Interval</th>
                      <th>Open</th>
                      <th>High</th>
                      <th>Low</th>
                      <th>Close</th>
                      <th>volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{symboll}</td>
                      <td>{info}</td>
                      <td>{refreshTime}</td>
                      <td>{interval}</td>
                      <td>{priceSeries[tags[11]][tags[6]]}</td>
                      <td>{priceSeries[tags[11]][tags[7]]}</td>
                      <td>{priceSeries[tags[11]][tags[8]]}</td>
                      <td>{priceSeries[tags[11]][tags[9]]}</td>
                      <td>{priceSeries[tags[11]][tags[10]]}</td>
                      {/* <td>
                        <span className="badge badge-success">Active</span>
                      </td> */}
                    </tr>
                   
                  </tbody>
                </table>
                <nav>
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        </div>





    );
  }



  render() {
    const { 
      symboll,
      info,
      refreshTime,
      interval,
      priceSeries,
      // open,
      // high,
      // low,
      // close,
      // volume,
      infoStatus 
    } = this.state;
    let data = null;
    if (infoStatus == 'loaded') {
      data = <div className="weatherInfo">
          <div className="cityName">
            <div>{symboll} <span>({info})</span></div>
          </div>
          <div className="tempInfo">
            {/* <div>symbol: <span>{symboll}</span></div>
            <div>info: <span>{info}</span></div>
            <div>refreshTime: <span>{refreshTime}</span></div>
            <div>volume: <span> */}
              {this.showInfo()}

         
          </div>
        </div>
    } else if (infoStatus == 'loading') {
      data = <div className="info loading">Loading stock data...</div>
    } else if (infoStatus == 'error') {
      data = <div className="info error">Error while loading stock data. Try again later.</div>
    }
    return (
      <div className="animated fadeIn">
      <div className="row">
     

     
     

          




          <div className="col-12">
         
          <div clssName="card-header">
          <div className="col-12">
            <div className="card">
              <div className="card-block">
              <div className="h1 text-muted text-right mb-2">
                  <i className="icon-speedometer"></i>
                </div>
                <div className="h4 m-0">{this.state.symboll}</div>
                
                <div>{this.state.refreshTime}</div>
                
                <Progress className="progress-xs my-1" color="info" value="25" />
                <small className="text-muted">{this.state.info}</small>
              </div>
            </div>
            
           


            <div className="card-block">
                <form action="" method="post" className="form-horizontal " onSubmit={this._handleSubmit}>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-search"></i> Search</button>
                        </span>
                        <input type="text" id="input1-group2" name="search" className="form-control" placeholder="Search a stock by typing symbol, e.g., Goog..."/>
                      </div>
                    </div>
                  </div>
                 
                  
                </form>
            </div>



 

            </div>
            <div>
           
              
            </div>
           
          </div>
          {data}
          </div>
         
        

        


      </div>
      </div>


     
    )
  }
}




// class Search extends Component {
//   render() {
//     return (
//       <div className="animated fadeIn">
//         <div className="row">
         
//         </div>
//       </div>
//     )
//   }
// }

export default Search;
