import SectionLayout from "../components/layouts/SectionLayout";
import HeroAnimation from "../components/ui/effects/HeroAnimation";
import TypewriterEffect from "../components/ui/effects/TypewriterEffect";

const Hero = () => {
  return (
    <SectionLayout sectionName="About Me">
      <div className="flex flex-col-reverse md:flex-row my-3">
        <aside className="inline-flex flex-col justify-end space-y-3">
          <button className="w-5 h-5 fill-[#808080] dark:fill-[#c9c9c9] hover:fill-[#ff754e] hover:dark:fill-[#ff754e] transition-colors duration-200 ease-out">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </button>
          <button className="w-5 h-5 fill-[#808080] dark:fill-[#c9c9c9] hover:fill-[#ff754e] hover:dark:fill-[#ff754e] transition-colors duration-200 ease-out">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </button>
        </aside>
        <div className="w-[calc(100%-20px)] flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-center min-w-[420px] max-w-[635px] mx-auto my-8">
            <h1
              title="Christian Fugarino"
              className="text-[clamp(2.64rem,4.5vw,4rem)] min-h-[clamp(4rem,6.8vw,6rem)] font-[700] text-[#3a3847] dark:text-white"
            >
              <TypewriterEffect />
            </h1>
            <h2 className="text-[clamp(1.7rem,2.7vw,2.4rem)] font-[500] text-[#5e5e5e] dark:text-[#e1e1e1]">
              FRONT END WEB DEVELOPER
            </h2>
            <p className="text-[clamp(1rem,1.4vw,1.25rem)] font-[300] text-[#808080] dark:text-[#c9c9c9] my-1">
              Hi, I{"'"}m Christian. I know how to center a div.
              <br />
              Also, cats are better than dogs.
            </p>
            <button className="max-w-[clamp(7.6rem,10vw,10rem)] px-2 text-[clamp(.9rem,1.2vw,1.1rem)] mt-3 py-2 rounded-lg border-[1.5px] text-[#3a3847] border-[#3a3847] hover:bg-[#3a3847] hover:text-[#fff] dark:text-[#fff] dark:border-[#fff] hover:dark:text-[#3a3847] hover:dark:bg-[#fff] transition-colors duration-150 ease-out">
              Contact me!
            </button>
          </div>
          <div className="hidden home:w-1/2 home:flex home:items-center home:justify-center">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hero;
