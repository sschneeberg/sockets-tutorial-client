import React from 'react';
import Channel from './Channel';

class ChannelList extends React.Component {
    render() {
        let list = `There is no channels to show`;
        if (this.props.channels) {
            list = this.props.channels.map((c) => (
                <Channel
                    onselectchannel={this.props.onselectchannel}
                    name={c.name}
                    key={c.id}
                    id={c.id}
                    participants={c.participants}></Channel>
            ));
        }
        return <div className="channel-list">{list}</div>;
    }
}

export default ChannelList;
