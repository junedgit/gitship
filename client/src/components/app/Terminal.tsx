import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/mini/terminal";

export function Term() {
  return (
    <div className="w-full md:px-auto px-4 flex justify-center items-center">
      <Terminal className="w-full">
        <TypingAnimation
          delay={500}
          className="text-lg font-mono font-semibold text-stone-200/90 "
        >
          &gt; curl -s https://gitship.juned.in/init.sh | bash
        </TypingAnimation>
        <div className="flex mx-8">
          <AnimatedSpan delay={1500}>
            <div className=" flex-1/2 hidden md:inline-block whitespace-pre text-slate-400 text-xs font-mono leading-tight text-center">
              {`
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠟⠛⠛⠛⠿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣴⣿⡟⠁⢀⣤⣀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣦⠀⠀⠀⠀
⠀⠀⠀⠀⣾⡿⠿⠛⠁⣰⣿⣿⣿⡆⠀⠀⣴⣶⣶⠄⠀⢻⣿⡄⠀⠀⠀
⠀⠀⣾⡿⠁⠀⠀⠀⠀⠻⣿⣿⣿⠃⠀⣼⣿⣿⣿⠀⠀⠀⢿⣷⣄⠀⠀
⠀⣾⣿⠁⠀⣤⣶⡄⠀⠀⠈⠉⠁⠀⠀⠈⠛⠊⠁⠀⠀⠀⠀⠙⢿⣷⠀
⠀⣿⡇⠀⢸⣿⣿⡿⡆⠀⠀⣴⣶⣶⣴⣶⣄⠀⠀⢠⣶⣿⣦⠀⠀⣿⡇
⠀⣿⡇⠀⠀⠛⠙⠉⠀⣰⣿⣿⣿⣿⣿⣿⣿⣇⠀⣿⣿⣿⣿⠀⠀⣿⡇
⠀⣿⣇⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣷⣿⣷⡀⠀⠉⠉⠀⠀⣸⣿⠇
⠀⣿⣿⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣻⡟⠘
⠀⢹⣿⠀⠀⠀⠀⠀⠉⠛⠉⠁⠉⠁⠙⠻⠿⠟⠀⠀⠀⠀⠀⣾⣿⠁⠀
⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡏⠀⠀
⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
⠀⠀⣻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
⠀⠀⢸⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀

Welcome to GitShip CLI v0.1 🚀
`}
            </div>
          </AnimatedSpan>
          <div className="flex-1/2">
            <AnimatedSpan
              delay={3500}
              className="mt-2 pt-0 -mb-2 text-md font-mono font-bold text-yellow-300"
            >
              <span> &rarr; Bootstrapping Gitship v0.1</span>
            </AnimatedSpan>
            <AnimatedSpan
              delay={5500}
              className=" text-md font-mono text-zinc-600"
            >
              <span>─────────────────────────────</span>
            </AnimatedSpan>

            <AnimatedSpan
              delay={6000}
              className="-mt-2 text-md font-mono text-yellow-300 font-semibold"
            >
              <span>🔍 Checking system compatibility...</span>
            </AnimatedSpan>

            <AnimatedSpan
              delay={7000}
              className="text-md font-mono font-semibold text-emerald-400"
            >
              <span> ✔ Node.js v18+ detected</span>
            </AnimatedSpan>

            <AnimatedSpan
              delay={7500}
              className="text-md font-mono font-semibold text-emerald-400"
            >
              <span> ✔ Git installed</span>
            </AnimatedSpan>

            <AnimatedSpan
              delay={8000}
              className="text-md font-mono font-semibold text-emerald-400"
            >
              <span> ✔ SSH access OK</span>
            </AnimatedSpan>

            <AnimatedSpan
              delay={9000}
              className="mt-4 text-md font-mono text-yellow-300 font-semibold"
            >
              <span>🔐 Setting up secure credentials...</span>
            </AnimatedSpan>
            <AnimatedSpan
              delay={10000}
              className="text-md font-mono text-emerald-400"
            >
              <span> ↳ Generating SSH keypair... ✅</span>
            </AnimatedSpan>
            <AnimatedSpan
              delay={10500}
              className="text-md font-mono text-emerald-400"
            >
              <span> ↳ Adding public key to GitShip... ✅</span>
            </AnimatedSpan>
            <AnimatedSpan
              delay={12000}
              className="mt-4 text-md font-mono text-purple-300 font-semibold"
            >
              <span>🧬 Initializing Git repository...</span>
            </AnimatedSpan>
            <AnimatedSpan
              delay={13000}
              className=" text-md font-mono text-purple-300 font-semibold"
            >
              <span>🛰️ Syncing with GitShip servers...</span>
            </AnimatedSpan>
            <AnimatedSpan
              delay={15000}
              className="mt-4 text-lg font-mono font-semibold text-emerald-400"
            >
              <span>🎉 All done. Time to ship some code.</span>
            </AnimatedSpan>
          </div>
        </div>
      </Terminal>
    </div>
  );
}

/*
<AnimatedSpan className="text-md font-mono text-green-400">
        <span> ✔ git init</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-lg font-mono text-green-400 overflow-hidden">
        <span>
          {" "}
          ✔ git remote add origin git@gitship.juned.in:juned/my-first-repo.git
        </span>
      </AnimatedSpan>
      <AnimatedSpan className="text-lg font-mono text-green-400">
        <span> ✔ git add .</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-lg font-mono text-green-400">
        <span> ✔ git commit -m Initial commit</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-lg font-mono text-green-400">
        <span> ✔ git push origin main</span>
      </AnimatedSpan>

    <TypingAnimation delay={1000} className="text-xl font-mono font-semibold">
        &gt; git init
      </TypingAnimation>

      <AnimatedSpan delay={2500} className="text-green-400">
        <span>✔ Initialized empty Git repository in Gitship</span>
      </AnimatedSpan>

      <TypingAnimation delay={3500} className="text-xl font-mono font-semibold">
        &gt; git remote add git@git.jued.in
      </TypingAnimation>
      
      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Verifying framework. Found Next.js.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Validating Tailwind CSS.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Validating import alias.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Writing components.json.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Checking registry.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Updating tailwind.config.ts</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Updating app/globals.css</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-green-500">
        <span>✔ Installing dependencies.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan>

      <TypingAnimation delay={6500} className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>

      <TypingAnimation delay={7000} className="text-muted-foreground">
        You may now add components.
      </TypingAnimation>
      */
