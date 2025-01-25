import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
export default function ContactSidebar() {
  return (
    <div className="fixed bottom-0 right-0 z-20 mr-10 hidden flex-col items-center space-y-2 bg-transparent md:flex">
      <div className="flex flex-col items-center space-y-4 text-2xl">
        <a href="https://github.com/ARoman87" target="_blank">
          <FaGithub />
        </a>
        <a href="mailto: angel.l.roman@hotmail.com" target="_blank">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/aroman87/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <div className="h-20 border-r-2"></div>
    </div>
  );
}
