import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <div className="sidebar-header">
   
          <div><strong>Top Stock System</strong></div>
          <div className="text-muted"><small>Welcome</small></div>

          <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" className="btn btn-link">
              <i className="icon-settings"></i>
            </button>
            <button type="button" className="btn btn-link">
              <i className="icon-speech"></i>
            </button>
            <button type="button" className="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="icon-user"></i>
            </button>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/home/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Dashboard</Link>
            </li>


            <li className={this.activeRoute("/icons")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-list"></i> Stock Items</a>
            
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/home/stock-items/search'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Stock Categories</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/home/stock-items/stocks'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Unit of Measurement</Link>
                </li>


              </ul>
            </li>
            <li className="nav-item">
            
              <Link to={'/home/purchases'} className="nav-link" activeClassName="active"><i className="icon-credit-card"></i> Purchases</Link>             
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#" onClick={this.handleClick.bind(this)}><i className="icon-pie-chart"></i> Sales</a> */}
              <Link to={'/home/sales'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> Sales</Link>             
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#" onClick={this.handleClick.bind(this)}><i className="icon-hourglass"></i> History</a> */}
              <Link to={'/home/histories'} className="nav-link" activeClassName="active"><i className="icon-hourglass"></i> History</Link>
            </li>
            {/* <li className="nav-item">
              <Link to={'/home/settings'} className="nav-link" activeClassName="active"><i className="icon-user"></i> Account</Link>
            </li> */}


            <li className="nav-item">
              {/* <a className="nav-link" href="#" onClick={this.handleClick.bind(this)}><i className="icon-settings"></i> Settings</a> */}
              <Link to={'/home/settings'} className="nav-link" activeClassName="active"><i className="icon-settings"></i> Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
