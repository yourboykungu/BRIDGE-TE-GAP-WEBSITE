import React from 'react'

export default function OAuth() {
  return (
    <div className='flex flex-col gap-4 items-center'>
        <button
      //onClick={handleGoogleClick}
      type="button"
      className="bg-google text-white p-3 w-1/2  rounded-xl uppercase hover:opacity-95"
    >
      continue with google
    </button>
    </div>
  )
}
