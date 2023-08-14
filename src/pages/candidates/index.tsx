"use client"

import CandidateCard from "@/components/CandidateCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { candidates } from "@/data/candidates";
import '../../app/globals.css';

const Candidates = () => {

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>
                <Navbar />
                <Sidebar />
                <div className=" m-4">
                    <h1 className=" text-4xl font-bold">Candidates</h1>
                </div>

                <section className="m-4 flex flex-col sm:grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))] mt-12">
                    {candidates.map((candidate, id) => <CandidateCard key={id} candidate={candidate} />)}
                </section>
            </main>
        </ThemeProvider>
    );
}

export default Candidates;