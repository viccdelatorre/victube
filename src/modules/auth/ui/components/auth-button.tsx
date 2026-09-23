import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"

export const AuthButton = () => {
    //To Do: add different auth states
    return (
        <Button 
            variant="outline"
            className="px-4 text-sm font-medium text-[#6F4E37]
            hover:text-[#6F4E37] border-[#6F4E37]/20 rounded-full
            shadow-none []"
        >
            <UserCircleIcon />
            Sign In
        </Button>
    )
}