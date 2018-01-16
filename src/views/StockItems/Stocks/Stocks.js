import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import stocksall from '../../stocksall.json';



const stocksitem = stocksall;
const API = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&apikey=CN44QJ5JXJY6KEHX&datatype=json';



class Stocks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      symboll: [],
      // Interval: ''
    }

    this.getColumnValue = this.getColumnValue.bind(this)
  }

  getColumnValue(price){
    if(price >= 100 && price <= 1000){
      return (
      <td>
        <span className="badge badge-success">{price}</span>
      </td>)
    }else if(price > 1000){
      return (
      <td>
        <span className="badge badge-danger">{price}</span>
      </td>)
    }else {
      return (
      <td>
        <span className="badge badge-default">{price}</span>
      </td>)
    }
    

  }
  componentWillMount() {    


    let query = 'msft';

    

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&apikey=CN44QJ5JXJY6KEHX&datatype=json`)
      .then(response => response.json())
      .then(data => this.setState({ symboll:data }));
  }



  render() {
      return (

        <div className="animated fadeIn">
        <div className="row">
        <div className="col-12">
            <div className="card">
              <div className="card-header">
                Outstanding stock list
              </div>
              <div className="card-block">
                <table className="table table-bordered table-hover table-outline mb-0">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Timestamp</th>
                      <th>Volume</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                
                   
                    
                      {
                         Object.keys(stocksitem).map((key) => {
                          return (
                            <tr>
                              <td>{stocksitem[key].symbol}</td>
                              <td>{stocksitem[key].timestamp}</td>
                              <td>{stocksitem[key].volume}</td>
                              {
                               this.getColumnValue(stocksitem[key].price)
                              }
                            </tr>
                          )
                        })

                        
                      }
                    

                  </tbody>
                </table>
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
              </div>
            </div>
          </div>





        </div>
      </div>



      )
    // const personLoc = Object.keys(this.state.compName).map((content, idx) => {
    //   const items = this.state.compName[content].map((item, i) => (
    //       <p key={i}>{item.text}</p>
    //   ))
    //  const items = stocksitem;
    //  console.log(items);
     
    //   return (<div>{stocksitem.map(i => stocksitem[i].name)}</div>)
  // })

    // var temp=this.state.symboll;
    // return (
    //   <div className="animated fadeIn">
    //     <div className="row">
    //       <div className="card">
    //           <div className="card-block">
    //             <div className="h1 text-muted text-right mb-2">
    //               <i className="icon-pie-chart"></i>
    //             </div>
    //             <div className="h4 mb-0">28%</div>
    //             <small className="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
    //             <Progress className="progress progress-xs mt-1 mb-0" color="primary" value="25" />
    //           </div>
    //         </div>
    //     </div>
    //   </div>
    
  }
}

export default Stocks;
