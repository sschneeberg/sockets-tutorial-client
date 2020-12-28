import React from 'react';

export class Message extends React.Component {
    render() {
        return (
            <div className="message-item">
                <div>
                    <strong>{this.props.senderName}</strong>
                </div>
                <span>{this.props.text}</span>
            </div>
        );
    }
}
