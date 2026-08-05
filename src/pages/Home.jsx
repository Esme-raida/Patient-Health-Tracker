import { Link } from "react-router-dom"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { Activity, Brain, ClipboardList, ClockIcon, HeartIcon, Mail, Phone, LocateIcon, Heart } from "lucide-react"
import { DocumentTextIcon, SparklesIcon, ShieldCheckIcon, DevicePhoneMobileIcon, UserGroupIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import bgImage from "../assets/modern-healthcare-monitoring-dashboard-with-doctor.jpg"
import telehealth from "../assets/doctor-video-consultation-with-patient-vital-signs.jpg"
import homecare from "../assets/elderly-patient-at-home-with-wearable-health-devic.jpg"
import hospital from "../assets/hospital-icu-with-medical-monitors-and-healthcare-.jpg"
import sarahchen from "../assets/professional-healthcare-doctor-portrait.jpg"
import jamesrodriguez from "../assets/healthcare-professional-caregiver-portrait.jpg"
import priyapatel from "../assets/female-doctor-portrait.png"
import Footer from "../components/Footer";



export default function HomePage() {
    return (

        <main className="min-h-screen relative flex flex-col font-sans">
            <header className="w-full flex items-center justify-between bg-blue-100 backdrop:blur-xs px-4 fixed z-50">
                <div className="flex flex-row py-2.5 gap-2 items-center">
                    <HeartIcon className="w-11 h-11 px-2.5 bg-blue-500 text-white rounded-md hover:scale-105 hover:cursor-pointer hover:bg-blue-700" />
                    <div className="flex flex-col">
                        <h1 className="flex flex-row text-2xl font-bold">
                            CareArc
                        </h1>
                        <span className="text-black text-sm">Patient Intelligence System</span>
                    </div>
                </div>
                <Link to="/dashboard">
                    <button className="bg-blue-500 text-white text-xs py-2 px-2.5 rounded-lg flex flex-row gap-3 hover:scale-105 hover:cursor-pointer hover:bg-blue-700">
                        View Dashboard
                        <ArrowRightIcon className="w-3 h-4 " />
                    </button>
                </Link>
            </header>

            {/* HERO SECTION */}
            <section
                className="relative py-48 flex flex-col justify-center items-center text-center">
                <img
                    src={bgImage}
                    alt="Healthcare Dashboard"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                    <button className="flex flex-row items-center gap-1 bg-blue-100 text-blue-500 text-sm font-medium px-4 py-2 rounded-full">
                        <Activity className="h-3 w-3 text-blue-500" />
                        Longitudinal Patient Intelligence Platform
                    </button>
                    <div className="flex items-center justify-center">
                        <h1 className="text-4xl text-white font-bold text-center">
                            See the patient's full story over time, <br />
                            <span className="text-blue-500">
                                not just their last reading.
                            </span>
                        </h1>
                    </div>
                    <span className="text-gray-200 flex justify-center items-center">
                        CareArc turns fragmented patient data — vitals, clinical notes,
                        <br />and trends into a clear, continuous story, with <br /> AI that surfaces what matters most.
                    </span>
                    <div className="flex gap-5 font-medium text-sm">
                        <Link to="/dashboard">
                            <button className="flex flex-row items-center gap-3 bg-blue-500 text-white text-sm px-4 py-1.5 rounded-lg hover:scale-105 hover:cursor-pointer hover:bg-blue-700">
                                Try Dashboard
                                <ArrowRightIcon className="w-3 h-4 " />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


            {/*HOW IT WORKS*/}
            <section className="flex flex-col items-center justify-center gap-5 py-15 px-5 bg-gray-100">
                <header>
                    <h2 className="text-3xl font-bold">
                        How CareArc Works
                    </h2>
                </header>
                <p className="flex items-center text-center text-gray-600 mb-10">
                    A simple clinical workflow that builds a complete picture of every patient over time
                </p>
                <div className="max-w-4/5 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center" >
                        <div className="w-full shadow p-4 border border-gray-300 rounded-lg">
                            <ClipboardList className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg">1. Record Data</h3>
                            <p className="text-sm text-gray-600">
                                Clinicians log timestamped vitals and clinical notes for each patient
                            </p>
                        </div>
                        <div className="w-full shadow p-6 gap-3 border border-gray-300 rounded-lg">
                            <ArrowTrendingUpIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg">2. Track readings</h3>
                            <p className="text-sm text-gray-600">
                                CareArc builds a longitudinal timeline showing how each patient is trending over time
                            </p>
                        </div>
                        <div className="w-full shadow p-4 gap-3 border border-gray-300 rounded-lg">
                            <Brain className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg">3. Monitor & Act </h3>
                            <p className="text-sm text-gray-600">
                                Intelligent status badges, delta insights, and AI summaries surface who needs attention first
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/*POWERFUL FEATURES SECTION*/}
            <section className="flex flex-col items-center justify-center gap-5 py-15 px-5">
                <header>
                    <h2 className="text-3xl font-bold">
                        Powerful Features
                    </h2>
                </header>
                <p className="flex items-center text-center text-gray-600 mb-10">
                    Everything your clinical team needs to track patient journeys and make informed decisionsEverything you need for comprehensive remote health monitoring
                </p>

                <div className="max-w-4/5 mx-auto">

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center" >
                        <div className="w-full shadow p-4 border border-gray-300 rounded-lg">
                            <ArrowTrendingUpIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg">Longitudinal Vitals</h3>
                            <p className="text-sm text-gray-600">
                                Track heart rate, BP, SpO₂, temp, and resp rate across time with visual trends
                            </p>
                        </div>
                        <div className="w-full shadow p-4 gap-3 border border-gray-300 rounded-lg">
                            <ClockIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg mb-2">Patient Timelines</h3>
                            <p className="text-sm text-gray-600">
                                Chronological health journey merging vitals recordings and clinical notes in one view
                            </p>
                        </div>
                        <div className="w-full shadow p-4 gap-3 border border-gray-300 rounded-lg">
                            <ShieldCheckIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg mb-2">Intelligent Status</h3>
                            <p className="text-sm text-gray-600">
                                Normal ranges & delta analysis automatically derive patient status (Stable, Watch, Review)
                            </p>
                        </div>
                        <div className="w-full shadow p-4 gap-3 border border-gray-300 rounded-lg">
                            <DocumentTextIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg mb-2">Clinical Notes</h3>
                            <p className="text-sm text-gray-600">
                                Structured notes with types — observations, treatments, reviews, and handovers
                            </p>
                        </div>
                        <div className="w-full shadow p-4 gap-3 border border-gray-300 rounded-lg">
                            <UserGroupIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg mb-2">Multi-Patient Support Dashboard</h3>
                            <p className="text-sm text-gray-600">
                                See all patients at a glance, sorted by clinical priority with latest updates
                            </p>
                        </div>
                        <div className="w-full shadow p-4 gap-3 border border-gray-300 rounded-lg">
                            <SparklesIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg mb-2">AI Clinical Summaries</h3>
                            <p className="text-sm text-gray-600">
                                AI-powered synthesis combines vitals, deltas, and notes into actionable handovers
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/*WHO USES  CAREARC*/}
            <section className="flex flex-col items-center justify-center gap-5 py-15 px-5 bg-gray-100">
                <header>
                    <h2 className="text-3xl font-bold">
                        Who Uses  CareArc ?
                    </h2>
                </header>
                <dl className="flex items-center text-center text-gray-600 mb-10">
                    Trusted by healthcare providers worldwide
                </dl>

                <div className="max-w-4/5 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center" >
                        <div className="w-full h-full shadow p-4 border border-gray-300 rounded-lg">
                            <img
                                src={hospital}
                                alt="Home Care Providers"
                                className="w-2xl h-96 lg:h-64 mb-5 rounded-md"
                            />
                            <UserGroupIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg">Hospitals & Clinics</h3>
                            <p className="text-sm text-gray-600">
                                Monitor ICU patients and reduce nurse workload with automated vital tracking
                            </p>
                        </div>
                        <div className="w-full h-full shadow p-4 gap-3 border border-gray-300 rounded-lg">
                            <img
                                src={homecare}
                                alt="Home Care Providers"
                                className="w-2xl h-96 lg:h-64  mb-5 rounded-md"
                            />
                            <Heart className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg mb-2">Home Care Providers</h3>
                            <p className="text-sm text-gray-600">
                                Enable elderly patients to age in place safely with remote monitoring
                            </p>
                        </div>
                        <div className="w-full h-full shadow p-4 border border-gray-300 rounded-lg">
                            <img
                                src={telehealth}
                                alt="TeleHealth Platforms"
                                className="w-2xl h-96 lg:h-64 mb-5 rounded-md"
                            />
                            <DevicePhoneMobileIcon className="h-8 w-8 mb-3 text-blue-500" />
                            <h3 className="font-semibold text-lg mb-2">Telehealth Platforms</h3>
                            <p className="text-sm text-gray-600">
                                Integrate real-time virtals into virtual consultations for better diagnosis
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/*LOVED BY HEALTHCARE PROFESSIONALS*/}

            <section className="flex flex-col items-center justify-center gap-5 py-15 px-5">
                <header>
                    <h2 className="text-3xl font-bold mb-10">
                        Loved by Healthcare Professionals
                    </h2>
                </header>

                <div className="w-[80%]">

                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center" >
                        <div className="w-full shadow px-5 pt-10 pb-8 border border-gray-300 rounded-lg">
                            <p className="text-sm text-gray-600 italic pb-5">
                                " CareArc reduced our alert response time by 60%.
                                <br />
                                Our patients are safer."
                            </p>
                            <div className="flex gap-4">
                                <img
                                    src={sarahchen}
                                    alt="Dr. Sarah Chen"
                                    className="w-10 rounded-full"
                                />
                                <div className="flex flex-col">
                                    <h3 className="font-bold">Dr. Sarah Chen</h3>
                                    <dl className="text-gray-600 text-sm">ICU Director, Metro Hospital</dl>
                                </div>
                            </div>
                        </div>
                        <div className="w-full shadow px-5 pt-10 pb-8 border border-gray-300 rounded-lg">
                            <p className="text-sm text-gray-600 italic pb-5">
                                "Our elderly patients feel more independent, and
                                <br />
                                we have peace of mind."
                            </p>
                            <div className="flex gap-4">
                                <img
                                    src={jamesrodriguez}
                                    alt="James Rodriguez"
                                    className="w-10 rounded-full"
                                />
                                <div className="flex flex-col">
                                    <h3 className="font-bold">James Rodriguez</h3>
                                    <dl className="text-gray-600 text-sm">Home Care Manager</dl>
                                </div>
                            </div>
                        </div>
                        <div className="w-full shadow px-5 pt-10 pb-8 border border-gray-300 rounded-lg">
                            <p className="text-sm text-gray-600 italic pb-5">
                                "The real-time vitals integration transformed our
                                <br />
                                virtual consultations."
                            </p>
                            <div className="flex gap-4">
                                <img
                                    src={priyapatel}
                                    alt="Dr. Priya Patel"
                                    className="w-10 rounded-full"
                                />
                                <div className="flex flex-col">
                                    <h3 className="font-bold">Dr. Priya Patel</h3>
                                    <dl className="text-gray-600 text-sm">Telehealth Clinic Owner</dl>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <article className="sm: max-w-4/5 lg: w-full bg-blue-100 flex flex-col items-center text-center gap-5 p-10 mt-5 border border-blue-300 rounded-lg">
                    <h3 className="text-3xl font-bold">Ready to Transform Patient Care?</h3>
                    <dl className="text-gray-500">
                        Experience real-time health monitoring with CareArc Start montoring today and see the
                        <br />difference.
                    </dl>
                    <button className="flex items-center  justify-center gap-2 px-2 py-2 border border-blue-700 bg-blue-500 rounded-lg text-white">
                        Get Started
                        <ArrowRightIcon className="w-3 h-3 mt-0.5" />
                    </button>
                </article>
            </section>

            {/*GET IN TOUCH*/}

            <section className="bg-gray-100 flex flex-col items-center px-4 sm:px-8 lg:px-10 w-full">
                <div className="flex flex-col items-center gap-3 m-10 mb-10">
                    <h3 className="font-bold text-3xl">Get In Touch</h3>
                    <dl className="text-gray-500">Have questions? We'd love to hear from you. Our team is ready to help.</dl>
                </div>
                <div className="flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:gap-20">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-3 items-center">
                            <Mail className="w-10 h-10 px-2 rounded-full bg-blue-200 text-blue-500" />
                            <div className="flex flex-col">
                                <h3 className="font-semibold">Email</h3>
                                <dl className="text-gray-500">support@CareArc.health</dl>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-3 items-center">
                                <Phone className="w-10 h-10 px-2 rounded-full bg-blue-200  text-blue-500" />
                                <div className="flex flex-col">
                                    <h3 className="font-semibold">Phone</h3>
                                    <dl className="text-gray-500">+1 (555) 123-4567</dl>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row gap-3 items-center">
                                <LocateIcon className="w-10 h-10 px-2 rounded-full bg-blue-200  text-blue-500" />
                                <div className="flex flex-col">
                                    <h3 className="font-semibold">Office</h3>
                                    <dl className="text-gray-500">San Francisco, CA 94102.</dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 mb-10 w-full lg:w-auto">
                        <input type="text" placeholder="Your Name"
                            className="w-full lg:w-80 border border-gray-200 bg-white rounded-lg px-5 py-2 outline-0" />
                        <input type="email" placeholder="Your Email"
                            className="w-full lg:w-80 border border-gray-200 bg-white rounded-lg px-5 py-2 outline-0" />
                        <textarea rows="5" placeholder="Your Message"
                            className="w-full lg:w-80 border border-gray-200 bg-white rounded-lg px-5 py-2 outline-0" />
                        <button className="bg-blue-500 text-white w-full lg:w-80 rounded-lg px-5 py-2 text-center">Send Message</button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>

    )
}

