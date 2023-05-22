import React, { Component } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import WalletForm from '../components/WalletForm';

class Home extends Component {
  render () {
    return(
      <div>
        <Header />
        <Table />
        <WalletForm />
      </div>
    )
  }
}
 
export default Home;
