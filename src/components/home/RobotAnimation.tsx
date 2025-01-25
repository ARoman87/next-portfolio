import Spline from "@splinetool/react-spline";
import { Card } from "../ui/card";

export default function RobotAnimation() {
  return (
    <Card className="relative h-[450px] border pl-10 md:w-[400px]">
      {/* <main className="absolute inset-0 z-0 flex items-center justify-center"> */}
      <Spline scene="https://prod.spline.design/7isLmMCh9Z15oXOy/scene.splinecode" />
      {/* </main> */}
    </Card>
  );
}
