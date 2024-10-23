'use client'

import { Sidebar, SidebarFooter, SidebarHeader, SidebarMain, SidebarNav, SidebarNavHeader, SidebarNavHeaderTitle, SidebarNavLink, SidebarNavMain } from "@/components/layout/Sidebar";
import { BeakerIcon, CalendarDaysIcon, Cog8ToothIcon, ComputerDesktopIcon, CubeTransparentIcon, CurrencyDollarIcon, LinkIcon, ShoppingBagIcon, ShoppingCartIcon, Squares2X2Icon, UserGroupIcon, UsersIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./UserDropdown";
import { Logo } from "@/components/Logo";
import { Session } from "next-auth";

type Props = {
    user: Session['user']
}

export function MainSidebar({ user }: Props) {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <Logo />
            </SidebarHeader>
            <SidebarMain className="flex flex-col flex-grow">
                <SidebarNav>
                    <SidebarNavMain>
                        <SidebarNavLink href="/app" active={isActive('/app')}>
                            <Squares2X2Icon className="w-5 h-5 mr-3" />
                            Dashboard
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/sales" active={isActive('/app/sales')}>
                            <ShoppingBagIcon className="w-5 h-5 mr-3" />
                            Vendas
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/schedules" active={isActive('/app/schedules')}>
                            <CalendarDaysIcon className="w-5 h-5 mr-3" />
                            Agendas
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/warehouses" active={isActive('/app/warehouses')}>
                            <CubeTransparentIcon className="w-5 h-5 mr-3" />
                            Estoque
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/products" active={isActive('/app/products')}>
                            <BeakerIcon className="w-5 h-5 mr-3" />
                            Produtos
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/professionals" active={isActive('/app/professionals')}>
                            <UsersIcon className="w-5 h-5 mr-3" />
                            Profissionais
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/clients" active={isActive('/app/clients')}>
                            <UserGroupIcon className="w-5 h-5 mr-3" />
                            Clientes
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/customize-shop" active={isActive('/app/customize-shop')}>
                            <ComputerDesktopIcon className="w-5 h-5 mr-3" />
                            Loja Virtual
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/financial" active={isActive('/app/financial')}>
                            <CurrencyDollarIcon className="w-5 h-5 mr-3" />
                            Financeiro
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/maketplace-integrations" active={isActive('/app/maketplace-integrations')}>
                            <ShoppingCartIcon className="w-5 h-5 mr-3" />
                            Integrações Marketplace
                        </SidebarNavLink>
                        <SidebarNavLink href="/app/settings" active={isActive('/app/settings')}>
                            <Cog8ToothIcon className="w-5 h-5 mr-3" />
                            Configurações
                        </SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>

                <SidebarNav className="mt-auto">
                    <SidebarNavHeader>
                        <SidebarNavHeaderTitle className="flex flex-row">
                            <LinkIcon className="w-4 h-4 mr-1" />
                            Links Extras
                        </SidebarNavHeaderTitle>
                    </SidebarNavHeader>
                    <SidebarNavMain>
                        <SidebarNavLink href="/">Precisa de Ajuda?</SidebarNavLink>
                        <SidebarNavLink href="/">Site</SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>
            </SidebarMain>
            <SidebarFooter>
                <UserDropdown user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}