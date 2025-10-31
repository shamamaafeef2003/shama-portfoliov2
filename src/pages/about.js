import AnimatedText from '@/components/AnimatedText';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/developer.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills'; // Added missing import
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect'; 

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value); 
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Pathan Afnan Khan | About Page</title>
        <meta name="description" content="Learn more about Pathan Afnan Khan, a Data Scientist and the Co-Founder Gwen AI." />
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                Hi, I'm Pathan Afnan Khan, a Data Scientist dedicated to building intelligent, data-driven systems that connect innovation with real-world impact. With over 3.5 years of experience in machine learning, deep learning, NLP, computer vision, large language models (LLMs), generative AI, agentic AI, and MLOps, I specialize in designing scalable, production-grade AI solutions that empower smarter decisions and automation.
              </p>
              <p className='my-4 font-medium'>
                I see data science as more than numbers — it’s a blend of creativity, logic, and storytelling, where every dataset reveals opportunities to solve problems and shape the future.
              </p>
              <p className='font-medium'>
                From developing LLM-powered products and agentic AI workflows to deploying end-to-end machine learning pipelines on AWS, Azure, and GCP, I combine innovation with engineering precision. My work leverages tools like Docker, Kubernetes, and CI/CD to ensure seamless deployment, reliability, and scalability in production environments.
              </p>
              <p className='font-medium'>
                I’m driven by a vision to create next-generation AI systems that not only learn and adapt but also think, collaborate, and deliver meaningful change across industries.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-light xl:col-span-4 md:order-1 md:col-span-8'>
              <Image src={profilePic} alt="Afnan Khan" className='w-full h-auto rounded-2xl' 
              priority
              sizes="(max-width: 760px) 100vw,
              (max-width: 1100px) 50vw,
              33vw"
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center mb-4 xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={56} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  projects completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3.5} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default About;