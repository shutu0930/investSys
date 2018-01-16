import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import purchases from '../../views/Purchases/purchases.json';
import sales from '../../views/Sales/sales.json';
class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    this.getNumOfPurchases= this.getNumOfPurchases.bind(this);
    this.getNumOfSales =this.getNumOfSales.bind(this);
  }

  componentWillMount(){
    localStorage.setItem('balance',"1009900.00");
    localStorage.setItem('purchases',JSON.stringify(purchases));
    localStorage.setItem('sales',JSON.stringify(sales));

// // localStorage.setItem('balance', "999.00");

}
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
   
  }

getNumOfPurchases(){
  return (Object.keys(JSON.parse(localStorage.purchases)).length);
}
getNumOfSales(){
  return (Object.keys(JSON.parse(localStorage.sales)).length);
}


  render() {
    return (
      <header className="app-header navbar">
      
        <a className="navbar-brand" href="#"></a>
       
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="icon-bell"></i><span className="badge badge-pill badge-danger">6</span></a>
          </li>


          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle} className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <img src={'../img/avatars/3.jpg'} className="img-avatar" alt="shu@gmail.com"/>
                <span className="hidden-md-down">Shu Tu</span>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center"><strong>Account</strong></DropdownItem>

                <DropdownItem><i className="fa fa-credit-card"></i>Balance<span className="badge badge-primary">{localStorage.balance}</span></DropdownItem>

                <DropdownItem><i className="fa fa-shopping-cart"></i>Recent Purchases<span className="badge badge-info">{this.getNumOfPurchases()}</span></DropdownItem>
                
                <DropdownItem><i className="fa fa-line-chart"></i>Recent Sales<span className="badge badge-danger">{this.getNumOfSales()}</span></DropdownItem>
          
                <DropdownItem><i className="fa fa-usd"></i> Deposit</DropdownItem>
                <DropdownItem><i className="fa fa-money"></i> Withdraw</DropdownItem>
                <DropdownItem header className="text-center"><strong>Settings</strong></DropdownItem>
     
                <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>

        </ul>
      </header>
    )
  }
}

export default Header;
