import { Button } from "./ui/button";
import { BackpackIcon, PersonIcon, StopwatchIcon } from '@radix-ui/react-icons'
import Link from "next/link";

const Sidebar = () => {
    return (
        <section className=" w-60 relative p-4">
            <Button className=" w-3/4" variant="ghost" asChild>
                <Link href="/jobs">
                    <BackpackIcon className="mr-2 h-4" /> Jobs
                </Link>
            </Button>

            <Button className=" w-3/4" variant="ghost" asChild>
                <Link href="/candidate">
                    <PersonIcon className="mr-2 h-4" /> Candidates
                </Link>
            </Button>

            <Button className=" w-3/4" variant="ghost" asChild>
                <Link href="/tasks">
                    <StopwatchIcon className="mr-2 h-4" />Tasks
                </Link>
            </Button>
        </section>
    );
}

export default Sidebar;