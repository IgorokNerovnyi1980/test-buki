import React, { Component } from 'react';
import Header from '../ChatHeader/ChatHeader';
import ChatWindow from '../ChatWindow/ChatWindow';
import ChatInput from '../ChatInput/ChatInput';
import Footer from '../Footer/Footer';

class ChatPage extends Component {
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

export default ChatPage;
