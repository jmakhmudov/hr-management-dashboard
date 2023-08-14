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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";


interface JobProps {
    job: Job;
}

const JobCard: React.FC<JobProps> = ({ job }) => {

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle className=" text-2xl font-bold">{job.title}</CardTitle>
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
                <p>{job.shortDescription}</p>
            </CardContent>
            <CardFooter className=" p-6 pt-0 flex gap-2 items-stretch justify-end">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>View More</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className=" text-2xl font-bold">{job.title}</DialogTitle>
                            <DialogDescription>{job.company}</DialogDescription>
                            <DialogDescription>{job.location}</DialogDescription>
                            <DialogDescription>
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
                            </DialogDescription>
                        </DialogHeader>

                        <section>
                            <div>{job.shortDescription}</div>
                            <div>{job.description}</div>
                        </section>

                        <DialogFooter>
                            <Button>
                                <Link href={job.website} target="_blank">
                                    Apply on website <ArrowTopRightIcon className=" inline"/>
                                </Link>
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </CardFooter>
        </Card>
    );
}

export default JobCard;