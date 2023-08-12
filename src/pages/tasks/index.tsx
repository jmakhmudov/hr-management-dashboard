"use client"

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import '../../app/globals.css'

const Tasks = () => {


    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>
                <Navbar />
                <Sidebar />
                <h1>Tasks</h1>
            </main>
        </ThemeProvider>
    );
}

export default Tasks;