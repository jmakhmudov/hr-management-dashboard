export interface Candidate {
    title: string;
    name: string;
    location: string;
    minSalary: number;
    jobType: "Full Time" | "Part Time" | "Internship";
    experienceLevel: "Junior" | "Middle" | "Senior";
    description: string;
    shortDescription: string;
}