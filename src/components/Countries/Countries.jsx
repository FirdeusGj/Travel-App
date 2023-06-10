import React from 'react'
import './Countries.css'

export default function Countries() {
  return (
    <section className='countries'>
        <div>
            <div>
                <div>
                  <h1>Country Check</h1>
                  <p>Get information about a specific country if you're looking to travel there</p>
                </div>
                <div>
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    </section>
  )
}
