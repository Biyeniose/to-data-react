import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
<Button 
  size="sm"
  onClick={toggleTheme}
  className=""
>
  {theme === "light" ? "dark" : "Light"}
</Button>
  )
}