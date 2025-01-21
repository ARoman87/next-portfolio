import { Timeline } from "@/components/ui/timeline";
import { AiOutlineCode } from "react-icons/ai";

export default function Experience() {
  const data = [
    {
      company: "Freelancer",
      dates: "Sept 2024 - Present",
      jobTitle: "Software Engineer",
      icon: <AiOutlineCode className="h-8 w-8 text-blue-500" />,
      content: (
        <div>
          <ul className="list-disc space-y-4">
            <li>
              Built and deployed custom websites for multiple clients, tailoring each project to meet their business needs and ensure a
              professional online presence
            </li>
            <li>
              Optimized websites for Google Search (SEO) by incorporating metadata, keywords, page performance improvements, accessibility
              enhancements, and other best practices, significantly improving client search engine rankings
            </li>
            <li>
              Designed and developed websites using modern technologies, including Next.js, TypeScript, React, Prisma, and MongoDB, ensuring
              scalability, speed, and responsiveness
            </li>
            <li>Deployed projects on Vercel, managing setup and configurations to provide a seamless experience</li>
            <li>
              Successfully completed multiple Angular-based projects for a recurring client, focusing on page performance optimization, SEO
              strategies, and feature enhancements
            </li>
            <li>
              Developed B2C and B2B applications as personal projects using Next.js, TypeScript, React, Prisma, and MongoDB, showcasing
              entrepreneurial spirit and technical innovation
            </li>
            <li>
              Integrated third-party services such as email systems, instant messaging, Stripe payments, and other APIs, delivering robust
              functionality to applications
            </li>
            <li>
              Managed the end-to-end development lifecycle for every project, from gathering requirements and creating prototypes to
              deployment and post-launch support
            </li>
            <li>
              Maintained effective communication with clients to align development with their vision, establishing trust and long-term
              working relationships
            </li>
            <li>
              Balanced multiple projects simultaneously while maintaining high-quality deliverables and meeting deadlines, demonstrating
              strong time management and problem-solving skills
            </li>
            <li>
              Proven ability to work independently, showing initiative and dedication by acquiring clients, managing projects, and
              delivering measurable results
            </li>
          </ul>
        </div>
      )
    },
    {
      company: "Whole In One Health",
      dates: "Oct 2023 - Sept 2024",
      jobTitle: "Senior Software Engineer",
      icon: <AiOutlineCode className="h-8 w-8 text-blue-500" />,
      content: (
        <div>
          <ul className="list-disc space-y-4">
            <li>
              Led and rebuilt a mission-critical application from the ground up, replacing an outdated solution developed overseas, to meet
              modern performance, scalability, and usability standards
            </li>
            <li>
              Designed and developed a cross-platform mobile application using React Native (Expo), TypeScript, and MySQL, delivering a
              seamless experience for both iOS and Android users
            </li>
            <li>
              Maintained and enhanced the company&apos;s main website and admin panel built with Next.js, ensuring optimal performance and
              scalability
            </li>
            <li>
              Built and deployed the mobile app on the Apple App Store and Google Play Store, managing all aspects of app submission,
              updates, and store compliance
            </li>
            <li>
              Developed a backend system using Node.js and JavaScript, integrating third-party services such as Google Fit, Apple Health,
              and email services for a comprehensive user experience
            </li>
            <li>
              Deployed and maintained all systems, including the website and backend, on AWS, utilizing services like S3, Lambda, Amplify,
              and implementing robust security measures to safeguard data and infrastructure
            </li>
            <li>
              Defined and enforced quality assurance processes, conducted detailed code reviews, and ensured adherence to best practices
              across the development lifecycle
            </li>
            <li>
              Hired and led a team of engineers, fostering a collaborative environment and ensuring alignment of technical initiatives with
              business objectives
            </li>
            <li>
              Oversaw the entire software development lifecycle (SDLC), from requirements gathering and design to deployment and
              post-production support
            </li>
            <li>
              Integrated various third-party libraries and APIs, streamlining workflows and improving user experience through innovative
              solutions
            </li>
          </ul>
        </div>
      )
    },
    {
      company: "VetsInTech",
      dates: "Mar 2023 - Present",
      jobTitle: "Python / Web Dev Instructor",
      icon: <AiOutlineCode className="h-8 w-8 text-blue-500" />,
      content: (
        <div>
          <ul className="list-disc space-y-4">
            <li>
              Instructed military veterans and their spouses in Web Development and Python programming, emphasizing skills essential for
              transitioning into technology careers
            </li>
            <li>
              Delivered interactive lectures and hands-on coding exercises to foster understanding of web technologies, frameworks, and
              programming concepts
            </li>
            <li>Designed and implemented customized instructional strategies based on student feedback to enhance learning outcomes</li>
            <li>
              Conducted detailed code reviews to ensure best practices in coding standards, debugging, and software development lifecycle
              processes
            </li>
            <li>
              Evaluated student performance through assessments and provided actionable feedback to improve technical and professional
              skills
            </li>
            <li>
              Created a supportive learning environment by mentoring students in career development, including resume building, interview
              preparation, and portfolio creation
            </li>
            <li>
              Facilitated group projects and collaborative coding exercises to simulate real-world team dynamics in software development
            </li>
            <li>
              Provided ongoing technical support and guidance to students outside of class hours, fostering growth and confidence in their
              abilities
            </li>
            <li>
              Maintained up-to-date knowledge of industry trends and technologies to ensure course relevance and alignment with employer
              expectations
            </li>
          </ul>
        </div>
      )
    },
    {
      company: "Launchpoint",
      dates: "Mar 2023 - Oct 2023",
      jobTitle: "Associate Software Engineer",
      icon: <AiOutlineCode className="h-8 w-8 text-blue-500" />,
      content: (
        <div>
          <ul className="list-disc space-y-4">
            <li>
              Enhanced client-facing web applications through the use of cutting-edge technologies, including Angular, NgRx, Nx, and RxJS,
              resulting in optimized performance and responsive user interfaces
            </li>
            <li>
              Pioneered the development of reusable components and libraries using Nx monorepo architecture, boosting development
              efficiency, and ensuring consistency across multiple projects
            </li>
            <li>
              Masterfully managed asynchronous data streams and ensured seamless user experiences by skillfully implementing RxJS
              observables and operators
            </li>
            <li>
              Played a pivotal role in cross-functional teams, collaborating closely with designers, product managers, and quality assurance
              engineers, to ensure the prompt delivery of high-quality software
            </li>
            <li>
              Implemented robust code reviews and continuous integration procedures, leveraging technologies to maintain top-notch code
              quality and early bug detection
            </li>
            <li>
              Optimized application performance and user experience through expert application of techniques like lazy loading and code
              optimization for efficient runtime execution
            </li>
            <li>
              Demonstrated a strong commitment to professional growth and knowledge sharing by staying abreast of emerging web technologies
              and best practices, and actively disseminating knowledge through presentations, demos, and comprehensive documentation
            </li>
            <li>
              Contributed to the conceptualization and execution of various design projects, adhering to brand guidelines and project
              specifications with Figma
            </li>
          </ul>
        </div>
      )
    },
    {
      company: "LivestockCity",
      dates: "Sept 2022 - Feb 2023",
      jobTitle: "Software Engineer",
      icon: <AiOutlineCode className="h-8 w-8 text-blue-500" />,
      content: (
        <div>
          <ul className="list-disc space-y-4">
            <li>Implemented new features using the Python and Django framework, enhancing functionality and improving user experience</li>
            <li>
              Developed, designed, and maintained all phases of the application lifecycle, from initial requirements gathering to deployment
              and support
            </li>
            <li>
              Collaborated with cross-functional teams, including other developers, to deliver new features and ensure seamless integration
              into the web application
            </li>
            <li>
              Improved existing application designs by applying best practices for enhanced efficiency, cleaner code, and readability,
              resulting in easier maintenance and scalability
            </li>
            <li>
              Gained hands-on experience in implementing PostgreSQL as a database, showcasing a strong understanding of its capabilities,
              query optimization, and best practices for efficient data management
            </li>
            <li>
              Built and maintained front-end interfaces using React, ensuring a responsive and user-friendly experience while integrating
              seamlessly with the Django back-end
            </li>
            <li>
              Optimized application performance by identifying and addressing bottlenecks, utilizing tools and techniques for debugging and
              profiling
            </li>
            <li>
              Developed and deployed features in an agile environment, adhering to strict deadlines and delivering results that met or
              exceeded client expectations
            </li>
          </ul>
        </div>
      )
    }
  ];
  return (
    <div className="w-full py-20">
      <Timeline data={data} />
    </div>
  );
}
