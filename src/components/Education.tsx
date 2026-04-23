import { EDUCATION } from '../data';

const Education = () => {
    return (
        <section id="education" className="pt-24">
            <div className="mb-12">
                <p className="font-hand text-2xl text-marker">/education</p>
                <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    Academic Foundation
                </h2>
            </div>

            <div className="space-y-12 text-ink">
                {EDUCATION.map((edu) => (
                    <div key={edu.id} className="group">
                        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft mb-4">
                            {edu.school}
                        </h3>
                        <div className="grid gap-2 sm:grid-cols-[12rem_1fr] text-lg leading-relaxed">
                            <span className="font-hand text-xl text-marker">{edu.period}</span>
                            <div>
                                <h4 className="font-semibold text-ink group-hover:text-marker transition-colors">
                                    {edu.degree}
                                </h4>
                                {edu.grade && (
                                    <p className="mt-2 text-ink-soft text-base">
                                        Result: {edu.grade}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
