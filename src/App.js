import socketClient from 'socket.io-client';
import './App.css';
import Chat from './chat/Chat';
import SERVER from './keys';

console.log(SERVER);

function App() {
    const socket = socketClient(SERVER);

    socket.on('connection', () => {
        console.log('connected to the back end');
    });

    return (
        <div className="App">
            <Chat />
        </div>
    );
}

export default App;
