import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';

// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  render() {
    return (
     {this.props.messages.map(message=>{ <Message message={message} />})}
    );
  }
}

function mapStateToProps(state) {
  return { messages: state.messages };
}

export default connect(mapStateToProps)(MessageList);
