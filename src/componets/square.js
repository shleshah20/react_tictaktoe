import React from 'react'
import '../App.css'

export default function Square (props){
	return (
		<button className="square" onClick={props.onClick} id={'b' + props.pos}>
		{props.value}
		</button>
	)
} 