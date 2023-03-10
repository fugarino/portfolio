import Link from "next/link";

const Pikachu = () => {
  return (
    <li
      className="bg-project-3 snap-center snap-always h-[20rem] sm:h-[25rem] xl:h-[21rem]
	  w-[calc(100%-4rem)] sm:w-[calc(100%-4rem)] sm:max-w-[500px] xl:w-full xl:max-w-none
	  rounded-lg shrink-0 mr-[0.5rem] sm:mr-[0.75rem] xl:mx-0 overflow-hidden"
    >
      <div className="h-full flex flex-col xl:flex-row">
        <div className="w-full h-[65%] sm:h-[68%] xl:h-auto xl:w-1/2 p-1 xl:p-2">
          <Link href="/pikachu">
            <div className="h-full overflow-hidden rounded-lg">
              <picture>
                <img
                  src="/PikachuOrange.png"
                  alt="pikachu"
                  className="w-full h-full object-cover rounded-lg"
                />
              </picture>
            </div>
          </Link>
        </div>
        <div className="relative w-full h-[35%] sm:h-[32%] xl:h-auto xl:w-1/2 p-4 xl:p-8 flex flex-col justify-between">
          <div className="absolute hidden xl:block bottom-0 right-[12rem] w-[7rem]">
            <picture>
              <img
                src="/pikachu_ashketchum 2.svg"
                alt="ash"
                className="w-full"
              />
            </picture>
          </div>
          <div className="w-full">
            <div className="w-full flex items-center justify-between">
              <div className="w-2/5 sm:w-[35%]">
                <picture>
                  <img src="/pokemon logo.svg" alt="pokemon logo" />
                </picture>
              </div>
              <span className="w-3/5 text-[1.2rem] sm:text-[1.7rem] font-bold relative top-[3px] text-black flex justify-center">{`- "CSS Drawing"`}</span>
            </div>
            <p className="mt-12 text-[0.9rem] text-center text-[#434343] hidden xl:block">
              This{" "}
              <span className="font-medium underline text-black">
                “drawing”
              </span>{" "}
              was made entirely in{" "}
              <span className="font-medium underline text-black">
                html and css
              </span>
              .
              <br /> Some might argue that these tools aren’t great for making
              art.
              <br />{" "}
              <span className="font-medium underline text-black">
                I disagree!
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center text-[#00000088]">
            <div className="px-2 flex items-center space-x-3 relative top-[2px]">
              <button className="hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </button>
              <button className="w-[21px] h-[21px]">
                <svg
                  viewBox="0 0 128 128"
                  className="fill-[#00000088] hover:fill-black"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </button>
            </div>
            <button className="h-8 rounded-full px-2 flex items-end justify-center relative bottom-[2px] hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 relative top-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <Link href="/pikachu" className="text-[0.8rem] ml-2 font-bold">
                FULL PAGE
              </Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Pikachu;
