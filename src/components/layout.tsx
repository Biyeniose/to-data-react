import { Navbar } from "./custom/main/navbar";
import { ThemeProvider } from "./theme-provider";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="events-ui-theme">
      <div className="min-h-screen bg-background">
        {/* Navbar */}
        <Navbar />
          <main className="pt-10"> {/* Padding for fixed navbar */}
          <div className="flex justify-center"> {/* Center the content container */}
            <div className="w-full max-w-6xl px-6"> {/* Same max-width as navbar */}
              {children}
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
