import { Container } from "@/components/ui/container";
import Connect from "../Connect";
import LocationCard from "../LocationCard";
import StacksCard from "./StacksCard";

export default function AboutMeSection() {
  return (
    <div>
      <Container>
        <h2 className="text-center font-oswald text-4xl font-semibold">About Me</h2>
        <div className="mt-10 flex gap-4">
          <div className="grid gap-4">
            <LocationCard />
            <StacksCard />
          </div>
          <div>
            <Connect />
          </div>
        </div>
      </Container>
    </div>
  );
}
