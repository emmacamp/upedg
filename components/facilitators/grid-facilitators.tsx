'use server'

import { CardFacilitator } from "./card-facilitator";
import prisma from "@/lib/prisma";
interface GridCoursesProps {
    query: string;
}

interface GridCoursesProps {
    query: string;
}


export async function GridFacilitator({ query }: GridCoursesProps) {
    const facilitators = await prisma.facilitator.findMany({
        where: {
            facilitator_name: {
                contains: query,
            },
        },
        include: {
            facilitator_image: true,
            facilitator_socials: true,
        },
    });


    console.log({facilitators});

    return facilitators.map((facilitator) => (
        <CardFacilitator
            key={facilitator.id}
            facilitator={facilitator as Facilitator}
        />
    ));
}