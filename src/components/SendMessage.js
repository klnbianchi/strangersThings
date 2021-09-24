import React, { useState } from 'react';
import { getToken } from '../auth';
import { sendMessage } from '../api'
import { useParams } from 'react-router-dom'

const SendMessage = ({ userName, setMessages, messages }) => {
    const [content, setContent] = useState([]);
    const { postId } = useParams();

    return (
        <div className="create-post">
            <h2>Send {userName} a Message</h2>
            <form
                className="send-message-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const userToken = getToken();
                    try {
                        const message = await sendMessage(postId, content, userToken);
                        console.log(message.data.message)

                        const messagesCopy = messages.slice();
                        messagesCopy.push(message.data.message)
                        setMessages(messagesCopy)
                        setContent('');
                    } catch (err) {
                        console.log(err)
                    } finally {

                    }
                }}>

                <textarea
                    type="textarea"
                    id="post-description"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    // placeholder="Description"
                    rows={8} />

                <button>Send Message</button>
            </form>
        </div>
    )
}

export default SendMessage;