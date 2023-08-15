import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Candidate } from "@/constants/Candidate";
import { formatSalary } from "@/helpers/formatSalary";
import { BackpackIcon, CalendarIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


interface CandidateProps {
    candidate: Candidate
}


const CandidateCard: React.FC<CandidateProps> = ({ candidate }) => {

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <div className=" flex justify-between align-middle">
                    <CardTitle className=" text-2xl font-bold">{candidate.title}</CardTitle>
                    <Avatar>
                        <AvatarFallback>{`${candidate.name.split(' ').map((word) => word.charAt(0).toUpperCase()).join('')}`}</AvatarFallback>
                    </Avatar>
                </div>
                <CardDescription>{candidate.name}</CardDescription>
                <CardDescription>{candidate.location}</CardDescription>

                <div className=" flex gap-2">
                    <Badge variant="secondary">
                        <LightningBoltIcon className="mr-1 h-3" /> {formatSalary(candidate.minSalary)}
                    </Badge>
                    <Badge variant="secondary">
                        <CalendarIcon className="mr-1 h-3" /> {candidate.jobType}
                    </Badge>
                    <Badge variant="secondary">
                        <BackpackIcon className="mr-1 h-3" /> {candidate.experienceLevel}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p>{candidate.shortDescription}</p>
            </CardContent>
            <CardFooter className=" p-6 pt-0 flex gap-2 items-stretch justify-end">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>View More</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className=" text-2xl font-bold">{candidate.title}</DialogTitle>
                            <DialogDescription>{candidate.name}</DialogDescription>
                            <DialogDescription>{candidate.location}</DialogDescription>
                            <DialogDescription>
                                <div className=" flex gap-2">
                                    <Badge variant="secondary">
                                        <LightningBoltIcon className="mr-1 h-3" /> {formatSalary(candidate.minSalary)}
                                    </Badge>
                                    <Badge variant="secondary">
                                        <CalendarIcon className="mr-1 h-3" /> {candidate.jobType}
                                    </Badge>
                                    <Badge variant="secondary">
                                        <BackpackIcon className="mr-1 h-3" /> {candidate.experienceLevel}
                                    </Badge>
                                </div>
                            </DialogDescription>
                        </DialogHeader>

                        <section>
                            <div>{candidate.shortDescription}</div>
                            <div>{candidate.description}</div>
                        </section>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    )
}


export default CandidateCard;