import Link from "next/link";
import ProjectsBtns from "../ProjectsBtns";

const IndustrialTomb = () => {
  return (
    <li
      className="bg-project-2 snap-center snap-always h-[20rem] sm:h-[25rem] xl:h-[21rem]
	  w-[calc(100%-4rem)] sm:w-[calc(100%-4rem)] sm:max-w-[500px] xl:w-full xl:max-w-none
	  rounded-lg shrink-0 mr-[0.9rem] xl:mx-0 overflow-hidden"
    >
      <div className="h-full flex flex-col-reverse xl:flex-row">
        <div className="w-full h-[35%] sm:h-[32%] xl:h-auto xl:w-1/2 p-4 xl:p-8 flex flex-col justify-between">
          <div className="w-full">
            <div className="relative">
              <svg
                width="1048"
                height="84"
                viewBox="0 0 1048 84"
                fill="none"
                className="w-full h-8 sm:h-12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_4)">
                  <path
                    d="M7.75 61.25V52.5H25.25V8.75H7.75V0H60.25V8.75H42.75V52.5H60.25V61.25H7.75ZM69 61.25V17.5H121.5V26.25H130.25V61.25H112.75V26.25H86.5V61.25H69ZM147.75 61.25V52.5H139V26.25H147.75V17.5H182.75V0H200.25V61.25H147.75ZM156.5 52.5H182.75V26.25H156.5V52.5ZM217.75 61.25V52.5H209V17.5H226.5V52.5H252.75V17.5H270.25V61.25H217.75ZM279 61.25V52.5H322.75V43.75H287.75V35H279V26.25H287.75V17.5H331.5V26.25H296.5V35H331.5V43.75H340.25V52.5H331.5V61.25H279ZM375.25 61.25V26.25H357.75V17.5H375.25V0H392.75V17.5H410.25V26.25H392.75V61.25H375.25ZM445.25 26.25H454V35H445.25V61.25H427.75V17.5H445.25V26.25ZM480.25 17.5V26.25H454V17.5H480.25ZM515.25 8.75V0H532.75V8.75H515.25ZM497.75 61.25V52.5H515.25V26.25H506.5V17.5H532.75V52.5H550.25V61.25H497.75ZM567.75 61.25V52.5H559V43.75H567.75V35H602.75V26.25H567.75V17.5H611.5V26.25H620.25V61.25H567.75ZM576.5 52.5H602.75V43.75H576.5V52.5ZM637.75 61.25V52.5H655.25V8.75H646.5V0H672.75V52.5H690.25V61.25H637.75ZM795.25 61.25V8.75H777.75V0H830.25V8.75H812.75V61.25H795.25ZM847.75 61.25V52.5H839V26.25H847.75V17.5H891.5V26.25H900.25V52.5H891.5V61.25H847.75ZM856.5 52.5H882.75V26.25H856.5V52.5ZM909 61.25V17.5H961.5V26.25H970.25V61.25H952.75V26.25H944V61.25H926.5V26.25H917.75V61.25H909ZM987.75 61.25V52.5H979V0H996.5V17.5H1031.5V26.25H1040.25V52.5H1031.5V61.25H987.75ZM996.5 52.5H1022.75V26.25H996.5V52.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_4"
                    x="0.75"
                    y="0"
                    width="1046.5"
                    height="83.25"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="15" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_4"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_4"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span className="text-sm absolute -bottom-[12px] xxl:-bottom-[15px] right-2 text-yellow">
                A JavaScript Game
              </span>
            </div>
            <div className="relative">
              <div className="hidden xl:block absolute xl:top-20 xxl:top-12">
                <picture>
                  <img src="platform.svg" alt="platform" />
                </picture>
              </div>
            </div>
            <p className="mt-8 text-[0.9rem] w-[77%] text-[#d5d5d5] hidden xl:block">
              Industrial Tomb is a{" "}
              <span className="text-white">2D Puzzle-Platformer game</span>{" "}
              where players use{" "}
              <span className="text-white">interactive objects</span> to reach{" "}
              <span className="text-white">the glowing scarab</span>. Achieving
              a <span className="text-white">star rating</span> is based on{" "}
              <span className="text-white">completion time</span>.
            </p>
          </div>
          <ProjectsBtns
            href="/industrialtomb"
            color="#ffffff88"
            hoverColor="white"
          />
        </div>
        <div className="w-full h-[65%] sm:h-[68%] xl:h-auto xl:w-1/2 p-1 xl:p-2">
          <Link href="/industrialtomb">
            <div className="h-full overflow-hidden rounded-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-top top-0 rounded-lg"
              >
                <source src="/IndustrialTombVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default IndustrialTomb;
