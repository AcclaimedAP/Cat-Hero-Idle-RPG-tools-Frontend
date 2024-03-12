import { useState } from "react"


export const FilterQuery = ({ updateFilter }: { updateFilter: (query: string) => void }) => {
  const [filter, setFilter] = useState('')

  return (
    <div className="container-dark-inner relative">
      <input style={{ letterSpacing: 1 }} className="bg-transparent text-white w-40 placeholder:text-opacity-50 text-sm outline-none" placeholder="filter" type="text" value={filter} onChange={(e) => { updateFilter(e.target.value); setFilter(e.target.value) }} />

      {filter &&
        <button className="absolute right-1 opacity-50 hover:opacity-100 transition-all" onClick={() => { updateFilter(''); setFilter('') }}>X</button>
      }
    </div>
  )
}