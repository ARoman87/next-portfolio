import { useTheme } from "next-themes";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { Card } from "../ui/card";
import ThemeToggle from "../ui/theme-toggle";

export default function DarkMode() {
  const { theme } = useTheme();

  return (
    <Card className="flex-1">
      <div className="flex items-center gap-2 p-4">
        {theme === "dark" ? <CiDark className="size-[18px] text-white" /> : <MdOutlineLightMode className="size-[18px]" />}

        <h2 className="text-sm">{theme === "dark" ? "Dark Mode" : "Light Mode"}</h2>
      </div>
      <div className="flex items-center justify-center">
        <ThemeToggle />
      </div>
    </Card>
  );
}
