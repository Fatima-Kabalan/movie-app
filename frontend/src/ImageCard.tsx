import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="w-full md:w-1/3 px-4 py-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-64 object-cover object-center" src={imageUrl} alt={title} />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          {/* <p className="text-gray-700 text-base">{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
