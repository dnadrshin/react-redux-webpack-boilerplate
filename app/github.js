import React from 'react'

const Chat = props => <ul>
	{props.list.map((item,i) => <li key={i}>{item}</li>)}
</ul>

export default Chat
