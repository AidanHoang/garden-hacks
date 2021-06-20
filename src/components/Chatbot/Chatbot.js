import React from 'react'

export default function Chatbot() {
    return (
        <div style={{display: "grid", placeItems: "center", marginTop: "20px"}}>
            <iframe
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/432a3a65-d3ab-4845-bd59-0657d0f211c4">
            </iframe>
        </div>
    )
}
