"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="w-full bg-background pt-32 pb-12 lg:pt-40">
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-20">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-6xl text-balance font-medium tracking-tight text-foreground max-w-4xl leading-[1.1]"
                >
                    The fastest way to build{" "}
                    <span className="text-primary">
                        dynamic forms
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                    className="text-base md:text-lg text-muted-foreground text-balance max-w-xl mt-4 leading-relaxed"
                >
                    Drag and drop builder, intelligent conditional logic, and simple file uploads
                </motion.p>

                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
                    className="mt-8 space-x-4"
                >
                    <Link href="/forms">
                        <Button>
                            View Forms
                        </Button>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="w-full max-w-5xl mx-auto mt-12 px-4 lg:px-0"
            >
                <div className="relative z-10 mx-auto max-w-7xl rounded-2xl md:rounded-[24px] border border-border/60 bg-white/40 p-1 lg:p-2 backdrop-blur-lg mt-10">
                    <div className="hidden lg:block absolute top-1/4 left-1/2 -z-10 bg-primary/60 w-4/5 -translate-x-1/2 h-1/3 -translate-y-1/2 inset-0 opacity-40 blur-[8rem]">
                    </div>
                    <div className="rounded-lg md:rounded-[16px] border border-border/60 bg-white aspect-video relative overflow-hidden">
                        <Image
                            src="/images/hero.png"
                            alt="Formix Dashboard"
                            width={2894}
                            height={1792}
                            quality={75}
                            className="rounded-[10px] md:rounded-[16px] block object-cover object-top w-full h-full"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
