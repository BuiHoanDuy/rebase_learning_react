import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "./lib/utils";
import { ChevronDownIcon, Home, ListVideo, Menu, Mic2, Music, Play, RadioIcon, SquareStack, User } from "lucide-react";
import Link from "next/link";
import * as React from "react";

type Menu = {
    label: string
    name: string
    icon: React.ReactNode
    submenu?: Submenu[]
    href: string
}

type Submenu = {
    name: string
    icon: React.ReactNode
    href: string
}

export function SidebarMenu() {
    const menus: Menu[] = [
        {
            label: "Phần bài tập",
            name: "第 11 课",
            icon: <Home size={15} className="mr-2" />,
            href: "/exercise/bai11",
        },
        {
            label: "Phần bài tập",
            name: "第 12 课",
            icon: <SquareStack size={15} className="mr-2" />,
            href: "/exercise/bai12",
        },
        {
            label: "Phần bài tập",
            name: "第 13 课",
            icon: <RadioIcon size={15} className="mr-2" />,
            href: "/exercise/bai13",
        },
        // {
        //     label: "Library",
        //     name: "Playlist",
        //     icon: <Play size={15} className="mr-2" />,
        //     href: "/home/playlist",
        //     submenu: [
        //         {
        //             name: "Playlist 1",
        //             icon: <ListVideo size={15} className="mr-2" />,
        //             href: "/home/",
        //         },
        //         {
        //             name: "Playlist 2",
        //             icon: <ListVideo size={15} className="mr-2" />,
        //             href: "/home/",
        //         },
        //         {
        //             name: "Playlist 3",
        //             icon: <ListVideo size={15} className="mr-2" />,
        //             href: "/home/",
        //         },
        //     ],
        // },
        {
            label: "Phần bài tập",
            name: "第 14 课",
            icon: <Music size={15} className="mr-2" />,
            href: "/exercise/bai14",
        },
        {
            label: "Phần bài tập",
            name: "第 15 课",
            icon: <User size={15} className="mr-2" />,
            href: "/exercise/bai15",
        },
        {
            label: "Phần bài tập",
            name: "第 16 课",
            icon: <Mic2 size={15} className="mr-2" />,
            href: "/exercise/bai16",
        },
        {
            label: "Phần bài tập",
            name: "第 17 课",
            icon: <Mic2 size={15} className="mr-2" />,
            href: "/exercise/bai17",
        },
        {
            label: "Phần bài tập",
            name: "第 18 课",
            icon: <Mic2 size={15} className="mr-2" />,
            href: "/exercise/bai18",
        },
        {
            label: "Phần bài tập",
            name: "第 19 课",
            icon: <Mic2 size={15} className="mr-2" />,
            href: "/exercise/bai19",
        },
        {
            label: "Phần bài tập",
            name: "第 20 课",
            icon: <Mic2 size={15} className="mr-2" />,
            href: "/exercise/bai20",
        },
    ];

    const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

    return (
        <ScrollArea className="h-screen lg:w-48 sm:w-full rounded-md">
            <div className="md:px-4 sm:p-0 mt-5 ">
                {uniqueLabels.map((label, index) => (
                    <React.Fragment key={label}>
                        {label && (
                            <p className={`mx-4 mb-3 text-sm text-left tracking-wider text-slate-300 ${index > 0 ? 'mt-10' : ''}`}>
                                {label}
                            </p>
                        )}
                        {menus
                            .filter((menu) => menu.label === label)
                            .map((menu) => (
                                <React.Fragment key={menu.name}>
                                    {menu.submenu && menu.submenu.length > 0 ? (
                                        <Accordion
                                            key={menu.name}
                                            type="single"
                                            className="mt-[-10px] mb-[-10px] p-0 font-normal"
                                            collapsible
                                        >
                                            <AccordionItem value="item-1" className="m-0 p-0 font-normal">
                                                <AccordionTrigger>
                                                    <a key={menu.name} className="w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md">
                                                        <div className={cn("flex justify-between w-full [&[data-state=open]>svg]:rotate-180")}>
                                                            <div className="flex">
                                                                <div className="w-6">{menu.icon}</div>
                                                                {menu.name}
                                                            </div>
                                                            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                                                        </div>
                                                    </a>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {menu.submenu.map((submenu) => (
                                                        <Link key={submenu.name} href={submenu.href} className="text-gray-400 mt-0 mb-0 flex text-xs h-10 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background my-2 items-center p-4 hover:bg-primary hover:text-white rounded-md">
                                                            <div className="w-6">{submenu.icon}</div>
                                                            {submenu.name}
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ) : (
                                        <div key={menu.name}>
                                            <Link href={menu.href} className="flex text-xs h-10 bg-white dark:bg-background my-2 items-center p-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md">
                                                <div className="w-6">{menu.icon}</div>
                                                {menu.name}
                                            </Link>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    );
}
