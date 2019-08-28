import React, { Component } from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import ChatWindow from "../ChatWindow/ChatWindow";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ChatWindow />
        <Footer />
      </>
    );
  }
}

export default App;
