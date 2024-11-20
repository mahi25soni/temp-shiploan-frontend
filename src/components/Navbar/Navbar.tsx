"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavbar } from "@/context/contextApi";
const NavbarItems: { [key: string]: string }[] = [
  { tab: "Home", link: "/" },
  { tab: "Debt Consolidation", link: "/debt-consolidation" },
  { tab: "Home Loan", link: "/home-loan" },
  { tab: "Credit Card Debt", link: "/creditcard-loan" },
  { tab: "Student Loan", link: "/student-loan" },
  { tab: "Blog", link: "/blog" },
  { tab: "About Us", link: "/about" },
  { tab: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const { selectedTab, setSelectedTab } = useNavbar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
    setIsMobileMenuOpen(false); // Close the menu after selecting a tab
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between ${isMobileMenuOpen ? "h-screen" : "h-[125px]"} bg-white/75 p-8 text-black backdrop-blur-lg transition-all duration-300`}>
      {/* Logo and List Icon (hidden when menu is open) */}
      {!isMobileMenuOpen && (
        <div className="flex items-center gap-[20px] lg:gap-[40px]">
          <div className="relative">
            <Link href={"/"} passHref onClick={() => setSelectedTab("Home")}>
              <Image
                src="/theLogo.svg"
                height={22.76}
                width={150}
                objectFit="contain"
                alt="logo"
              /></Link>

          </div>
          {/* Desktop Navigation Links */}
          {NavbarItems.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <div
                onClick={() => handleSelectTab(item.tab)}
                className={`hidden cursor-pointer text-base lg:block ${selectedTab === item.tab ? "font-bold" : "font-normal opacity-50"}`}
              >
                {item.tab}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Menu Icon (only shows when menu is closed) */}
      {!isMobileMenuOpen && (
        <div className="relative h-8 w-8 lg:hidden" onClick={toggleMobileMenu}>
          <Image src="/List.svg" fill alt="menu" className="object-fill cursor-pointer" />
        </div>
      )}

      {/* Mobile Sidebar Menu (only shows when menu is open) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/25 p-8 text-black flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end">
            <RxCross2 className="w-7 h-7 cursor-pointer" onClick={toggleMobileMenu} />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {NavbarItems.map((item, index) => (
              <Link key={index} href={item.link} passHref>
                <div
                  onClick={() => handleSelectTab(item.tab)}
                  className={`text-xl ${selectedTab === item.tab ? "font-bold" : "font-normal"}`}
                >
                  {item.tab}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
