import { ModeToggle } from "./ui/modeToggle";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {

    return (
        <nav className=" flex justify-between align-middle px-5 py-4">
            <Link href="/" className=" font-bold text-2xl text-blue-500">Human R.</Link>
            <div className=" flex align-middle gap-5">
                <Button className=" font-bold">Create New</Button>
                <ModeToggle />
            </div>
        </nav>
    );
}

export default Navbar;