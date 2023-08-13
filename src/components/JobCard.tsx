import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Job } from "@/constants/Job";
import { Badge } from "@/components/ui/badge";
import { LightningBoltIcon, CalendarIcon, BackpackIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { formatSalary } from "@/helpers/formatSalary";

interface JobProps {
    job: Job;
}

const JobCard: React.FC<JobProps> = ({ job }) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle className=" text-2xl font-bold -mb-2">{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
                <CardDescription>{job.location}</CardDescription>

                <div className=" flex gap-2">
                    <Badge variant="secondary">
                        <LightningBoltIcon className="mr-1 h-3" /> {formatSalary(job.minSalary)}
                    </Badge>
                    <Badge variant="secondary">
                        <CalendarIcon className="mr-1 h-3" /> {job.jobType}
                    </Badge>
                    <Badge variant="secondary">
                        <BackpackIcon className="mr-1 h-3" /> {job.experienceLevel}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p>{job.description}</p>
            </CardContent>
            <CardFooter className=" flex justify-end">
                <Button>View More</Button>
            </CardFooter>
        </Card>
    );
}

export default JobCard;