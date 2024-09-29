import React from 'react'
import './projects.css'

export default function Tags({tagsArray}) {
  return (
    <div className='tags-list'>
        {tagsArray.map(tag => (
            <p className='tag'>{tag}</p>
        ))}
    </div>
  )
}
