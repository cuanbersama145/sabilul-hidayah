"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sudahMasuk } from "@/lib/admin-session";

export function AdminGate({ children }: { children: React.ReactNode}) {
    const router = useRouter();
    const [siap, setSiap] = useState(false);
    
    useEffect(() => {
        if (!sudahMasuk()) {
            router.replace("/admin/login/");
            return;
        }
         setSiap(true);   
    }, [router]);

    if (!siap) {
        return <p className="p-10 text-sm text-muted">Memeriksa sesi...</p> 
    }

    return <>{children}</>;
}