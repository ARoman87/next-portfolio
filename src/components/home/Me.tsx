import { FaRegUser } from "react-icons/fa";
import { Card } from "../ui/card";

export default function Me() {
  return (
    <Card className="h-[250px] w-full lg:max-w-[500px]">
      <div className="flex items-center gap-2 p-4">
        <FaRegUser className="size-[18px]" />
        <h2 className="text-sm">About</h2>
      </div>
      <div className="space-y-10 p-4 font-oswald">
        <h1 className="text-5xl">Hello, I&apos;m Angel!</h1>
        <p className="text-xl">Software Engineer | Code Wrangler Extraordinaire | Tech Enthusiast | Code Detective</p>
      </div>
    </Card>
  );
}
