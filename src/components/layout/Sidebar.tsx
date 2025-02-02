import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

/** { Composition Pattern } */

export type SidebarGenericProps<T = any> = {
    children: React.ReactNode
    className?: string
} & T;

export function Sidebar({ className, children }: SidebarGenericProps) {
    return (
        /** Essa utils cn que o Shadcn disponibilza para nós, serve para mesclar classes. */
        <aside className={cn(['border-r border-border flex flex-col space-y-6', className])}>
            {children}
        </aside>
    );
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
    return (
        <header className={cn(['px-4 py-2 border-b border-border', className])}>
            {children}
        </header>
    );
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
    return (
        <main className={cn(['px-3', className])}>
            {children}
        </main>
    );
}

export function SidebarNav({ className, children }: SidebarGenericProps) {
    return (
        <nav className={cn(['', className])}>
            {children}
        </nav>
    );
}

export function SidebarNavHeader({ className, children }: SidebarGenericProps) {
    return (
        <header className={cn(['', className])}>
            {children}
        </header>
    );
}

export function SidebarNavHeaderTitle({ className, children }: SidebarGenericProps) {
    return (
        <div className={cn(['text-xs uppercase text-muted-foreground ml-3', className])}>
            {children}
        </div>
    );
}

export function SidebarNavMain({ className, children }: SidebarGenericProps) {
    return (
        <main className={cn(['flex flex-col', className])}>
            {children}
        </main>
    );
}

export type SidebarNavLinkProps = {
    href: string
    active?: boolean
}

export function SidebarNavLink({ className, children, href, active }: SidebarGenericProps<SidebarNavLinkProps>) {
    return (
        <Link href={href} className={cn([
            'flex items-center text-sm px-3 py-2 rounded-md',
            active && 'bg-secondary',
            className
        ])}>
            {children}
        </Link>
    );
}

export function SidebarFooter({ className, children }: SidebarGenericProps) {
    return (
        <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
            {children}
        </footer>
    );
}