import Spline from "@splinetool/react-spline";
import { BsBadge3D } from "react-icons/bs";
import { Card } from "../ui/card";

export default function RobotAnimation() {
  return (
    <Card className="relative h-[450px] w-full md:w-[400px]">
      <div className="flex items-center gap-2 p-4">
        <BsBadge3D className="size-[18px]" />
        <h2 className="text-sm">Made with Spline3D</h2>
      </div>
      <div className="absolute inset-0 -top-10">
        <Spline scene="https://prod.spline.design/7isLmMCh9Z15oXOy/scene.splinecode" />
      </div>
    </Card>
  );
}
