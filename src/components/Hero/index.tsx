import Link from "next/link";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] bg-hero-pattern bg-cover bg-center dark:bg-hero-pattern-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-col gap-5 mx-auto max-w-[800px] text-center backdrop-blur-sm">
                <h1 className=" text-3xl font-bold leading-tight text-black  shadow-white drop-shadow-[2px_2px_var(--tw-shadow-color)] dark:shadow-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Dungeon And Dragons
                </h1>
                <p className="text-base !leading-relaxed text-slate-900 font-semibold  shadow-white drop-shadow-[1px_1px_var(--tw-shadow-color)] dark:shadow-black dark:text-slate-50 sm:text-lg md:text-xl">
                  Push the boundaries of your imagination with Dungeons &
                  Dragons. Create your dream character, delve into sprawling
                  worlds, and face unforgettable challenges. D&D is more than a
                  game, it's a collaborative storytelling experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
