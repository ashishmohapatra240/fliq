"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaMedium } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#17171C] text-white">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-14 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-8">
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/images/logo.svg"
                alt="FLIQ Logo"
                width={87}
                height={36}
                className="w-20 h-auto object-contain"
              />
            </Link>

            <p className="text-zinc-400 text-sm leading-6 max-w-sm">
              Streamlines customer management, enhances team collaboration in
              one intuitive platform for your sales process.
            </p>

            <div className="flex gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-zinc-400 text-sm font-medium">Backed by</h3>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/footer/ycombinator.png"
                    alt="Y Combinator"
                    width={120}
                    height={80}
                  />
                  <Image
                    src="/images/footer/franklin-templeton.png"
                    alt="Franklin Templeton"
                    width={120}
                    height={80}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-zinc-400 text-sm font-medium">Powered by</h3>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/footer/ethosx.png"
                    alt="EthosX"
                    width={120}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-white text-base font-medium">Resources</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/about"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-use"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-base font-medium">Get in touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <p className="text-zinc-400 text-sm">Email:</p>
                  <a
                    href="mailto:fliq@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    fliq@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-zinc-400 text-sm">Phone number:</p>
                  <a
                    href="tel:+918249412044"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    +91 8249412044
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-zinc-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-zinc-400 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-zinc-400 transition-colors"
                  aria-label="Medium"
                >
                  <FaMedium className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 my-6"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-zinc-400 text-sm">
            Fliq © 2025. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <span>|</span>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
