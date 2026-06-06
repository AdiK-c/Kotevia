const steps = [
  { num: "01", title: "Free Consultation", desc: "Contact us and our expert team will understand your energy needs, budget, and location." },
  { num: "02", title: "Site Survey", desc: "We visit your site, assess your roof, check sunlight exposure, and design the ideal system." },
  { num: "03", title: "Installation", desc: "Our certified team installs your solar system with minimal disruption — typically in 1–2 days." },
  { num: "04", title: "Start Saving", desc: "Your system goes live, you start generating clean energy and watching your bills drop." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Simple Process</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Going solar is easier than you think. We handle everything from consultation to after-sales support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="relative z-10">
                <div className="text-5xl font-black text-gray-800 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
