import { Card } from "../ui/card";

export default function Me() {
  return (
    <Card className="group relative h-[500px] w-full overflow-hidden lg:max-w-[400px]">
      {/* Wrapper div to apply hover effect */}
      <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: "url('/images/me.jpg')" }}></div>
      </div>

      {/* Black gradient overlay on the lower third */}
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent"></div>

      {/* Card content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="p-4 font-oswald">
          <h1 className="mb-2 text-3xl text-white">Hello, I&apos;m Angel!</h1>
          <p className="text-xl font-light text-white">
            Software Engineer | Code Wrangler Extraordinaire | Tech Enthusiast | Code Detective
          </p>
        </div>
      </div>
    </Card>
  );
}
