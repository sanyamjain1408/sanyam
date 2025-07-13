import React from 'react'
import logo from '../../../public/logo.svg'


const Footer = () => {
  return (
    <footer className="bottom-0 w-full">
      {/* Curved top edge using SVG */}
      <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path
            fill="#2563eb"
            fillOpacity="1"
            d="M0,64L80,64C160,64,320,64,480,53.3C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Grid layout with 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-xs sm:text-sm">
            {/* Company Info */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3">
                <img className="rounded-full w-full h-full" src="/logo.svg" alt="logo" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2">DOCPAT</h3>
              <p className="text-blue-100 text-center sm:text-left">Talk to a Doctor in Minutes.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3">Quick Links</h4>
              <ul className="space-y-1 text-blue-100">
                <li><a href="#" className="hover:text-white hover:underline">About Us</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Services</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Products</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3">Support</h4>
              <ul className="space-y-1 text-blue-100">
                <li><a href="#" className="hover:text-white hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:text-white hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Careers</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3">Contact</h4>
              <p className="text-blue-100 mb-2">1234 Business Avenue</p>
              <p className="text-blue-100 mb-2">Suite 500</p>
              <p className="text-blue-100 mb-4">Tech City, TC 90210</p>
              <div className="flex space-x-4">
                {/* Add social media links/icons here */}
                <a href="#" className="text-blue-100 hover:text-white">
                  {/* Add icon for social media like Facebook, Twitter */}
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-100 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-500 mt-6 pt-4 text-center text-xs sm:text-sm text-blue-100">
            <p>© {new Date().getFullYear()} DOCPAT. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
