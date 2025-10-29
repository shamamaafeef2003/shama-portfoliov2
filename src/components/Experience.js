import React, { useRef } from 'react';
import { motion,} from 'framer-motion';
import {useScroll} from 'framer-motion';
import { spring } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-primary dark:text-primaryDark capitalize'
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full mt-2 md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-8 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    "
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Data Scientist"
                        company="GWEN AI"
                        companyLink="https://Gwen.ai.com"
                        time="MARCH 2023-Present"
                        address="Aurangabad, Mh, India"
                        work="Worked as a Data Scientist at Gwen AI, where I led the development of AI-powered business intelligence platforms, virtual assistants, and automation systems designed for diverse enterprise applications.
Spearheaded the creation and deployment of fraud detection, object recognition, and LLM-driven conversational systems using frameworks like PyTorch and TensorFlow, optimizing data workflows and model efficiency.
Engineered scalable cloud-based pipelines and production-grade deployments leveraging AWS, Docker, and Kubernetes, ensuring high reliability and real-time performance across products.
Collaborated on integrating REST APIs and microservices architecture to deliver seamless interoperability and low-latency model inference.
Focused on transforming raw data into actionable intelligence, improving decision-making speed, operational efficiency, and measurable business ROI through advanced AI and data-driven solutions."
                    />
                    <Details
                        position="Agentic AI Developer / LLM Fine Tuner  Freelancer"
                        company="Mindrift"
                        companyLink="https://mindrift.com"
                        time="Parallel Freelance Work | "
                        address="Remote Work"
                        work=""
                    />

                
                    <Details
                        position="Data Scientist Intern"
                        company="Boston Consulting Group (BCG)"
                        companyLink="https://www.bcg.com/"
                        time="DECEMBER 2022- FEBRUARY 2023"
                        address="Remote work"
                        work="Worked as a Data Science Intern at Boston Consulting Group (BCG), India, where I contributed to building AI-driven forecasting and analytics frameworks that supported strategic decision-making for global clients.

Designed and implemented time-series forecasting models (LSTM, RNN) to predict financial trends and key performance metrics, improving forecast accuracy by 20% and enhancing business planning precision.

Automated interactive KPI dashboards using Power BI and Tableau, reducing manual reporting time by 60% and enabling real-time performance tracking.

Partnered with cross-functional business and analytics teams to translate complex datasets into actionable insights, driving data-informed decisions that optimized efficiency and ROI."
                    />
                   
                    <Details
                        position="Artificial Intelligence Intern"
                        company="Cognizant"
                        companyLink="https://www.cognizant.com"
                        time="AUGUST 2022- NOVEMBER 2022"
                        address="Remote work"
                        work="During my internship at Cognizant, I worked on optimizing large-scale machine learning pipelines to improve model efficiency and scalability. By applying advanced techniques such as model pruning and hyperparameter tuning, I successfully reduced inference latency by 35%.

I also built and deployed Transformer-based NLP models (BERT, DistilBERT) that automated text classification and significantly improved workflow accuracy. Beyond model development, I contributed to automating data reporting and validation processes, enabling smoother integration of AI solutions within enterprise systems.

This experience strengthened my expertise in MLOps, NLP, and scalable AI development, while also enhancing my ability to collaborate with cross-functional teams to translate complex data challenges into impactful business solutions."
                    />
                    <Details
                        position="Data Analytics Intern"
                        company="PwC"
                        companyLink="https://www.PWC.com"
                        time="MARCH 2022-JUNE 2022"
                        address="Remote work"
                        work="At PwC, I focused on transforming raw financial data into strategic insights through AI-powered risk modeling and predictive analytics. I designed and validated advanced risk models that improved forecast accuracy and enhanced decision-making for financial stakeholders.

To support real-time monitoring, I built interactive Tableau dashboards that visualized key metrics, trends, and anomalies, making complex data easily accessible for executives and clients.

This experience deepened my expertise in data-driven financial analytics, dashboard engineering, and applied machine learning, while giving me hands-on exposure to solving real-world business challenges in a global consulting environment."
                    />
                    <Details
                        position="Data Scientist Freelancer"
                        company="TechnoHacks"
                        companyLink="https://technohacks.com"
                        time="Parallel Freelance Work | 2021-Present"
                        address="Nashik, Mh, India"
                        work="At Techno Hacks, I engineered real-time fraud detection systems using XGBoost and advanced anomaly detection techniques, achieving over 95% accuracy in identifying fraudulent transactions.

I streamlined ETL workflows with SQL and Python, enhancing data pipeline efficiency and improving operational throughput by 40%.

Additionally, I developed interactive BI dashboards for financial anomaly tracking, enabling faster insights and data-driven decision-making across business units.

This internship strengthened my hands-on expertise in machine learning, data engineering, and analytics automation, while honing my ability to build production-ready data systems that deliver tangible business impact."
                    />
                    
                    {/* Repeat Details component for other entries with different data */}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
