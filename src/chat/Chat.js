import React from 'react';
import ChannelList from './ChannelList';
import MessagesPanel from './MessagesPanel';
import socketClient from 'socket.io-client';
import './chat.css';
import SERVER from '../keys';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [{ name: 'first', id: 1, participants: 10 }],
            socket: null,
            channel: null
            //change back to have id
        };
    }

    componentDidMount() {
        this.loadChannels();
    }

    loadChannels = async () => {
        fetch(`${SERVER}/get-channels`).then(async (response) => {
            let data = await response.json();
            this.setState({ channels: data.channels });
        });
    };

    handleChannelSelect = (id) => {
        let channel = this.state.channels.find((c) => {
            return c.id === id;
        });
        this.setState({ channel });
        //        this.socket.emit('channel-join', id, (ack) => {});
    };

    configureSocket = () => {
        const socket = socketClient(SERVER);
        socket.on('connection', () => {
            if (this.state.channel) {
                this.handleChannelSelect(this.state.channel.id);
            }
        });
        socket.on('channel', (channel) => {
            let channels = this.state.channels;
            channels.forEach((c) => {
                if (c.id === channel.id) {
                    c.participants = channel.participants;
                }
            });
            this.setState({ channels });
        });
        socket.on('message', (message) => {
            let channels = this.state.channels;
            channels.forEach((c) => {
                if (c.id === message.channel_id) {
                    if (!c.messages) {
                        c.messages = [message];
                    } else {
                        c.messages.push(message);
                    }
                }
            });
            this.setState({ channels });
        });
        this.setState({ socket });
    };

    handleSendMessage = (channel_id, text) => {
        this.socket.emit('send-message', { channel_id, senderName: this.socket.id, id: Date.now() });
    };

    render() {
        return (
            <div className="chat-app">
                <ChannelList channels={this.state.channels} onselectchannel={this.handleChannelSelect} />
                <MessagesPanel onsendmessage={this.handleSendMessage} />
            </div>
        );
    }
}

export default Chat;
