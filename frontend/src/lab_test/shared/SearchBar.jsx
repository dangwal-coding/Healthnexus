import React from 'react'

export default function SearchBar({ query, setQuery }){
  return (
    <div className="search-bar">
      <div className="input-group shadow-sm">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="form-control form-control-lg"
          placeholder="Search tests, panels, packages e.g. 'CBC' or 'Full Body Checkup'"/>
        <button className="btn btn-primary btn-lg">Search</button>
        <button className="btn btn-outline-secondary btn-lg ms-2">Book Test</button>
      </div>
    </div>
  )
}
