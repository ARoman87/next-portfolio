import { FiZap } from "react-icons/fi";
import { Card } from "../ui/card";

export default function Skills() {
  return (
    <Card>
      <div className="flex items-center gap-2 p-4">
        <FiZap className="size-[18px]" />
        <h2 className="text-sm">Skills</h2>
      </div>
    </Card>
  );
}
