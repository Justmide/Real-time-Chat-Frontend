import { io } from "socket.io-client"

const socket = io("http://localhost:4009", {
    transports: ["websocket"], // Force WebSocket connection
});

const Chat = () => {
    const messages = ['Hello', "hi", "how far na"]
  return (
    <div style={{
        width:"90vw",
        maxWidth: "600px",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        
    }}>
        <div style={{
            flex: 1,
            padding: "1rem",
            height: "300px",
            border: "1px solid",
            marginBottom:"1rem",
            overflowY: "scroll"
        }}>
            {
                messages?.map((message, index) => (
                    <p key={index} style={{background: "#333",
                        width: "50%",
                        padding: "1rem",
                        borderRadius: "5px",
                        wordBreak: "break-word",
                        color: 'white'
                    }}>{message}</p>
                ))
            }
        </div>
        <form
        // onSubmit={sendMessage}
         style={{
            display:"flex",
            gap: "1rem"
        }}>
            <input 
            // onChange={handleInput}
            style={{
                flex:1,
                padding: ".5rem 1rem"
            }} type="text" name="message" id="message" placeholder="Start typing..." />
            <button>Send</button>
        </form>
    </div>
  )
}

export default Chat
