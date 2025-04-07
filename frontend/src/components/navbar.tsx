"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HeartIcon,
  HomeIcon,
  NewItemIcon,
  CartIcon,
  ProfileIcon,
} from "@/assets/icons";

type NavItem = {
  path: string;
  label: string;
  icon: React.ComponentType<IconProps>;
};

type IconProps = {
  stroke?: string;
  size?: string;
  strokeWidth?: string;
};

const NavbarIcon: React.FC<{
  item: NavItem;
  isActive: boolean;
}> = ({ item, isActive }) => {
  const Icon = item.icon;
  return (
    <Link
      href={item.path}
      className="flex items-center justify-center relative group"
      aria-label={item.label}
    >
      <Icon
        stroke={isActive ? "var(--pink)" : "#000000"}
        size="35"
        strokeWidth={isActive ? "2.5" : "1.5"}
      />
      <span className="sr-only">{item.label}</span>
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();

  // Define navigation items in a single configuration
  const navItems: NavItem[] = [
    { path: "/", label: "Home", icon: HomeIcon },
    { path: "/favoriteItems", label: "Favorites", icon: HeartIcon },
    { path: "/newItem", label: "Add New Item", icon: NewItemIcon },
    { path: "/userinfo", label: "Profile", icon: ProfileIcon },
    { path: "/cart", label: "Shopping Cart", icon: CartIcon },
  ];

  return (
    <nav className="fixed bottom-0 flex justify-between w-full p-4 bg-white shadow-lg border-t border-gray-200">
      {navItems.map((item) => (
        <NavbarIcon
          key={item.path}
          item={item}
          isActive={pathname === item.path}
        />
      ))}
    </nav>
  );
}
