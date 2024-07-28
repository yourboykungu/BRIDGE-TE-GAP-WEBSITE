import { Link } from 'react-router-dom';

export default function Card({ title, imageUrl, body, Url }) {
  return (
    <div className="h-64 w-64">
      <div className="h-full border rounded-lg shadow-xl hover:animate-pulse transition duration-300 hover:shadow-lg overflow-hidden flex flex-col">
        <div className="h-1/2">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-t-lg" />
        </div>
        <div className="flex flex-col m-2 gap-1 h-1/2">
          <h1 className="text-xl font-bold capitalize">{title}</h1>
          <div className="flex-grow overflow-hidden">
            <p className="text-sm overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {body}
            </p>
          </div>
          <Link to={Url} className="group">
            <div className="flex-shrink-0">
              <button className="border border-black rounded-lg w-full overflow-visible">
                <span className="block text-center">read more</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
