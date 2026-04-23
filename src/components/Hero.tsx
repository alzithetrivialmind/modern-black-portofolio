import { Annotation, Arrow } from './Annotation';
import { PROFILE } from '../data';

const Hero = () => {
    return (
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
            {/* Availability top-right */}
            <div className="absolute top-6 right-6 fade-up hidden sm:block">
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-marker" />
                    Available for new projects · 2026
                </p>
            </div>

            {/* Annotation top-left (Moved right to point to name) */}
            <div className="pointer-events-none absolute left-20 top-4 hidden -rotate-6 sm:block">
                <Annotation>Hello! I am a<br />Developer & Designer ✦</Annotation>
                <Arrow className="ml-10 mt-1" rotate={140} />
            </div>

            <div className="fade-up pt-10">
                <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-[88px]">
                    {PROFILE.name.split(' ')[0]},
                    <br />
                    <span className="text-ink-soft">{PROFILE.title.split('|')[0]} —</span>
                    <br />
                    building premium web experiences.
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                    {PROFILE.about} I focus on bridging the gap between <span className="text-ink underline decoration-marker decoration-2 underline-offset-4">design and code</span> to create meaningful digital products.
                </p>

                <div className="relative mt-12 flex flex-wrap items-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                    >
                        See projects →
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3 text-sm font-medium text-ink transition hover:bg-accent"
                    >
                        Get in touch
                    </a>

                    {/* Specializing annotation (Moved left) */}
                    <div className="pointer-events-none hidden sm:block absolute right-[25%] -bottom-16 rotate-3">
                        <Arrow rotate={-30} />
                        <Annotation className="-mt-2 block">
                            Specializing in 
                            <br />
                            Modern Web Tech
                        </Annotation>
                    </div>
                </div>
            </div>

            {/* Keep scrolling cue */}
            <div className="mt-32 flex items-center gap-3 text-ink-soft">
                <span className="h-px w-10 bg-ink-soft/40" />
                <span className="font-hand text-2xl text-marker">Keep scrolling</span>
                <span className="text-lg">↓</span>
            </div>
        </section>
    );
};

export default Hero;
