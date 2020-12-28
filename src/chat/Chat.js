import React from 'react';
import ChannelList from './ChannelList';
import MessagesPanel from './MessagesPanel';
import './chat.css';
import SERVER from '../keys';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: ['first']
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

    render() {
        return (
            <div className="chat-app">
                <ChannelList channels={this.state.channels} />
                <MessagesPanel />
            </div>
        );
    }
}

export default Chat;
