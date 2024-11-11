"use client";

import MemberInfo from "@/components/Member/MemberInfo";
import TransactionPanel from "@/components/Member/TransactionPanel";
import TransferButton from "@/components/Member/TransferButton";
import { useEffect } from "react";

export default function Member() {

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/signin';
        }
    }, []);

    return (
        <div className="relative h-full w-full flex flex-col items-center justify-center gap-4">
            <MemberInfo />
            <TransferButton />
            <TransactionPanel />
        </div>
    );
}