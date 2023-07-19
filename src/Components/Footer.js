import React, { memo } from 'react'

export default memo(function Footer() {
  return (
    <div>
        <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
        </footer>
      
    </div>
  )
})
