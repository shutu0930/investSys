import React, { Component } from 'react';
import purchases from './purchases.json'

const plist = purchases;
class Purchases extends Component {
  constructor () {
    super()
    this.state = {
      balance: localStorage.balance
      
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
      if(bal+(buyNum*plist[key].price)<=99999999){
        localStorage.balance+=(buyNum*plist[key].price);
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
              <div className="card-header">
                Sales stock list
              </div>
              <div className="card-block">
                <table className="table table-bordered table-hover table-outline mb-0">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Timestamp</th>
                      <th>Price</th>
                      <th>Volume</th>
                      <th>Selling</th>
                    </tr>
                  </thead>
                  <tbody>
                
                   
                    
                      {
                         Object.keys(plist).map((key) => {
                          return (
                            <tr onClick={this.handleClickRow.bind(this, key)} style={{ cursor: 'pointer' }}>
                              <td>{plist[key].symbol}</td>
                              <td>{plist[key].timestamp}</td>
                              {
                               this.getColumnValue(plist[key].price)
                              }
                              <td>{plist[key].volume}</td>
                              <td><button type="button" className="btn btn-outline-warning"><i className="fa fa-cart-arrow-down"></i>&nbsp;Sell Now</button></td>
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

export default Purchases;
