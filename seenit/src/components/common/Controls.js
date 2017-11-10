import React from 'react'
import { Link } from 'react-router-dom'

const Controls = (props) => {
  let postId = props.id
  return (
    <div id="controls">
      <li className="action"><Link className="editLink" to={`/editPost/${postId}`}>Edit</Link></li>
      <li className="action"><Link className="deleteLink" to={`/deletePost/${postId}`}>Delete</Link></li>
    </div>
  )
}

export default Controls