import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import sales from './sales.json'


const slist = sales;
class Sales extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    };
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


  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
        <div className="col-12">
            <div className="card">
              <div className="card-header">
                Purchases stock list
              </div>
              <div className="card-block">
                <table className="table table-bordered table-hover table-outline mb-0">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Timestamp</th>
                      <th>Price</th>
                      <th>Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                
                   
                    
                      {
                         Object.keys(slist).map((key) => {
                          return (
                            <tr>
                              <td>{slist[key].symbol}</td>
                              <td>{slist[key].timestamp}</td>
                              {
                               this.getColumnValue(slist[key].price)
                              }
                              <td>{slist[key].volume}</td>
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

export default Sales;
