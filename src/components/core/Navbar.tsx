import { Container } from "../ui/container";
import ThemeToggle from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <div className="fixed z-50 flex h-16 w-full items-center justify-center bg-white shadow-md dark:bg-gray-800">
      <Container>
        Navbar
        <ThemeToggle />
      </Container>
    </div>
  );
}
