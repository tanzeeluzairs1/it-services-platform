
import Navbar from "@/components/Navbar";

const services = [
  {
    title: "CCTV & Security Cameras",
    description: "Professional surveillance systems, NVRs, IP cameras, and remote monitoring.",
    icon: "📹",
  },
  {
    title: "Networking & Wi-Fi",
    description: "Routers, switches, firewalls, VLANs, structured cabling, and wireless networks.",
    icon: "🌐",
  },
  {
    title: "Managed IT Support",
    description: "Remote helpdesk, troubleshooting, Microsoft 365, and proactive maintenance.",
    icon: "🖥️",
  },
  {
    title: "Windows Server Support",
    description: "Active Directory, DNS, DHCP, Group Policy, IIS, and server administration.",
    icon: "🗄️",
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS, Azure, cloud migrations, infrastructure automation, and CI/CD.",
    icon: "☁️",
  },
  {
    title: "Web & Mobile Development",
    description: "Modern business websites, custom web applications, APIs, and mobile solutions.",
    icon: "💻",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <p className="mb-5 font-semibold uppercase tracking-widest text-cyan-400">
            Managed IT • Cloud • Security
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Reliable IT Solutions for Modern Businesses.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From network infrastructure and CCTV security to cloud
            solutions and custom software development, we help
            businesses build and manage reliable technology.
          </p>

          <a
            href="#services"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Explore Our Services
          </a>
        </section>

        {/* Services */}
        <section id="services" className="bg-slate-900 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our IT Services
            </h2>

            <p className="mt-4 text-slate-400">
              Complete technology solutions for your business.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-8 transition hover:border-cyan-400"
                >
                  <div className="text-4xl">{service.icon}</div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold">About Our Company</h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            We provide reliable IT infrastructure, technical support,
            cloud solutions, and software development services to
            businesses of all sizes.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-900 px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Request a Quote</h2>

            <p className="mt-4 text-slate-400">
              Tell us about your technology requirements.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4"
              />

              <textarea
                placeholder="Describe Your Project"
                aria-label="Describe Your Project"
                rows={5}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4"
              />

              <button
                type="button"
                disabled
                className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 opacity-60"
              >
                Submit (API Coming Soon)
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-slate-400">
        © 2026 IT Services. All rights reserved.
      </footer>
    </div>
  );
}
