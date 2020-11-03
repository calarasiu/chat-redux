import React from 'react';
import ChannelList from '../containers/channelList';
import MessageList from '../containers/messageList';

const App = () => {
  return (
    <div className="messaginWrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="assets/images/logo.svg" alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
