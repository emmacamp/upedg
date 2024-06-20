"use client"

import Link from "next/link"
import Image from "next/image"
import upedglogo from '@/assets/logo.png'
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
    const pathname = usePathname();

    const paths = [
        {
            name: "Inicio",
            href: "/",
        },
        {
            name: "Cursos",
            href: "/courses",
        },
        {
            name: "Facilitadores",
            href: "/facilitators",
        },
        {
            name: "Contacto",
            href: "/contact",
        },
        {
            name: "Acerca de",
            href: "/about",
        },
    ]

    return (
        <nav className="flex justify-between w-full p-4 my-3">
            <Link href="/" className="text-lg font-bold">
                <Image src={upedglogo} alt="UPEDG" className="px" width={100} height={100} />
            </Link>
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="stroke-blue-500"
                            d="M4 6h16"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="stroke-orange-500"
                            d="M4 12h16"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="stroke-blue-500"
                            d="M11 18h9"
                        />
                    </svg>
                </SheetTrigger>
                <SheetContent className="">
                    <SheetHeader className="">
                        <SheetTitle>
                            <Link href="/" className="">
                                <Image src={upedglogo} alt="UPEDG" className="" width={100} height={100} />
                            </Link>
                        </SheetTitle>
                        <SheetDescription className="flex flex-col items-start">
                            <p className="mb-3">
                                Unidos por el diseño gráfico
                            </p>
                            {
                                paths.map((path) => {
                                    return (
                                        <Link key={path.name} href={path.href} className={clsx(
                                            'text-lg font-semibold mb-2 text-black',
                                            {
                                                'border-b-2 border-b-primary': pathname === path.href,
                                            },
                                        )}>
                                            {path.name}
                                        </Link>
                                    )
                                })
                            }
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <div className="md:flex space-x-4 hidden">
                {
                    paths.map((path) => {
                        return (
                            <Link key={path.name} href={path.href} className={clsx(
                                'text-lg font-semibold',
                                {
                                    'border-b-2 border-b-primary': pathname === path.href,
                                },
                            )}>
                                {path.name}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}

