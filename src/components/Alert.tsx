"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const Alert = () => {

    return (
        <Dialog defaultOpen>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className=" text-2xl font-bold">Header</DialogTitle>
                </DialogHeader>
                <section>
                    description
                </section>
            </DialogContent>
        </Dialog>
    );
}

export default Alert;