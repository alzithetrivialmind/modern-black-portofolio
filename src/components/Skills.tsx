import { SKILLS } from '../data';
import Marquee from 'react-fast-marquee';
import { Annotation } from './Annotation';

const Skills = () => {
    return (
        <section id="skills" className="pt-24">
            <div className="mb-12 flex items-center justify-between">
                <div>
                    <p className="font-hand text-2xl text-marker">/toolbox</p>
                    <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                        Technical Arsenal
                    </h2>
                </div>
                <div className="hidden sm:block">
                    <Annotation className="text-xl">Always learning</Annotation>
                </div>
            </div>

            <div className="relative overflow-hidden py-10">
                <Marquee speed={40} gradient={false} pauseOnHover={true}>
                    {SKILLS.map((skill, index) => (
                        <div
                            key={index}
                            className="mx-4 text-3xl sm:text-5xl font-display font-bold text-ink-soft/20 hover:text-marker transition-colors cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                    {SKILLS.map((skill, index) => (
                        <div
                            key={`dup-${index}`}
                            className="mx-4 text-3xl sm:text-5xl font-display font-bold text-ink-soft/20 hover:text-marker transition-colors cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;
