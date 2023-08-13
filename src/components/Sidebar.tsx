import { Button } from "./ui/button";
import { BackpackIcon, PersonIcon, StopwatchIcon } from '@radix-ui/react-icons'
import Link from "next/link";

const Sidebar = () => {
    return (
        <section className="relative p-4 flex">
            <Button className="" variant="ghost" asChild>
                <Link href="/jobs">
                    <BackpackIcon className="mr-2 h-4" /> Job Listings
                </Link>
            </Button>

            <Button className="" variant="ghost" asChild>
                <Link href="/candidates">
                    <PersonIcon className="mr-2 h-4" /> Candidates
                </Link>
            </Button>

            <Button className="" variant="ghost" asChild>
                <Link href="/tasks">
                    <StopwatchIcon className="mr-2 h-4" />Task Board
                </Link>
            </Button>
        </section>
    );
}

export default Sidebar;