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

interface SearchParams {
    searchParams: {
        query?: string;
        page?: string;
    };
}

export default function CoursesPage({ searchParams }: SearchParams) {
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
                   
                </div>
            </section>


        </div>
    )
}