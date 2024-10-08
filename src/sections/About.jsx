import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Ejiofor Obiora</p>
              <p className="grid-subtext">
                Experienced Full Stack Developer with 4+ years of expertise in creating robust, user-centric applications. Proficient in both frontend and backend technologies, I thrive on solving complex challenges and delivering efficient solutions. Passionate about innovation and staying updated with industry trends, I excel in crafting impactful and reliable software experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 grid-subtext">
  <div className="grid-container">
    <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

    <div>
      <p className="grid-headtext">Tech Stack</p>
      <p className="grid-subtext">
        I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div>
          <h4 className="text-lg font-bold mt-4 grid-subtext">Languages & Frontend Frameworks:</h4>
          <ul className="list-none ml-5 grid-subtext">
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Three.js</li>
            <li>Fiber.js</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mt-4">Backend & Databases:</h4>
          <ul className="list-none ml-5">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>REST API</li>
            <li>GraphQL</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mt-4">DevOps & Tools:</h4>
          <ul className="list-none ml-5 mt-1">
            <li>AWS</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>Jest and Testing</li>
            <li>Version Control</li>
            <li>Scrum and Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Lagos, Nigeria and open to remote work worldwide.</p>
              <Button
                onClick={() => window.open('https://api.whatsapp.com/send?phone=2348062329708', '_blank')}
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Fueling Innovation Through Code</p>
              <p className="grid-subtext">
                Coding is more than just a job—it's my craft, my passion. There's something incredibly rewarding about
                transforming ideas into reality, solving complex problems, and continuously learning new technologies.
                Every line of code is a step toward innovation, and I thrive on the challenge of building solutions that
                make a difference.
              </p>
            </div>

          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">obiorakingsley24@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
