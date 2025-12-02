"use client";

import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline, IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";


type DropdownItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | string>(null);

  const dropdownItems: Record<string, DropdownItem[]> = {
    payments: [
      { label: "UPI", href: "/payments/upi" },
      { label: "Cards", href: "/payments/cards" },
      { label: "Net Banking", href: "/payments/netbanking" },
    ],
    payouts: [
      { label: "IMPS", href: "/payouts/imps" },
      { label: "NEFT", href: "/payouts/neft" },
      { label: "RTGS", href: "/payouts/rtgs" },
    ],
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-4 lg:py-3">

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:items-center space-x-8 relative">
          <li>
            <Link href="/aibanking" className="hover:text-gray-light py-2">
              AI Banking
            </Link>
          </li>

          <DesktopDropdown
            title="Payments"
            href="/payments"
            items={dropdownItems.payments}
          />

          <DesktopDropdown
            title="Payouts"
            href="/payouts"
            items={dropdownItems.payouts}
          />

          <li>
            <Link href="/support" className="hover:text-gray-light py-2">
              Support
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-4xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden overflow-hidden bg-black py-4 space-y-4 absolute top-full left-0 right-0 z-40"
          >
            <div className="container">
            <MobileLink href="/aibanking" label="AI Banking" />

            <MobileDropdown
              title="Payments"
              href="/payments"
              items={dropdownItems.payments}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />

            <MobileDropdown
              title="Payouts"
              href="/payouts"
              items={dropdownItems.payouts}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />

            <MobileLink href="/support" label="Support" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ---------------- Desktop Dropdown ---------------- */

type DesktopDropdownProps = {
  title: string;
  href?: string;
  items: DropdownItem[];
};

function DesktopDropdown({ title, href, items }: DesktopDropdownProps) {
  return (
    <li className="relative group cursor-pointer">
      <div className="flex items-center gap-1">
        {href ? (
          <Link href={href} className="hover:text-gray-light py-2">
            {title}
          </Link>
        ) : (
          <span className="hover:text-gray-light py-2">{title}</span>
        )}
        <IoChevronDownOutline className="text-sm" />
      </div>

      <AnimatePresence>
        <motion.ul
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          className="absolute left-0 top-full hidden group-hover:block bg-black border border-purple-500/40 text-white shadow-lg rounded min-w-[10rem] space-y-1 z-50"
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 hover:bg-purple-500/30 rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </li>
  );
}

/* ---------------- Mobile Dropdown ---------------- */

type MobileDropdownProps = {
  title: string;
  href?: string;
  items: DropdownItem[];
  openMenu: null | string;
  setOpenMenu: (value: null | string) => void;
};

function MobileDropdown({
  title,
  href,
  items,
  openMenu,
  setOpenMenu,
}: MobileDropdownProps) {
  const isOpen = openMenu === title;

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        {href ? (
          <Link href={href} className="hover:text-gray-light py-2 block">
            {title}
          </Link>
        ) : (
          <span className="hover:text-gray-light py-2 block">{title}</span>
        )}

        <button
          onClick={() => setOpenMenu(isOpen ? null : title)}
          className="px-2 cursor-pointer"
        >
          <IoChevronDownOutline
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden space-y-2"
          >
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 px-4 hover:bg-purple-500/20 rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Mobile Single Link ---------------- */

type MobileLinkProps = {
  href: string;
  label: string;
};

function MobileLink({ href, label }: MobileLinkProps) {
  return (
    <Link href={href} className="block py-2 hover:text-gray-light">
      {label}
    </Link>
  );
}

