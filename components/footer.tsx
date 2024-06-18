import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from "lucide-react"; // Asegúrate de tener estos iconos instalados o reemplázalos con tus propios iconos
import Image from "next/image";
import upedgLogo from "@/assets/logo.png";

export default function Footer() {
    return (
        <div className="flex items-end w-full min-h-screen ">
            <footer className="w-full text-gray-700  body-font">
                <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <Image
                                src={upedgLogo}
                                alt="Logo"
                                width={120}
                                height={120}
                            />
                        </a>
                        <p className="mt-2 text-sm text-gray-500">
                            Unidos por el diseño gráfico
                        </p>
                        <div className="mt-4">
                            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                <Link href="https://facebook.com" className="text-gray-500 cursor-pointer hover:text-gray-700">
                                    <FacebookIcon className="w-5 h-5" />
                                </Link>
                                <Link href="https://instagram.com" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                    <InstagramIcon className="w-5 h-5" />
                                </Link>
                                <Link href="https://twitter.com" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                    <TwitterIcon className="w-5 h-5" />
                                </Link>
                                <Link href="https://linkedin.com" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                    <LinkedinIcon className="w-5 h-5" />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Company</Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Careers</Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Blog</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Contact Support</Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Help Resources</Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Release Updates</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-gray-700 capitalize xl:text-center">
                            © {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
