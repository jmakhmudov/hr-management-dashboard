"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const Alert = () => {

    return (
        <Dialog defaultOpen>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className=" text-2xl font-bold">Demo Project</DialogTitle>
                </DialogHeader>
                <section>
                    <p>
                        This is a demo version of the Job Board project. This is a client only demo which means all data on the page is stored locally instead of accessing an API but other than that it is identical in every way.
                    </p>
                    <br />
                    <p className=" opacity-40">Website is still under development!</p>
                </section>
            </DialogContent>
        </Dialog>
    );
}

export default Alert;