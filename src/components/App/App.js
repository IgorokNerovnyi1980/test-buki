import React, { Component } from "react";
// eslint-disable-next-line
import styles from "./App.module.css";
import Header from "../Header/Header";
import ChatWindow from "../ChatWindow/ChatWindow";
import ChatInput from "../ChatInput/ChatInput";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ChatWindow />
        <ChatInput />
        <Footer />
      </>
    );
  }
}

export default App;
