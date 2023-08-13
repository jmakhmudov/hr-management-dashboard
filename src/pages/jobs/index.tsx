"use client"

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import '../../app/globals.css'
import JobCard from "./JobCard";
import { jobListings } from "@/data/jobListings";

const Jobs: React.FC = () => {

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>
                <Navbar />
                <Sidebar />
                <div className=" m-4">
                    <h1 className=" text-4xl font-bold">Job Listings</h1>
                </div>

                <section className="m-4 flex flex-col sm:grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))] mt-12">
                    {jobListings.map((job, id) => <JobCard key={id} job={job} />)}
                </section>
            </main>
        </ThemeProvider>

    );
}

export default Jobs;