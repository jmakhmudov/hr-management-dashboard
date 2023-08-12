import { ModeToggle } from "./ui/modeToggle";
import { Button } from "./ui/button";

const Navbar = () => {

    return (
        <nav className=" flex justify-between align-middle px-5 py-4">
            <h1 className=" font-bold text-2xl">Human R.</h1>
            <div className=" flex align-middle gap-5">
                <Button className=" font-bold">Create New</Button>
                <ModeToggle />
            </div>
        </nav>
    );
}

export default Navbar;