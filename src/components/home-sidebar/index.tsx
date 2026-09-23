import { Separator } from "../ui/separator"
import { Sidebar, SidebarContent } from "../ui/sidebar"
import { MainSection } from "./main-section"
import { PersonalSection } from "./personal-section"

export const HomeSidebar = () => {
    return (
        <Sidebar className="pt-16 z-40 boderd-none" collapsible="icon">
            <SidebarContent className="bg-background">
                <MainSection />
                <Separator />
                <PersonalSection />
            </SidebarContent>
        </Sidebar>
    )
}