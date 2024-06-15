'use client'
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "./ui/calendar"
import { useState } from "react"
import { Popover, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { PopoverContent } from "@radix-ui/react-popover"

const course = {
    title: 'Curso de edición de video',
    description: 'Aprende a editar videos con Adobe Premiere Pro y After Effects.',
    completed: false,
    teacher: {
        name: 'Jean Carlos',
        flayer: 'jeanCourseFlayer',
        social: [
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/jean_carlos',
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/jean_carlos',
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/jean_carlos',
            }
        ]
    },
    meeting: {
        url: 'https://meet.google.com/xyz-abc-def',
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
export const CreateCourserForm = () => {

    const [form, setForm] = useState<Course>({
        title: '',
        description: '',
        teacher: {
            name: '',
            flayer: '',
            social: [{ name: '', url: '', icon: '' }]
        },
        meeting: {
            url: '',
            start: '',
            end: '',
            action: '',
            text: '',
            dates: { start: '', end: '' },
            details: '',
            location: '',
            sf: false,
            output: ''
        }
    })


    const [date, setDate] = useState<Date | undefined>(new Date())


    const createCourse = async (formData: FormData) => {



    }


    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Crear Curso</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={createCourse}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title">Titulo</Label>
                            <Input id="title" placeholder="Titulo del curso" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Descripción</Label>
                            <Input id="description" placeholder="Descripción del curso" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="teacher">Profesor</Label>
                            <Select>
                                <SelectTrigger id="teacher">
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Jean Carlos">Jean Carlos</SelectItem>
                                    <SelectItem value="Sara">Sara</SelectItem>
                                    <SelectItem value="Jhon">Jhon</SelectItem>
                                    <SelectItem value="Doe">Doe</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meeting">Reunión</Label>
                            <Select>
                                <SelectTrigger id="meeting">
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Google Meet">Google Meet</SelectItem>
                                    <SelectItem value="Zoom">Zoom</SelectItem>
                                    <SelectItem value="Teams">Teams</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingUrl">Url de la reunión</Label>
                            <Input id="meetingUrl" placeholder="Url de la reunión" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingDate">Fecha de la reunión</Label>
                            <Input type="datetime-local" name="" id="" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingStart">Inicio de la reunión</Label>
                            <Input id="meetingStart" placeholder="Inicio de la reunión" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingEnd">Fin de la reunión</Label>
                            <Input id="meetingEnd" placeholder="Fin de la reunión" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingAction">Acción</Label>
                            <Input id="meetingAction" placeholder="Acción" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingText">Texto</Label>
                            <Input id="meetingText" placeholder="Texto" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingDetails">Detalles</Label>
                            <Input id="meetingDetails" placeholder="Detalles" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingLocation">Ubicación</Label>
                            <Input id="meetingLocation" placeholder="Ubicación" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingSf">Sf</Label>
                            <Input id="meetingSf" placeholder="Sf" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="meetingOutput">Salida</Label>
                            <Input id="meetingOutput" placeholder="Salida" />
                        </div>





                        {/* <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="framework">Framework</Label>
                          <Select>
                              <SelectTrigger id="framework">
                                  <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent position="popper">
                                  <SelectItem value="next">Next.js</SelectItem>
                                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                  <SelectItem value="astro">Astro</SelectItem>
                                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                              </SelectContent>
                          </Select>
                      </div> */}
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    )
}
