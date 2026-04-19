"use client";

import { useEffect, useRef, useState } from "react";
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
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [isOpen]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-link text-[13px] font-semibold uppercase tracking-[0.08em] flex items-center gap-1"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 pt-2 w-64 z-50">
          <div
            className="rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] shadow-[0_12px_32px_rgba(0,0,0,0.45)] backdrop-blur-md"
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const baseClasses = "block w-full text-left px-4 py-3 text-sm text-white hover:bg-white/5 hover:text-[#F3B007] transition-colors";
              const borderClass = isLast ? "" : "border-b border-[#2A2A2A]";

              if (item.isSection) {
                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      onSectionClick(item.href);
                      setIsOpen(false);
                    }}
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
                  onClick={() => setIsOpen(false)}
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
                  className="text-left text-sm py-2 text-white hover:text-accent"
                >
                  {language === "en" ? item.labelEn : item.labelSk}
                </button>
              );
            }

            return (
              <a
                key={item.href}
                href={getLocalizedUrl(item.href, language)}
                className="text-sm py-2 text-white hover:text-accent"
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
