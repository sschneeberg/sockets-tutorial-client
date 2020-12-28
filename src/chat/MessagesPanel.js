import React from 'react';
import { Message } from './Message';

class MessagesPanel extends React.Component {
    render() {
        let list = <div className="no-content-message">There are no messages to show</div>;

        if (this.props.channel && this.props.channel.messages) {
            list = this.props.channel.messages.map((m) => (
                <Message key={m.id} id={m.id} sendername={m.senderName} text={m.text}></Message>
            ));
        }

        return (
            <div className="messages-panel">
                <div className="messages-list">{list}</div>
                <div className="messages-input">
                    <input type="text" />‍<button>Send</button>‍
                </div>
            </div>
        );
    }
}

export default MessagesPanel;
