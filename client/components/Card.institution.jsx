import { Link } from 'react-router-dom';

export default function Card({ title, imageUrl, body,Url }) {
    return (
      <div className='h-84'>
        <div className='w-64 h-full border rounded-lg shadow-xl hover:animate-pulse transition duration-300 hover:shadow-lg overflow-hidden'>
          <div>
            <img src={imageUrl} alt="" className='w-full h-40 object-cover rounded-t-lg' />
            {/* Adjust the height (h-40) as needed */}
          </div>
          <div className='flex flex-col m-2 gap-1 h-full'>
            <h1 className='text-xl bold capitalize '>{title}</h1>
            <div className='flex-grow overflow-hidden'>
              <p className='text-sm overflow-hidden text-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {body}
              </p>
            </div>
           
-              <Link to={Url} className='group' onClick={(e) => e.preventDefault()} >
             <div className='flex-shrink-0'>
                 <button className='border border-black rounded-lg w-full overflow-visible'>
                   <span className='block text-center'>read more</span>
                 </button>
             </div>
               </Link>

          </div>
        </div>
      </div>
    );
  }
