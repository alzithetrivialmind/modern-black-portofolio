import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.5 } }
};

const HowIWork = () => {
    return (
        <section id="philosophy" className="py-12 border-t border-border/50 overflow-hidden">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
            >
                <motion.p variants={itemVariants} className="font-hand text-2xl text-marker mb-4">How I Work</motion.p>
                <motion.h2 variants={itemVariants} className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-8">
                    Utility Over Everything.
                </motion.h2>
                
                <div className="space-y-8">
                    <motion.div variants={itemVariants} className="relative">
                        <div className="absolute -left-8 top-0 h-full w-px bg-marker/30 hidden sm:block" />
                        <p className="text-xl sm:text-2xl leading-relaxed text-ink italic">
                            "I am an AI Orchestrator. I don't write every line of code from scratch; I leverage AI to build, review, and integrate faster. If you're looking for someone who does things 'the old way' just for the sake of it, I'm probably not the right fit."
                        </p>
                    </motion.div>

                    <div className="grid gap-8 sm:grid-cols-2">
                        <motion.div variants={itemVariants}>
                            <h3 className="font-display text-lg font-bold uppercase tracking-widest text-ink-soft mb-4">The Methodology</h3>
                            <p className="text-lg text-ink-soft leading-relaxed">
                                I use Game Theory and market psychology (from my Marketing M.S.) to design systems that align with user behavior, not just technical requirements.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="font-display text-lg font-bold uppercase tracking-widest text-ink-soft mb-4">The Goal</h3>
                            <p className="text-lg text-ink-soft leading-relaxed">
                                Long-term maintainability. I build systems that stay robust and documented long after the initial setup is complete.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HowIWork;
