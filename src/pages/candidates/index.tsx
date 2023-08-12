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
                <h1>Candidates</h1>
            </main>
        </ThemeProvider>
    );
}

export default Candidates;