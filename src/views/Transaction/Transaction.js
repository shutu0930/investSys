import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import stocksall from '../stocksall.json';



const stocksitem = stocksall;
const API = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&apikey=CN44QJ5JXJY6KEHX&datatype=json';



class Transaction extends Component {
  constructor (props) {
    super(props)
    this.state = {
      balance: localStorage.balance
      // Interval: ''
    }

    this.getColumnValue = this.getColumnValue.bind(this);
    
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

  handleClickRow(key){
    // var r = confirm("Are you sure to buy this stock?");
    // if (r==true){
    //   alert("Purchase confirmed!");
    // }
    // else{
    //   // alert("Purchase canceled!");
    // }
    var buyNum=prompt("Please input the volume you want to buy","5")
    var re= /\D/g;
    if(buyNum.match(re)==null && buyNum!=null && buyNum!=""){
      alert("buy "+buyNum+ " volume");
      var bal=localStorage.balance;
      if(bal-(buyNum*stocksitem[key].price)>=0){
        localStorage.balance-=(buyNum*stocksitem[key].price);
      }
      this.setState({
        balance: localStorage.balance
      })
   
    }else{
      alert("please write a valid number !")
    }
    // if (buyNum!=null && buyNum!=""){
    //   document.write("你好！" + name + " 今天过得怎么样？")
    // }

  }
  componentWillMount() {    


    // let query = 'msft';

    

    // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&apikey=CN44QJ5JXJY6KEHX&datatype=json`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ symboll:data }));
  }



  render() {
      return (

        <div className="animated fadeIn">
        <div className="row">

        <div className="card-block">
                <form action="" method="post" className="form-horizontal ">
                  <div className="form-group row">
                    <div className="col-md-8">
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-search"></i> Search</button>
                        </span>
                        <input type="text" id="input1-group2" name="input1-group2" className="form-control" placeholder="Username"/>
                      </div>
                    </div>

                    <div className="col-6 col-lg-4">
                    <div className="card">
                      <div className="card-block p-0 clearfix">
                        <i className="fa fa-credit-card-alt bg-primary p-2 font-2xl mr-1 float-left"></i>
                        <div className="h5 text-primary mb-0 pt-1">{'$ '+this.state.balance}</div>
                        <div className="text-muted text-uppercase font-weight-bold font-xs">Balance</div>
                      </div>
                    </div>
                  </div>


                  </div>
                 
                  
                </form>



                
        </div>


        <div className="col-12">
            <div className="card">
              
              <div className="card-block">
                <table className="table table-bordered table-hover table-outline mb-0">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Timestamp</th>
                      <th>Volume</th>
                      <th>Price</th>
                      <th>Buy</th>
                    </tr>
                  </thead>
                  <tbody>
                
                   
                    
                      {
                         Object.keys(stocksitem).map((key) => {
                          return (
                            <tr onClick={this.handleClickRow.bind(this, key)} style={{ cursor: 'pointer' }}>
                              <td>{stocksitem[key].symbol}</td>
                              <td>{stocksitem[key].timestamp}</td>
                              <td>{stocksitem[key].volume}</td>
                              {
                               this.getColumnValue(stocksitem[key].price)
                              }
                              <td><button type="button" className="btn btn-outline-success"><i className="fa fa-cart-plus"></i>&nbsp;Buy Now</button></td>
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
    
    
  }
}

export default Transaction;
