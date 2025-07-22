import PricingThree from "../mini/pricing";
import { Cards } from "./cards";

export function Features() {
  return (
    <div className="h-dvh w-full max-w-7xl mx-auto items-center ">
      <div className="bg-gradient-to-r from-stone-200 to-zinc-400 bg-clip-text text-transparent pt-52 ">
        <h2 className="text-5xl font-bold  text-center">
          We Build Features You Actually Use
        </h2>
        <p className="font-medium font-sans pt-2 text-lg flex gap-2 justify-center">
          <span>Push, pull, fork, clone & ci/cd for teams</span>
          <span>—</span>
          <span>Feels cleaner. Works faster.</span>
        </p>
        {/* cards */}
        <div className="mt-16">
          <Cards />
        </div>
      </div>
      <div className="rounded-2xl w-7xl bg-[url('/images/bg-banner.webp')] bg-cover bg-center h-auto mt-36">
        <h1
          className="font-extrabold text-5xl py-14 pl-8
        bg-gradient-to-r from-stone-200 to-zinc-400 bg-clip-text text-transparent
        "
        >
          Made for Indie Hackers and Tinkerers.
        </h1>
      </div>
      <PricingThree />
    </div>
  );
}

/*

 <div className="bg-gradient-to-r from-stone-200 to-zinc-400 bg-clip-text text-transparent pt-44">
        <h2 className="text-5xl font-bold  text-center">
          Scalable Pricing Plans
        </h2>
        <p className="font-medium font-sans pt-2 text-lg flex gap-2 justify-center">
          Support When You Need It. Power When You Scale.
        </p>
        <div className="flex gap-8 max-w-4xl  mx-auto mt-8 text-center">
          <Card className="flex-1/2 rounded-3xl min-h-[600px] px-10 bg-muted">
            <CardHeader className="py-14 my-auto text-6xl font-sans font-extrabold text-zinc-300">
              ₹0/mo
            </CardHeader>
            <CardTitle className="font-bold text-xl">Free Forever</CardTitle>
            <CardContent className="text-left pt-4 -ml-4 text-md text-zinc-400">
              <ul>
                <li>Push via Git</li>
                <li>Personal profile & basic analytics</li>
                <li>Community support</li>
              </ul>
            </CardContent>
            <CardDescription className="text-zinc-200 font-semibold">
              Ideal for individuals Or Freelancers getting started with our
              service. No credit card required.
            </CardDescription>
            <Button variant="default">Start for Free</Button>
          </Card>

          <Card className="flex-1/2 rounded-3xl min-h-[600px] h-full bg-zinc-400 text-black">
            <CardTitle className="">Teams</CardTitle>
            <CardHeader>₹150/mo</CardHeader>
            <CardContent className="text-left">
              <ul>
                <li>Everything from Free</li>
                <li>Unlimited private repos</li>
                <li>Team collaboration & role management</li>
                <li>Advanced repo analytics</li>
                <li>Cloud backups + priority support</li>
                <li>Custom subdomains</li>
              </ul>
            </CardContent>
            <CardDescription>
              For Growing Teams and Serious Builders.
            </CardDescription>
          </Card>
        </div>
      </div>

*/
