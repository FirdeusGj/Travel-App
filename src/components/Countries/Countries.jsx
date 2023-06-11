import React, { useEffect, useState } from 'react'
import './Countries.css'
import axios from 'axios';

export default function Countries() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  async function fetchCountries(query){
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${searchCountry || query}`
    );
    setCountries(data[0].Countries)
    console.log(data[0].name.common)
  }
  console.log(fetchCountries())
  const searchEnter = (e) => {
    if(e.key === 'Enter'){
      fetchCountries();
    }
  }
  return (
    <section className='countries'>
        <div>
            <div>
                <div>
                  <h1>Country Check</h1>
                  <p>Get information about a specific country if you're looking to travel there</p>
                </div>
                <div>
                    <input type="text"
                    value={searchCountry}
                    placeholder='Enter Country'
                    onChange={(event) => setSearchCountry(event.target.value)}
                    onKeyUp={searchEnter} />
                    <button>Search</button>
                </div>
            </div>
        </div>
    </section>
  )
}
