import { Bars3Icon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  openNav: () => void;
}

const productData = ["Ben Cocky", "Lim Vodka", "Loyal Bandit"];

const Nav = ({ openNav }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-[12vh] bg-white shadow-md z-[1000]">
      <div className="flex items-center justify-between w-[85%] mx-auto h-full">
        <h1 className="flex-1 cursor-pointer text-2xl text-gray-700 font-bold">
          <Link href="/">
            <div className="text-sm p-2">
              <Image
              src="/images/kings-logo.png"
              alt="Kings logo"
              width={100}
              height={100}
            />
            </div>
          </Link>
        </h1>
        <div className="flex gap-4">
          <div className="nav-link">
            <Link href="/">Home</Link>
          </div>
          <div
            className="nav-link relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link href="" className="flex items-center">
              Products
              <ChevronDownIcon className="w-[1.5rem] h-[1.5rem] ml-1" />
            </Link>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md p-2 rounded-md w-[10rem]">
                <div className="py-1 hover:bg-gray-100 rounded-md px-2">
                  <Link href="/product/bencocky">Ben Cocky</Link>
                </div>
                <div className="py-1 hover:bg-gray-100 rounded-md px-2">
                  <Link href="/product/limvodka">Lim Vodka</Link>
                </div>
                <div className="py-1 hover:bg-gray-100 rounded-md px-2">
                  <Link href="/product/loyalbandit">Loyal Bandit</Link>
                </div>
              </div>
            )}
          </div>
          {/* <div className="nav-link">
            <Link href="/blog">Blog</Link>
          </div> */}
          <div className="nav-link">
            <Link href="/about">About</Link>
          </div>
          <div className="nav-link">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div onClick={openNav} className="cursor-pointer">
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#be7f39]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
