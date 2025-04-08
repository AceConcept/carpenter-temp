'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/dist/photoswipe.css';

interface GalleryItem {
  src: string;
  width: number;
  height: number;
  title?: string;
}

interface PhotoSwipeGalleryProps {
  items: GalleryItem[];
}

export default function PhotoSwipeGallery({ items }: PhotoSwipeGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const pswpRef = useRef<HTMLDivElement>(null);
  const pswpInstanceRef = useRef<PhotoSwipe | null>(null);

  useEffect(() => {
    if (!galleryRef.current || !pswpRef.current) return;

    // Create a flat array of all gallery items
    const galleryItems = items.map((item, index) => ({
      src: item.src,
      width: item.width,
      height: item.height,
      title: item.title,
    }));

    // Get all image containers
    const imageContainers = galleryRef.current.querySelectorAll('.image-container');
    
    // Add click handlers to each image container
    imageContainers.forEach((container) => {
      const originalIndex = parseInt(container.getAttribute('data-index') || '0');
      container.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Destroy existing instance if it exists
        if (pswpInstanceRef.current) {
          pswpInstanceRef.current.destroy();
          pswpInstanceRef.current = null;
        }

        // Create new instance
        const pswp = new PhotoSwipe({
          dataSource: galleryItems,
          pswpModule: () => import('photoswipe'),
          preload: [1, 1],
          loop: false,
          wheelToZoom: false,
          arrowKeys: true,
          escKey: true,
          returnFocus: false,
        });

        // Store instance reference
        pswpInstanceRef.current = pswp;

        // Initialize and go to clicked image
        pswp.init();
        pswp.goTo(originalIndex);
      });
    });

    // Cleanup
    return () => {
      if (pswpInstanceRef.current) {
        pswpInstanceRef.current.destroy();
        pswpInstanceRef.current = null;
      }
    };
  }, [items]);

  return (
    <>
      <div ref={galleryRef} className="layout-container pinterest">
        <div className="photogallery-row">
          {[...Array(3)].map((_, colIndex) => (
            <div key={colIndex} className="photogallery-column column-3" data-index={colIndex}>
              {items
                .filter((_, index) => index % 3 === colIndex)
                .map((item, itemIndex) => {
                  const originalIndex = items.indexOf(item);
                  const isHigh = (colIndex + itemIndex) % 2 === 0;
                  return (
                    <div key={itemIndex} className={`photoGalleryThumbs ${isHigh ? 'pinterest-high' : 'pinterest-low'} animated`}>
                      <div className="thumbnailInnerWrapper">
                        <div className="image-container revealed" data-index={originalIndex}>
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
      <div ref={pswpRef} className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>
              <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
              <button className="pswp__button pswp__button--share" title="Share"></button>
              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
              <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>
            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 