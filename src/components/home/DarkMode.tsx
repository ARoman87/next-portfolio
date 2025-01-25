import { Card } from "../ui/card";
import ThemeToggle from "../ui/theme-toggle";

export default function DarkMode() {
  return (
    <Card className="flex h-[200px] w-[400px] items-center justify-center">
      <ThemeToggle />
    </Card>
  );
}
