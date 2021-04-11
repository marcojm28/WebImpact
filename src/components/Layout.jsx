import React from 'react';
import NavBar from './NavBar';
import './styles/Layout.scss';
function Layout(props) {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container-fluid">
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default Layout;
