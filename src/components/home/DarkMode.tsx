import { Card } from "../ui/card";
import ThemeToggle from "../ui/theme-toggle";

export default function DarkMode() {
  return (
    <Card className="flex h-[200px] items-center justify-center md:w-[400px]">
      <ThemeToggle />
    </Card>
  );
}
