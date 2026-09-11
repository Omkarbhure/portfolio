import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
        >
          <svg
            viewBox="0 0 140 68"
            className="h-8 w-10"
            aria-label="DevOmkar logo"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M36 9L8 34L36 59H46L18 34L46 9H36ZM104 9H94L122 34L94 59H104L132 34L104 9ZM58 9H72V59H58V9Z" />
          </svg>
          <span className="font-mono text-sm font-medium">DevOmkar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "font-mono text-sm transition-colors hover:text-primary link-underline",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background border-border">
            <div className="flex flex-col gap-6 mt-8">
              <div className="font-mono text-sm text-primary mb-4">
                {"// Navigation"}
              </div>
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "font-mono text-lg transition-colors hover:text-primary py-2",
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-primary mr-2">→</span>
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
