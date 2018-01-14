import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import {stocksitem} from './stocksitem';
const API = 'http://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page=1&num=100&sort=symbol&asc=1&node=hs_a&symbol=&_s_r_a=init';

class Stocks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // items: stocksitem,
      // selectedUserId: 0,
      // selectedUsers: [],
      // selectedDashTypeId: ''
    }
  }

  componentDidMount() {    


  //   let myHeaders = new Headers({
      
  //     'Content-Type': 'text/plain; charset=gb2312'
  // });

    

  //   fetch(API,{
  //     method: 'GET',
  //     headers: myHeaders,
  //     mode: 'cors'
  // })
  //     .then(response => response.text())
  //     .then(data => this.setState({ compName:data }));
  }



  render() {

    // const personLoc = Object.keys(this.state.compName).map((content, idx) => {
    //   const items = this.state.compName[content].map((item, i) => (
    //       <p key={i}>{item.text}</p>
    //   ))
    //  const items = stocksitem;
    //  console.log(items);
     
    //   return (<div>{stocksitem.map(i => stocksitem[i].name)}</div>)
  // })


    return (
      <div className="animated fadeIn">
        <div className="row">

        
         
        </div>
      </div>
    )
  }
}

export default Stocks;
