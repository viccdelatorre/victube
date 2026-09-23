"use client";
import Link from "next/link";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarMenu } from "../ui/sidebar";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,
        
    },
    
    {
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquareIcon,
        auth: true,
        
    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon,
        
    },
];
export const MainSection = () => {
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                render={<Link href={item.url} className= "flex items-center gap-4"/>}
                                isActive={false} // To do: change to look at pathname
                                onClick={() => {}} // To do: do something on click
                            >
                                <item.icon />
                                <span className="text-sm">{item.title}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}