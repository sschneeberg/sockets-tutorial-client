import React from 'react';
import Channel from './Channel';

class ChannelList extends React.Component {
    render() {
        let list = `There is no channels to show`;
        if (this.props.channels) {
            list = this.props.channels.map((c, index) => <Channel key={index} name={c}></Channel>);
        }
        return <div className="channel-list">{list}</div>;
    }
}

export default ChannelList;
