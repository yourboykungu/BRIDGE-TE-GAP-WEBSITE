import React from 'react'

export default function Category({ title }) {
  return (
    <div>
        <div className="flex flex-row gap-2 m-1 p-1">
              <input type="checkbox" />
              <label htmlFor="" className="capitalize m-0">{title}</label>
            </div>
    </div>
  )
}
