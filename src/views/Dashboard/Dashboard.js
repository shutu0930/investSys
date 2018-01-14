import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';

const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';

// // Card Chart 1
// const cardChartData1 = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: brandPrimary,
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [65, 59, 84, 84, 51, 55, 40]
//     }
//   ],
// };

// const cardChartOpts1 = {
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [{
//       gridLines: {
//         color: 'transparent',
//         zeroLineColor: 'transparent'
//       },
//       ticks: {
//         fontSize: 2,
//         fontColor: 'transparent',
//       }

//     }],
//     yAxes: [{
//       display: false,
//       ticks: {
//         display: false,
//         min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
//         max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
//       }
//     }],
//   },
//   elements: {
//     line: {
//       borderWidth: 1
//     },
//     point: {
//       radius: 4,
//       hitRadius: 10,
//       hoverRadius: 4,
//     },
//   }
// }

// Card Chart 2
// const cardChartData2 = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: brandInfo,
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [1, 18, 9, 17, 34, 22, 11]
//     }
//   ],
// };

// const cardChartOpts2 = {
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [{
//       gridLines: {
//         color: 'transparent',
//         zeroLineColor: 'transparent'
//       },
//       ticks: {
//         fontSize: 2,
//         fontColor: 'transparent',
//       }

//     }],
//     yAxes: [{
//       display: false,
//       ticks: {
//         display: false,
//         min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
//         max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
//       }
//     }],
//   },
//   elements: {
//     line: {
//       tension: 0.00001,
//       borderWidth: 1
//     },
//     point: {
//       radius: 4,
//       hitRadius: 10,
//       hoverRadius: 4,
//     },
//   }
// }

// // Card Chart 3
// const cardChartData3 = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,255,255,.2)',
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [78, 81, 80, 45, 34, 12, 40]
//     }
//   ],
// };

// const cardChartOpts3 = {
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [{
//       display: false
//     }],
//     yAxes: [{
//       display: false
//     }],
//   },
//   elements: {
//     line: {
//       borderWidth: 2
//     },
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//     },
//   }
// }

// // Card Chart 4
// const cardChartData4 = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,255,255,.3)',
//       borderColor: 'transparent',
//       data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
//     }
//   ],
// };

// const cardChartOpts4 = {
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [{
//       display: false,
//       barPercentage: 0.6,
//     }],
//     yAxes: [{
//       display: false,
//     }]
//   }
// }

// Main Chart

// convert Hex to RGBA
// function convertHex(hex,opacity) {
//   hex = hex.replace('#','');
//   var r = parseInt(hex.substring(0,2), 16);
//   var g = parseInt(hex.substring(2,4), 16);
//   var b = parseInt(hex.substring(4,6), 16);

//   var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
//   return result;
// }

// //Random Numbers
// function random(min,max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// var elements = 27;
// var data1 = [];
// var data2 = [];
// var data3 = [];

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50,200));
//   data2.push(random(80,100));
//   data3.push(65);
// }

// const mainChart = {
//   labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: convertHex(brandInfo,10),
//       borderColor: brandInfo,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data1
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandSuccess,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data2
//     },
//     {
//       label: 'My Third dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandDanger,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 1,
//       borderDash: [8, 5],
//       data: data3
//     }
//   ]
// }

// const mainChartOpts = {
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [{
//       gridLines: {
//         drawOnChartArea: false,
//       }
//     }],
//     yAxes: [{
//       ticks: {
//         beginAtZero: true,
//         maxTicksLimit: 5,
//         stepSize: Math.ceil(250 / 5),
//         max: 250
//       }
//     }]
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     }
//   }
// }

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">


          

          {/* <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-warning">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <button type="button" className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <h4 className="mb-0">9.823</h4>
                <p>Members online</p>
              </div>
              <div className="chart-wrapper">
                <Line data={cardChartData3} options={cardChartOpts3} height={70}/>
              </div>
            </div>
          </div> */}


        </div>

        

        

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              {/* <div className="card-header">
                Traffic &amp; Sales
              </div> */}
              <div className="card-block">

                <br/>
                <table className="table table-hover table-outline mb-0 hidden-sm-down">
                  <thead className="thead-default">
                    <tr>
                      <th className="text-center"><i className="icon-star"></i></th>
                      <th>Name</th>
                      <th className="text-center">Country</th>
                      <th>Trading Volume</th>
                      <th className="text-center">Buy</th>
                      <th>Price Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'../img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div>Google1</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'../img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="50" />
                      </td>
                      <td className="text-center">
                      <i class="fa fa-usd" style={{fontSize: 24 + 'px'}}>55.77</i>
                      </td>
                      <td>
                        <div className="small text-muted">down</div>
                        <strong>-0.232</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'../img/avatars/2.jpg'} className="img-avatar" alt="admin@qq.com"/>
                          <span className="avatar-status badge-danger"></span>
                        </div>
                      </td>
                      <td>
                        <div>Google2333</div>
                        <div className="small text-muted">

                          <span>Recurring</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'../img/flags/Brazil.png'} alt="Brazil" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="10" />
                      </td>
                      <td className="text-center">
                      <i class="fa fa-usd" style={{fontSize: 24 + 'px'}}>12.34</i>
                      </td>
                      <td>
                        <div className="small text-muted">up</div>
                        <strong>+0.046</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'../img/avatars/3.jpg'} className="img-avatar" alt="admin@163.com"/>
                          <span className="avatar-status badge-warning"></span>
                        </div>
                      </td>
                      <td>
                        <div>Googlehahaha</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'../img/flags/India.png'} alt="India" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>74%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="warning" value="74" />
                      </td>
                      <td className="text-center">
                      <i class="fa fa-usd" style={{fontSize: 24 + 'px'}}>99.66</i>
                      </td>
                      <td>
                        <div className="small text-muted">up</div>
                        <strong>+0.111</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'../img/avatars/4.jpg'} className="img-avatar" alt="admin@yahoo.com"/>
                          <span className="avatar-status badge-default"></span>
                        </div>
                      </td>
                      <td>
                        <div>Google Plus</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'../img/flags/France.png'} alt="France" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>98%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="danger" value="98" />
                      </td>
                      <td className="text-center">
                      <i class="fa fa-usd" style={{fontSize: 24 + 'px'}}>66.66</i>
                      </td>
                      <td>
                        <div className="small text-muted">Down</div>
                        <strong>-5.66</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'../img/avatars/5.jpg'} className="img-avatar" alt="admi33n@gamil.com"/>
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div>Goog</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'../img/flags/Spain.png'} alt="Spain" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>22%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="22" />
                      </td>
                      <td className="text-center">
                        {/* <i className="fa fa-google-wallet" style={{fontSize: 24 + 'px'}}></i> */}
                        <i class="fa fa-usd" style={{fontSize: 24 + 'px'}}>66.66</i>
                      </td>
                      <td>
                        <div className="small text-muted">level out</div>
                        <strong>--</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'../img/avatars/6.jpg'} className="img-avatar" alt="admin@gmail.com"/>
                          <span className="avatar-status badge-danger"></span>
                        </div>
                      </td>
                      <td>
                        <div>Gmail</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'../img/flags/Bhutan.png'} alt="Spain" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>43%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="43" />
                      </td>
                      <td className="text-center">
                        {/* <i className="fa fa-cc-amex" style={{fontSize: 24 + 'px'}}></i> */}
                        <i class="fa fa-usd" style={{fontSize: 24 + 'px'}}>66.66</i>
                      </td>
                      <td>
                        <div className="small text-muted">up</div>
                        <strong>+1.08</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
