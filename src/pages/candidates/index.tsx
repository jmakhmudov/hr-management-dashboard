"use client"

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import '../../app/globals.css'

const Candidates = () => {


    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>
                <Navbar />
                <Sidebar />
                <div className=" m-4">
                    <h1 className=" text-2xl font-bold">Candidates</h1>
                </div>
            </main>
        </ThemeProvider>
    );
}

export default Candidates;