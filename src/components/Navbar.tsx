'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? '' : ''}`}>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link className="flex items-center space-x-2 px-4 py-3 rounded-full glass-effect transition-colors duration-200 text-white" href="/">
              <svg width="143" height="31" viewBox="0 0 143 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_37_548)">
                  <path d="M27.9059 0.0273438C27.1381 0.0280928 26.398 0.31411 25.8292 0.82987C25.2604 1.34563 24.9035 2.05434 24.8279 2.81841C24.7522 3.58249 24.9632 4.34741 25.4198 4.9647C25.8764 5.58198 26.5461 6.00759 27.2988 6.15889C27.7233 6.24512 28.1611 6.24134 28.5839 6.1478C29.0068 6.05426 29.4054 5.87303 29.7539 5.61583C30.1023 5.35864 30.393 5.03119 30.607 4.65465C30.821 4.27811 30.9536 3.86087 30.9963 3.42987C31.039 2.99887 30.9908 2.56371 30.8548 2.15251C30.7188 1.74131 30.498 1.36322 30.2067 1.04267C29.9155 0.722116 29.5602 0.46624 29.1639 0.291571C28.7676 0.116902 28.339 0.0273275 27.9059 0.0286354V0.0273438ZM15.5266 3.12089C8.69236 3.12089 3.14723 8.66343 3.14723 15.5002C3.14723 18.267 4.05528 20.8232 5.58978 22.8847L8.93003 19.5444C8.02189 18.0627 7.63902 16.3185 7.8431 14.5927C8.04719 12.8668 8.82635 11.26 10.055 10.031C11.2837 8.80201 12.8904 8.02246 14.6162 7.81796C16.3419 7.61345 18.0863 7.9959 19.5682 8.90368L22.9084 5.56343C20.776 3.97366 18.1864 3.11678 15.5266 3.12089ZM25.4621 8.11576L22.1218 11.4573C23.0313 12.9389 23.4153 14.6836 23.2117 16.4102C23.0081 18.1367 22.2289 19.7443 20.9998 20.9737C19.7707 22.2032 18.1632 22.9827 16.4368 23.1867C14.7103 23.3907 12.9655 23.0072 11.4837 22.0981L8.1434 25.4357C10.2761 27.0262 12.8661 27.8839 15.5266 27.8808C22.3634 27.8808 27.9046 22.3396 27.9046 15.5015C27.9046 12.7348 26.9953 10.1786 25.4621 8.11576ZM3.09427 24.7834C2.32615 24.7842 1.58571 25.0704 1.0167 25.5864C0.447695 26.1024 0.0907163 26.8114 0.0150655 27.5758C-0.0605854 28.3402 0.150489 29.1054 0.607312 29.7229C1.06414 30.3405 1.73412 30.7662 2.48719 30.9176C2.9872 31.0164 3.50385 30.9905 3.99148 30.8422C4.47911 30.6939 4.9227 30.4278 5.28304 30.0673C5.64337 29.7069 5.90935 29.2632 6.05747 28.7755C6.20559 28.2878 6.23128 27.7712 6.13228 27.2712C5.99088 26.5697 5.61104 25.9387 5.05726 25.4855C4.50348 25.0322 3.80989 24.7833 3.09427 24.7834Z" fill="white"/>
                </g>
                <path d="M57.9432 13.1477H56.1705C56.1023 12.7689 55.9754 12.4356 55.7898 12.1477C55.6042 11.8598 55.3769 11.6155 55.108 11.4148C54.839 11.214 54.5379 11.0625 54.2045 10.9602C53.875 10.858 53.5246 10.8068 53.1534 10.8068C52.483 10.8068 51.8826 10.9754 51.3523 11.3125C50.8258 11.6496 50.4091 12.1439 50.1023 12.7955C49.7992 13.447 49.6477 14.2424 49.6477 15.1818C49.6477 16.1288 49.7992 16.928 50.1023 17.5795C50.4091 18.2311 50.8277 18.7235 51.358 19.0568C51.8883 19.3902 52.4848 19.5568 53.1477 19.5568C53.5152 19.5568 53.8636 19.5076 54.1932 19.4091C54.5265 19.3068 54.8277 19.1572 55.0966 18.9602C55.3655 18.7633 55.5928 18.5227 55.7784 18.2386C55.9678 17.9508 56.0985 17.6212 56.1705 17.25L57.9432 17.2557C57.8485 17.8277 57.6648 18.3542 57.392 18.8352C57.1231 19.3125 56.7765 19.7254 56.3523 20.0739C55.9318 20.4186 55.4508 20.6856 54.9091 20.875C54.3674 21.0644 53.7765 21.1591 53.1364 21.1591C52.1288 21.1591 51.2311 20.9205 50.4432 20.4432C49.6553 19.9621 49.0341 19.2746 48.5795 18.3807C48.1288 17.4867 47.9034 16.4205 47.9034 15.1818C47.9034 13.9394 48.1307 12.8731 48.5852 11.983C49.0398 11.089 49.661 10.4034 50.4489 9.92614C51.2367 9.44508 52.1326 9.20455 53.1364 9.20455C53.7538 9.20455 54.3295 9.29356 54.8636 9.47159C55.4015 9.64583 55.8845 9.90341 56.3125 10.2443C56.7405 10.5814 57.0947 10.9943 57.375 11.483C57.6553 11.9678 57.8447 12.5227 57.9432 13.1477ZM60.7889 21H58.9252L63.1127 9.36364H65.1411L69.3286 21H67.465L64.1752 11.4773H64.0843L60.7889 21ZM61.1014 16.4432H67.1468V17.9205H61.1014V16.4432ZM70.849 21V9.36364H74.9968C75.8983 9.36364 76.6464 9.51894 77.2411 9.82955C77.8396 10.1402 78.2865 10.5701 78.582 11.1193C78.8774 11.6648 79.0252 12.2955 79.0252 13.0114C79.0252 13.7235 78.8755 14.3504 78.5763 14.892C78.2809 15.4299 77.8339 15.8485 77.2354 16.1477C76.6407 16.447 75.8926 16.5966 74.9911 16.5966H71.849V15.0852H74.832C75.4002 15.0852 75.8623 15.0038 76.2184 14.8409C76.5782 14.678 76.8415 14.4413 77.0081 14.1307C77.1748 13.8201 77.2581 13.447 77.2581 13.0114C77.2581 12.572 77.1729 12.1913 77.0024 11.8693C76.8358 11.5473 76.5725 11.3011 76.2127 11.1307C75.8566 10.9564 75.3888 10.8693 74.8093 10.8693H72.6047V21H70.849ZM76.5934 15.75L79.4684 21H77.4684L74.6502 15.75H76.5934ZM81.0015 21V9.36364H85.1493C86.0546 9.36364 86.8046 9.52841 87.3993 9.85795C87.994 10.1875 88.439 10.6383 88.7345 11.2102C89.0299 11.7784 89.1777 12.4186 89.1777 13.1307C89.1777 13.8466 89.0281 14.4905 88.7288 15.0625C88.4334 15.6307 87.9864 16.0814 87.3879 16.4148C86.7932 16.7443 86.0451 16.9091 85.1436 16.9091H82.2913V15.4205H84.9845C85.5565 15.4205 86.0205 15.322 86.3765 15.125C86.7326 14.9242 86.994 14.6515 87.1606 14.3068C87.3273 13.9621 87.4106 13.5701 87.4106 13.1307C87.4106 12.6913 87.3273 12.3011 87.1606 11.9602C86.994 11.6193 86.7307 11.3523 86.3709 11.1591C86.0148 10.9659 85.5451 10.8693 84.9618 10.8693H82.7572V21H81.0015ZM91.0759 21V9.36364H98.3714V10.875H92.8316V14.4205H97.9907V15.9261H92.8316V19.4886H98.4395V21H91.0759ZM109.949 9.36364V21H108.335L102.42 12.4659H102.312V21H100.557V9.36364H102.182L108.102 17.9091H108.21V9.36364H109.949ZM111.776 10.875V9.36364H120.781V10.875H117.151V21H115.401V10.875H111.776ZM122.612 21V9.36364H126.759C127.661 9.36364 128.409 9.51894 129.004 9.82955C129.602 10.1402 130.049 10.5701 130.344 11.1193C130.64 11.6648 130.788 12.2955 130.788 13.0114C130.788 13.7235 130.638 14.3504 130.339 14.892C130.043 15.4299 129.596 15.8485 128.998 16.1477C128.403 16.447 127.655 16.5966 126.754 16.5966H123.612V15.0852H126.594C127.163 15.0852 127.625 15.0038 127.981 14.8409C128.341 14.678 128.604 14.4413 128.771 14.1307C128.937 13.8201 129.021 13.447 129.021 13.0114C129.021 12.572 128.935 12.1913 128.765 11.8693C128.598 11.5473 128.335 11.3011 127.975 11.1307C127.619 10.9564 127.151 10.8693 126.572 10.8693H124.367V21H122.612ZM128.356 15.75L131.231 21H129.231L126.413 15.75H128.356ZM131.444 9.36364H133.439L136.479 14.6534H136.604L139.643 9.36364H141.638L137.416 16.4318V21H135.666V16.4318L131.444 9.36364Z" fill="white"/>
                <defs>
                  <clipPath id="clip0_37_548">
                    <rect width="31" height="31" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          
          {/* Navigation Section */}
          <div className="hidden xl:flex items-center">
            <div className="nav-block glass-effect">
              <nav className="subnav__switch">
                <ul className="subnav__switch-list flex items-center h-full">
                  <li className="h-full">
                    <Link href="/" className={`text text--body text--light px-4 py-2 h-full flex items-center hover:bg-white/20 rounded-full font-inter ${pathname === '/' ? 'bg-white/20' : ''}`}>
                      Home
                    </Link>
                  </li>
                  <li className="h-full">
                    <Link href="/about" className={`text text--body text--light px-4 py-2 h-full flex items-center hover:bg-white/20 rounded-full font-inter ${pathname === '/about' ? 'bg-white/20' : ''}`}>
                      About
                    </Link>
                  </li>
                  <li ref={servicesRef} className="relative h-full">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text text--body text--light flex items-center px-4 py-2 h-full hover:bg-white/20 rounded-full font-inter"
                    >
                      Services
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 rounded-md shadow-lg glass-effect">
                        <div className="p-2">
                          <Link 
                            href="/kitchen" 
                            onClick={() => setIsServicesOpen(false)}
                            className={`block min-w-[148px] px-4 py-2 text-sm text-white hover:bg-white/20 rounded-full font-inter ${pathname === '/kitchen' ? 'bg-white/20' : ''}`}
                          >
                            Kitchen
                          </Link>
                          <Link 
                            href="/bathroom" 
                            onClick={() => setIsServicesOpen(false)}
                            className={`block min-w-[148px] px-4 py-2 text-sm text-white hover:bg-white/20 rounded-full font-inter ${pathname === '/bathroom' ? 'bg-white/20' : ''}`}
                          >
                            Bathroom
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="h-full">
                    <Link href="/gallery" className={`text text--body text--light px-4 py-2 h-full flex items-center hover:bg-white/20 rounded-full font-inter ${pathname === '/gallery' ? 'bg-white/20' : ''}`}>
                      Gallery
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <a className="hidden xl:inline-flex items-center px-6 py-5 border border-transparent text-sm font-medium cta-button text-white bg-black hover:bg-gray-900 tracking-[1px] font-inter" href="/get-started">
              REQUEST A QUOTE
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-md hover:text-gray-600 focus:outline-none text-black"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="xl:hidden bg-black/10 backdrop-blur-md border-t">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-3 space-y-1">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 hover:bg-white/20 rounded-full text-white font-inter ${pathname === '/' ? 'bg-white/20' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 hover:bg-white/20 rounded-full text-white font-inter ${pathname === '/about' ? 'bg-white/20' : ''}`}
            >
              About
            </Link>
            <div className="px-3 py-2 text-white">
              <div className="font-medium font-inter">Services</div>
              <Link 
                href="/kitchen" 
                onClick={() => setIsMenuOpen(false)}
                className={`block pl-4 py-2 hover:bg-white/20 rounded-full text-white text-sm font-inter ${pathname === '/kitchen' ? 'bg-white/20' : ''}`}
              >
                Kitchen
              </Link>
              <Link 
                href="/bathroom" 
                onClick={() => setIsMenuOpen(false)}
                className={`block pl-4 py-2 hover:bg-white/20 rounded-full text-white text-sm font-inter ${pathname === '/bathroom' ? 'bg-white/20' : ''}`}
              >
                Bathroom
              </Link>
            </div>
            <Link 
              href="/gallery" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 hover:bg-white/20 rounded-full text-white font-inter ${pathname === '/gallery' ? 'bg-white/20' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              href="/get-started" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 bg-black text-white rounded-md font-inter"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 