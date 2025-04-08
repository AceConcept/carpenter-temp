import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';

interface GalleryItem {
  src: string;
  width: number;
  height: number;
  title?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
  gridItems?: GalleryItem[];
}

export default function CustomImageGallery({ items, gridItems = items }: ImageGalleryProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert our items to the format required by react-image-gallery
  const galleryItems = items.map(item => ({
    original: item.src,
    thumbnail: item.src,
    originalTitle: item.title,
    thumbnailTitle: item.title,
    originalHeight: item.height,
    originalWidth: item.width,
  }));

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      {/* Pinterest-style grid */}
      <div className="layout-container pinterest">
        <div className="photogallery-row">
          {[...Array(3)].map((_, colIndex) => (
            <div key={colIndex} className="photogallery-column column-3">
              {gridItems
                .filter((_, index) => index % 3 === colIndex)
                .map((item, itemIndex) => {
                  const originalIndex = items.indexOf(item);
                  const isHigh = (colIndex + itemIndex) % 2 === 0;
                  return (
                    <div 
                      key={itemIndex} 
                      className={`photoGalleryThumbs ${isHigh ? 'pinterest-high' : 'pinterest-low'} animated`}
                      onClick={() => handleImageClick(originalIndex)}
                    >
                      <div className="thumbnailInnerWrapper">
                        <div className="image-container revealed">
                          <Image
                            src={item.src}
                            alt={item.title || 'Gallery Image'}
                            width={item.width}
                            height={item.height}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="caption-container" style={{display: 'none'}}>
                          <span className="caption-inner">
                            <span className="text">{item.title || 'Kitchen Design'}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {/* Popup Gallery */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white text-2xl z-50"
            onClick={() => setIsGalleryOpen(false)}
          >
            ✕
          </button>
          <div className="w-full max-w-4xl mx-4">
            <ImageGallery
              items={galleryItems}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={false}
              showNav={true}
              autoPlay={false}
              slideDuration={450}
              slideInterval={3000}
              showIndex={true}
              lazyLoad={true}
              additionalClass="custom-gallery"
              startIndex={currentIndex}
            />
          </div>
        </div>
      )}
    </>
  );
} 