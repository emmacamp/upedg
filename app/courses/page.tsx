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
import jeanCourseFlayer from "@/assets/courses/jean-carlos.jpg";
import { GridCourses } from "@/components/courses/grid-courses";
import { Suspense } from "react";
import { CardsSkeleton } from "@/components/skeleton";

const course = {
    title: 'Curso de edición de video',
    description: 'Aprende a editar videos con Adobe Premiere Pro y After Effects.',
    completed: false,
    facilitator: {
        name: 'Jean Carlos',
        flayer: jeanCourseFlayer,
        social: [
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/jean_carlos',
                icon: '',
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/jean_carlos',
                icon: 'FacebookIcon',
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/jean_carlos',
                icon: 'LinkedinIcon',
            }
        ]
    },
    meeting: {
        url: 'https://meet.google.com/xyz-abc-def',
        start: '20240814T120000Z',
        end: '20240814T150000Z',
        action: 'TEMPLATE',
        text: 'Curso+de+edición+de+video',
        dates: {
            start: '20240814T120000Z',
            end: '20240814T150000Z',
        },
        details: `Aprende+a+editar+videos+con+Adobe+Premiere+Pro+y+After+Effects.%0AReunión+en+Google+Meet:`,
        location: 'Google+Meet+link',
        sf: true,
        output: 'xml',
    }
};

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
                        <BreadcrumbPage className="text-primary">Cursos</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex w-full items-center justify-between">
                <h1 className={`mt-3 text-2xl`}>Cursos</h1>
            </div>

            <div className="mt-2 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Buscar cursos..." />
            </div>

            <section className="mt-3">
                <h2 className="text-xl font-bold w-fit mb-3 border-b-2 border-primary">Impartidos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Suspense key={query} fallback={<CardsSkeleton />}>
                    <GridCourses query={query} />
                    </Suspense>
                </div>
            </section>


        </div>
    )
}