import { Mail, Linkedin, Github } from 'lucide-react';
import { PROFILE } from '../data';
import { Annotation, Arrow } from './Annotation';

const Contact = () => {
    return (
        <section id="contact" className="relative pt-32 pb-20 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <p className="font-hand text-2xl text-marker">/contact</p>
                        <h2 className="mt-2 font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-ink">
                            Let's build <br />
                            <span className="text-ink-soft italic">something great.</span>
                        </h2>
                    </div>
                    <div className="hidden lg:block -rotate-12 translate-y-8">
                        <Annotation className="text-3xl">Shoot me a mail!</Annotation>
                        <Arrow rotate={120} className="mt-4 ml-12" />
                    </div>
                </div>

                <div className="mt-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <a
                        href={`mailto:${PROFILE.social.email}`}
                        className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors duration-200 hover:bg-accent"
                    >
                        <div className="mb-4 text-ink-soft group-hover:text-marker transition-colors">
                            <Mail size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-display text-xl font-medium text-ink">Email</h3>
                        <p className="mt-1 text-sm text-ink-soft truncate">{PROFILE.social.email}</p>
                    </a>

                    {PROFILE.social.linkedin && (
                        <a
                            href={PROFILE.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors duration-200 hover:bg-accent"
                        >
                            <div className="mb-4 text-ink-soft group-hover:text-marker transition-colors">
                                <Linkedin size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-display text-xl font-medium text-ink">LinkedIn</h3>
                            <p className="mt-1 text-sm text-ink-soft truncate">Professional Profile</p>
                        </a>
                    )}

                    {PROFILE.social.github && (
                        <a
                            href={PROFILE.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors duration-200 hover:bg-accent"
                        >
                            <div className="mb-4 text-ink-soft group-hover:text-marker transition-colors">
                                <Github size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-display text-xl font-medium text-ink">GitHub</h3>
                            <p className="mt-1 text-sm text-ink-soft truncate">Code Repositories</p>
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
