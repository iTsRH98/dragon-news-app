import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-CA"
  );

  return (
    <div className="card bg-base-100 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3 hover:underline cursor-pointer">{title}</h2>
        <img
          src={thumbnail_url}
          alt="news"
          className="w-full h-60 object-cover rounded-lg mb-3"
        />
        <p className="text-sm text-gray-700 mb-2">
          {details.length > 250 ? details.slice(0, 250) + "..." : details}
          <span className="text-orange-500 font-medium cursor-pointer">
            {" "}
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(Math.floor(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
