import { cn } from "@/lib/utils";

export type PageLayoutGenericProps<T = any> = {
    children: React.ReactNode
    className?: string
} & T;

export function PageLayout({ className, children }: PageLayoutGenericProps) {
    return (
        <section className={cn('h-screen', className)}>
            {children}
        </section>
    );
}

export function PageLayoutHeader({ className, children }: PageLayoutGenericProps) {
    return (
        <header className={cn('px-4 py-2 border-b border-border', className)}>
            {children}
        </header>
    );
}

export function PageLayoutHeaderTitle({ className, children }: PageLayoutGenericProps) {
    return (
        <h1 className={cn('text-xl font-300 text-muted-foreground', className)}>
            {children}
        </h1>
    );
}

export function PageLayoutHeaderNav({ className, children }: PageLayoutGenericProps) {
    return (
        <nav className={cn('', className)}>
            {children}
        </nav>
    );
}

export function PageLayoutMain({ className, children }: PageLayoutGenericProps) {
    return (
        <main className={cn('p-6', className)}>
            {children}
        </main>
    );
}