import React from 'react';

class Channel extends React.Component {
    render() {
        return (
            <div className="channel-item">
                <div>{this.props.name}</div>
                <span>{this.props.participants}</span>
            </div>
        );
    }
}

export default Channel;
