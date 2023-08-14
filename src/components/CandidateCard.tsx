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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


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
                <Button>View More</Button>
            </CardFooter>
        </Card>
    )
}


export default CandidateCard;