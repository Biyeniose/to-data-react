import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
<nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50">
  <div className="flex justify-center"> {/* Center the content container */}
    <div className="flex h-10 items-center justify-between px-6 w-full max-w-6xl"> {/* Add max-width */}
      <Link to="/" className="text-sm font-medium text-foreground hover:underline">
            Toronto Events
        </Link>
      
        <div className="flex items-center space-x-6">
            <nav className="flex space-x-4">
              <Link to="/contact" className="text-sm text-foreground hover:underline">
                Contact
              </Link>
              <Link to="/about" className="text-sm text-foreground hover:underline">
                About
              </Link>
            </nav>
            <div className="ml-6">
              <ModeToggle />
            </div>
        </div>

    </div>
  </div>
</nav>
  )
}