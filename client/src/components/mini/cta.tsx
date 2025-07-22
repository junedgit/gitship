export default function CTA() {
  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-[40px] bg-zinc-900 p-6 sm:p-10 md:p-20">
      <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
        <div className="absolute top-1/2 right-[-45%] aspect-square h-[800px] w-[800px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-zinc-800 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.8] rounded-full bg-zinc-700 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.6] rounded-full bg-zinc-500 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.4] rounded-full bg-zinc-200 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.2] rounded-full bg-zinc-100 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.1] rounded-full bg-white/50 opacity-30"></div>
        </div>
      </div>

      <div className="relative z-10">
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:mb-4 md:text-5xl">
          Talk Code With Us.
        </h1>
        <p className="mb-6 max-w-md text-base text-white sm:text-lg md:mb-8">
          Found a bug? Got a feature idea? Just want to vibe? <br />
          Drop a message — we&apos;re real devs, not sales bots.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a href="mailto:aj215210@gmail.com">
            <button className="cursor-pointer flex w-full items-center justify-between rounded-full bg-black px-5 py-3 text-white sm:w-[240px]">
              <span className="font-medium">Send a Message</span>
              <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
            </button>
          </a>
          <a href="tel:+917799070521">
            <button className="cursor-pointer flex w-full items-center justify-between rounded-full bg-black px-5 py-3 text-white sm:w-[240px]">
              <span className="font-medium">Call Now</span>
              <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
