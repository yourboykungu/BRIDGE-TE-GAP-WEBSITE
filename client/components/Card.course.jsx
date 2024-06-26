export default function Card({ title, imageUrl, body }) {
  return (
    <div className='h-84'>
      <div className='w-64 h-full border rounded-lg bg-white shadow-xl hover:animate-pulseOnce transition duration-300 hover:shadow-lg overflow-hidden'>
        <div>
          <img src={imageUrl} alt={title} className='w-full h-40 object-cover rounded-t-lg' />
          {/* Adjust the height (h-40) as needed */}
        </div>
        <div className='flex flex-col m-2 gap-1 h-full'>
          <h1 className='text-xl font-bold'>{title}</h1>
          <div className='flex-grow overflow-hidden'>
            <p className='text-sm overflow-hidden text-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {body}
            </p>
          </div>
          <div className='flex-shrink-0'>
            <button className='border border-black rounded-lg w-full'>
              <a href="#" className='block text-center no-underline'>View More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
