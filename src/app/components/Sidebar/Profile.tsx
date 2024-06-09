import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-profile">
            <img src="https://github.com/LeonardoDett.png" alt="" className="w-10 h-10 rounded-full" />
            <div className="flex flex-1 flex-col truncate">
                <span className="text-zinc-700 font-semibold text-sm truncate">Leonardo Dettmann</span>
                <span className="text-zinc-500 text-sm truncate">leokruger2012@gmail.com</span>
            </div>
            <button type="button" className="ml-auto mb-auto p-2 hover:bg-zinc-50 rounded-md">
                <LogOut className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    )
}