import { Container } from "../ui/container";
import RobotAnimation from "./RobotAnimation";

export default function LandingPage() {
  return (
    <div className="pt-20">
      <Container>
        <div>
          <div>
            <h1>Hey There,</h1>
            <h2>I`m Angel</h2>
          </div>
        </div>
        <RobotAnimation />
      </Container>
    </div>
  );
}
