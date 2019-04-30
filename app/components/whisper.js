import EmbarkJS from 'Embark/EmbarkJS';
import React from 'react';
import {Alert, Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class Whisper extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      listenTo: '',
      channel: '',
      message: '',
      subscribedChannels: [],
      messageList: [],
      logs: []
    };
  }

  handleChange (e, name) {
    this.state[name] = e.target.value;
    this.setState(this.state);
  }

  checkEnter(e, func) {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    func.apply(this, [e]);
  }

  sendMessage (e) {
    e.preventDefault();
    EmbarkJS.Messages.sendMessage({topic: this.state.channel, data: this.state.message});
    this.addToLog("EmbarkJS.Messages.sendMessage({topic: '" + this.state.channel + "', data: '" + this.state.message + "'})");
  }

  listenToChannel (e) {
    e.preventDefault();

    const subscribedChannels = this.state.subscribedChannels;
    subscribedChannels.push(<span>Subscribed to <b>{this.state.listenTo}</b>. Now try sending a message</span>);
    this.setState({
      subscribedChannels
    });

    const messageList = this.state.messageList;
    EmbarkJS.Messages.listenTo({topic: [this.state.listenTo]}).subscribe(
      message => {
        messageList.push(<span>Channel: <b>{message.topic}</b> |  Message: <b>{message.data}</b></span>);
        this.setState({messageList});
      },
      error => {
        messageList.push(<span className="alert-danger">Error: {error}</span>);
        this.setState({messageList});
      }
    );

    this.addToLog("EmbarkJS.Messages.listenTo({topic: ['" + this.state.listenTo + "']}).then(function(message) {})");
  }

  addToLog (txt) {
    this.state.logs.push(txt);
    this.setState({logs: this.state.logs});
  }

  render () {
    return (
      <React.Fragment>
        {
          !this.props.enabled ?
            <React.Fragment>
              <Alert bsStyle="warning">The node you are using does not support Whisper</Alert>
              <Alert bsStyle="warning">The node uses an unsupported version of Whisper</Alert>
            </React.Fragment> : ''
        }
        <h3>Listen To channel</h3>
        <Form inline onKeyDown={(e) => this.checkEnter(e, this.listenToChannel)}>
          <FormGroup>
            <FormControl
              type="text"
              defaultValue={this.state.listenTo}
              placeholder="channel"
              onChange={e => this.handleChange(e, 'listenTo')}/>
            <Button bsStyle="primary" onClick={(e) => this.listenToChannel(e)}>Start Listening</Button>
            <div id="subscribeList">
              {this.state.subscribedChannels.map((item, i) => <p key={i}>{item}</p>)}
            </div>
            <p>messages received:</p>
            <div id="messagesList">
              {this.state.messageList.map((item, i) => <p key={i}>{item}</p>)}
            </div>
          </FormGroup>
        </Form>

        <h3>Send Message</h3>
        <Form inline onKeyDown={(e) => this.checkEnter(e, this.sendMessage)}>
          <FormGroup>
            <FormControl
              type="text"
              defaultValue={this.state.channel}
              placeholder="channel"
              onChange={e => this.handleChange(e, 'channel')}/>
            <FormControl
              type="text"
              defaultValue={this.state.message}
              placeholder="message"
              onChange={e => this.handleChange(e, 'message')}/>
            <Button bsStyle="primary" onClick={(e) => this.sendMessage(e)}>Send Message</Button>
          </FormGroup>
        </Form>

        <p>Javascript calls being made: </p>
        <div className="logs">
          <p>EmbarkJS.Messages.setProvider('whisper')</p>
          {
            this.state.logs.map((item, i) => <p key={i}>{item}</p>)
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Whisper;
