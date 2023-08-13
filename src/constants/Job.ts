export interface Job {
    title: string;
    company: string;
    location: string;
    minSalary: number;
    jobType: "Full Time" | "Part Time" | "Internship";
    experienceLevel: "Junior" | "Middle" | "Senior";
    description: string
}