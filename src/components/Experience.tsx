import { EXPERIENCE } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="pt-24">
            <div className="mb-12">
                <p className="font-hand text-2xl text-marker">/experience</p>
                <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    Professional Journey
                </h2>
            </div>

            <div className="space-y-12 text-ink">
                {EXPERIENCE.map((job) => (
                    <div key={job.id} className="group">
                        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft mb-4">
                            {job.company}
                        </h3>
                        <div className="grid gap-2 sm:grid-cols-[12rem_1fr] text-lg leading-relaxed">
                            <span className="font-hand text-xl text-marker">{job.period}</span>
                            <div>
                                <h4 className="font-semibold text-ink group-hover:text-marker transition-colors">
                                    {job.role}
                                </h4>
                                <div className="mt-2 text-ink-soft text-base leading-relaxed space-y-2">
                                    {job.description.split('\n').filter(l => l.trim()).map((line, i) => (
                                        <p key={i} className="flex gap-2">
                                            <span className="text-marker select-none">→</span>
                                            {line.startsWith('-') ? line.substring(1).trim() : line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
