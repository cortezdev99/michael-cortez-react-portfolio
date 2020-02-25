import React from 'react';
import { Link } from 'react-router-dom'

export default function(props) {
  const { id, description, thumb_image_url, logo } = props.item;
  return (
    <div>
      <div>{description}</div>

      <Link to={`/portfolio/${props.slug}`}>Link</Link>
    </div>
  )
}

    // Data that we'll need:
    // - background image
    // - logo
    // - description : description
    // - id: id
    // - position