import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GearIcon, LockClosedIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"

type Props = {
    user: Session['user']
}

export function UserDropdown({ user }: Props) {
    if (!user) return;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 items-center justify-between w-full space-x-0 -px-0">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.image as string} alt={user?.name as string} />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col flex-1 space-y-1 text-left">
                        {user.name && (
                            <p className="text-sm font-medium leading-none">{user.name}</p>
                        )}
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        {user.name && (
                            <p className="text-sm font-medium leading-none">{user.name}</p>
                        )}
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <PersonIcon className="w-3 h-4" />
                        Meu Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <RocketIcon className="w-3 h-4" />
                        Meu Plano
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <GearIcon className="w-3 h-4" />
                        Configurações
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                    <LockClosedIcon className="w-3 h-4" />
                    Sair
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}