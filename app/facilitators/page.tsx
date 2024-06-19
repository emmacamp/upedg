import Search from "@/components/search";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { GridFacilitator } from "@/components/facilitators/grid-facilitators";
import { Suspense } from "react";
import { CardsSkeleton } from "@/components/skeleton";


interface SearchParams {
    searchParams: {
        query?: string;
    };
}

export default function CoursesPage({ searchParams }: SearchParams) {
    const query = searchParams?.query || '';
    return (
        <div className="w-full p-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-primary">Facilitadores</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex w-full items-center justify-between">
                <h1 className={`mt-3 text-2xl`}>Facilitadores</h1>
            </div>

            <div className="mt-2 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Buscar cursos..." />
            </div>

            <section className="mt-3 flex flex-col items-center md:items-start">

                {/* <h2 className="text-xl font-bold w-fit mb-1 mt-3 ms-1">Impartidos</h2> */}
                {/* <hr className="border-primary  mt-3 mb-2 bg-primary"/> */}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Suspense key={query} fallback={<CardsSkeleton />}>
                        <GridFacilitator query={query} />
                    </Suspense>
                </div>
            </section>


        </div>
    )
}