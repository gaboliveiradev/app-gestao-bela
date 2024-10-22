import { LayersIcon } from "@radix-ui/react-icons";

export function Logo() {
    return (
        <div className="flex items-center">
            <div className="bg-primary h-7 w-7 flex items-center justify-center rounded-md">
                <LayersIcon className="w-4 h-4 text-white" />
            </div>
            <div className="font-bold ml-2 text-xl">
                Gestão<span className="text-primary">Bela</span>
            </div>
        </div>
    )
} 