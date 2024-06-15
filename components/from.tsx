'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from './ui/textarea';
import { Popover } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, Facebook, Instagram, InstagramIcon, Linkedin, MagnetIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';

interface FormCreateCourse extends Course { }
/* 
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
*/
const initialStateForm: FormCreateCourse = {
    title: '',
    description: '',
    flayer: null,
    teacher: {
        name: '',
        role: '',
        skills: [],
        image: '',
        social: [{
            name: '',
            url: '',
        }],
    },
    meeting: {
        url: '',
        date: '',
        details: '',
    }
}



export function CreateCourseForm() {
    const [form, setForm] = useState<FormCreateCourse>(initialStateForm);

    console.log(form);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm({
                ...form,
                teacher: {
                    ...form.teacher,
                    flayer: e.target.files[0]
                }
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleTeacherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            teacher: {
                ...prevForm.teacher,
                [name]: value,
            },
        }));
    };

    const handleMeetingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            meeting: {
                ...prevForm.meeting,
                [name]: value,
            },
        }));
    };

    const handleMeetingDateChange = (date: Date = new Date(), key: 'start' | 'end') => {

        setForm({
            ...form,
            meeting: {
                ...form.meeting,
                date: date.toISOString()
            },
        });
    };

    const handleDateMeetingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const date = new Date(value)
        setForm({
            ...form,
            meeting: {
                ...form.meeting,
                date: date.toISOString()
            },
        });
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('teacher', JSON.stringify(form.teacher));
        formData.append('meeting', JSON.stringify(form.meeting));

    };

    return (
        <Tabs defaultValue="course" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="course">Curso</TabsTrigger>
                <TabsTrigger value="facilitador">Facilitador</TabsTrigger>
                <TabsTrigger value="meeting">Reunión</TabsTrigger>
            </TabsList>
            <TabsContent value="course">
                <Card>
                    <CardHeader>
                        <CardTitle>Información del Curso</CardTitle>
                        <CardDescription>Ingrese la información del curso.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="title">Título</Label>
                            <Input id="title" name="title" value={form.title} onChange={handleChange} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="description">Descripción</Label>
                            <Textarea id="description" name="description" value={form.description} onChange={handleChange} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="flayer">Flyer del Curso</Label>
                            {/* <Input id="flayer" name="flayer" value={form.teacher.flayer} onChange={handleTeacherChange} /> */}
                            <Input
                                id="flayer"
                                type="file"
                                onChange={handleImageChange}
                                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50  focus:outline-none border-gray-600"
                            />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="facilitador">
                <Card>
                    <CardHeader>
                        <CardTitle>Información del Facilitador</CardTitle>
                        <CardDescription>Ingrese la información del facilitador.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="teacherName">Nombre del Facilitador</Label>
                            <Input id="teacherName" name="name" value={form.teacher.name} onChange={handleTeacherChange} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="role">Rol</Label>
                            <Input id="role" name="role" placeholder="Editor" value={form.teacher.role} onChange={handleTeacherChange} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="skills">Habilidades</Label>
                            <Input id="skills" placeholder='web, photoshop, figma...' name="skills" value={form.teacher.skills} onChange={handleTeacherChange} />
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="details">Detalles</Label>
                            <Textarea id="details" name="details" value={form.meeting.details} onChange={handleMeetingChange} />
                        </div>
                        {/* redes */}
                        <div className="space-y-1">
                            <Label htmlFor="social">Redes Sociales</Label>
                            <div className="relative flex flex-1 flex-shrink-0">
                                <Input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    placeholder="Instagram"
                                
                                />
                                <Instagram className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>

                            <div className="relative flex flex-1 flex-shrink-0">
                                <Input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    placeholder="Facebook"
                                />
                                <Facebook className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>

                            <div className="relative flex flex-1 flex-shrink-0">
                                <Input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    placeholder="Linkedin"
                                />
                                <Linkedin className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                            
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="meeting">
                <Card>
                    <CardHeader>
                        <CardTitle>Información de la Reunión</CardTitle>
                        <CardDescription>Ingrese la información de la reunión.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="meetingUrl">URL de la Reunión</Label>
                            <Input id="meetingUrl" name="url" value={form.meeting.url} onChange={handleMeetingChange} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="start">Fecha de la Reunion</Label>
                            <Input id="start" type='datetime-local' name="datetime" onChange={handleDateMeetingChange} />

                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="details">Detalles</Label>
                            <Textarea id="details" name="details" value={form.meeting.details} onChange={handleMeetingChange} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" onClick={handleSubmit}>Crear Curso</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
