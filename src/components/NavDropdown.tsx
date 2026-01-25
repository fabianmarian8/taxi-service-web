"use client";

import { useState } from "react";
import { NavItem, getLocalizedUrl } from "@/lib/routes";

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  language: "sk" | "en";
  onSectionClick: (sectionId: string) => void;
  ariaLabel: string;
}

export function NavDropdown({
  label,
  items,
  language,
  onSectionClick,
  ariaLabel,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="nav-link text-sm uppercase tracking-wide flex items-center gap-1"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
      >
        {label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 pt-2 w-64 z-50">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const baseClasses = "block w-full text-left px-4 py-3 hover:bg-gray-100 text-black text-sm";
              const borderClass = isLast ? "" : "border-b border-gray-200";

              if (item.isSection) {
                return (
                  <button
                    key={item.href}
                    onClick={() => onSectionClick(item.href)}
                    className={`${baseClasses} ${borderClass}`}
                  >
                    {language === "en" ? item.labelEn : item.labelSk}
                  </button>
                );
              }

              return (
                <a
                  key={item.href}
                  href={getLocalizedUrl(item.href, language)}
                  className={`${baseClasses} ${borderClass}`}
                >
                  {language === "en" ? item.labelEn : item.labelSk}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

interface MobileNavDropdownProps extends NavDropdownProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export function MobileNavDropdown({
  label,
  items,
  language,
  onSectionClick,
  isExpanded,
  onToggle,
}: MobileNavDropdownProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="nav-link text-base text-left py-2 uppercase tracking-wide flex items-center gap-2 w-full"
        aria-expanded={isExpanded}
      >
        {label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>

      {isExpanded && (
        <div className="ml-4 mt-2 flex flex-col gap-2">
          {items.map((item) => {
            if (item.isSection) {
              return (
                <button
                  key={item.href}
                  onClick={() => onSectionClick(item.href)}
                  className="text-black text-sm py-2 hover:text-accent text-left"
                >
                  {language === "en" ? item.labelEn : item.labelSk}
                </button>
              );
            }

            return (
              <a
                key={item.href}
                href={getLocalizedUrl(item.href, language)}
                className="text-black text-sm py-2 hover:text-accent"
              >
                {language === "en" ? item.labelEn : item.labelSk}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
