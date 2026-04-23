import { motion, type Variants } from 'framer-motion';
import { Annotation, Arrow } from './Annotation';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { type: "tween", ease: "easeOut", duration: 0.5 }
    }
};

const floatVariants: Variants = {
    float: {
        y: [-5, 5, -5],
        transition: { duration: 6, ease: "easeInOut" }
    }
};

const Hero = () => {
    return (
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-44">
            {/* Availability top-right */}
            <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-6 right-6 hidden md:block"
            >
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-marker" />
                    Available for new projects · 2026
                </p>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-[1fr_400px] items-start">
                <motion.div 
                    variants={containerVariants} 
                    initial="hidden" 
                    animate="visible" 
                    className="relative"
                >
                    {/* Annotation top-left */}
                    <motion.div variants={itemVariants} className="pointer-events-none absolute -left- -right-15 -top-24 hidden xl:block -rotate-6 z-10">
                        <Annotation>Hello! I am a<br />Systems Architect & AI Orchestrator ✦</Annotation>
                        <Arrow className="ml-12 mt-1" rotate={140} />
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-6xl lg:text-[88px] font-semibold leading-[0.95] tracking-tight text-ink text-left">
                        Building Resilient Systems for <br />
                        <span className="text-ink-soft">High-Stakes Operations.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl text-left">
                        I architect IT infrastructure, implement ERP systems that actually work, and secure digital assets. <span className="text-ink underline decoration-marker decoration-2 underline-offset-4">No fluff, just utility.</span>
                    </motion.p>

                    <motion.div variants={itemVariants} className="relative mt-12 flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 group"
                        >
                            See projects <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="inline-block">→</motion.span>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3 text-sm font-medium text-ink transition hover:bg-accent"
                        >
                            Get in touch
                        </a>

                        {/* Specializing annotation */}
                        <motion.div variants={itemVariants} className="pointer-events-none hidden xl:block absolute -left-25 -bottom-27 rotate-3 z-10">
                            <Arrow rotate={-70} />
                            <Annotation className="-mt-0 block">
                                Built for Utility,
                                <br />
                                not just Vanity
                            </Annotation>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Profile Image Column */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "tween", ease: "easeOut" }}
                    className="hidden md:block relative pt-8 lg:pt-0"
                >
                    <motion.div 
                        variants={floatVariants}
                        animate="float"
                        className="aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-neutral-100 dark:bg-neutral-800 rotate-2 border-8 border-card shadow-xl transition-transform duration-300 hover:rotate-0"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Alzi"
                            className="h-full w-full object-cover grayscale transition-[filter] duration-300 hover:grayscale-0"
                        />
                    </motion.div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border-2 border-marker/20 -z-10" />
                </motion.div>
            </div>

            {/* Keep scrolling cue */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 1 }}
                className="mt-50 flex items-center gap-3 text-ink-soft"
            >
                <div className="h-px w-10 bg-ink-soft/40 relative overflow-hidden">
                    <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, type: "tween", ease: "easeOut" }}
                        className="absolute inset-0 bg-ink-soft"
                    />
                </div>
                <span className="font-hand text-2xl text-marker">Keep scrolling</span>
                <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="text-lg inline-block">↓</motion.span>
            </motion.div>
        </section>
    );
};

export default Hero;
