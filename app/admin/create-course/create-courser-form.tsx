'use client'
import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { SubmitButton } from "@/components/submit-button";
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
import { Textarea } from '@/components/ui/textarea';
import { createCourse } from "@/lib/actions";
import { Facebook, Instagram, Linkedin, MailIcon } from 'lucide-react';
import Image from "next/image";
import { toast } from "sonner";



const initialState = {
    course_title: '',
    course_description: '',
    course_flayer: null,
    facilitator_name: '',
    facilitator_role: '',
    facilitator_skills: '',
    facilitator_description: '',
    facilitator_image: null,
    instagram: '',
    facebook: '',
    linkedin: '',
    mail: '',
    url: '',
    datetime: '',
    details: '',
};


export default function CreateCourseForm() {
    const [formState, setFormState] = useState(initialState);

    useEffect(() => {
        console.log(formState);
    }, [formState]);



    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, files } = e.target;
        if (files && files[0]) {
            setFormState(prevState => ({
                ...prevState,
                [name]: files[0],
            }));
        }
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        // Validar campos requeridos
        const requiredFields = [
            'course_title',
            'course_description',
            'course_flayer',
            'facilitator_name',
            'facilitator_role',
            'facilitator_skills',
            'facilitator_description',
            'facilitator_image',
            'url',
            'datetime',
            'details'
        ];

        // @ts-ignore
        const missingFields = requiredFields.filter(field => !formState[field]);

        if (missingFields.length > 0) {
            toast.error('Por favor, complete todos los campos requeridos.');
            return;
        }

        // Crear FormData
        const formData = new FormData();

        Object.entries(formState).forEach(([key, value]: [key: any, value: any]) => {
            if (value instanceof File) {
                formData.append(key, value);
            } else {
                formData.append(key, value as string);
            }
        });

        await createCourse(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Tabs defaultValue="course" className="w-[350px] sm:w-[400px]">
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
                                <Label htmlFor="course_title" className='requird-label-input'>Título del Curso</Label>
                                <Input
                                    
                                    id="course_title"
                                    name="course_title"
                                    placeholder='Curso de ...'
                                    value={formState.course_title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="course_description" className='requird-label-input'>Descripción del Curso</Label>
                                <Textarea
                                    
                                    id="course_description"
                                    name="course_description"
                                    placeholder='Aprende a ...'
                                    value={formState.course_description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="course_flayer" className='requird-label-input'>Flyer del Curso</Label>
                                <div className="flex">
                                    <Input
                                        
                                        id="course_flayer"
                                        name='course_flayer'
                                        type="file"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50 focus:outline-none border-gray-600"
                                    />
                                    {
                                        formState.course_flayer && (
                                            <Image
                                                src={URL.createObjectURL(formState.course_flayer)}
                                                alt="course flayer"
                                                className="w-[50px] h-[40px] object-cover rounded-lg ml-2"
                                                width={40}
                                                height={40}
                                            />
                                        )
                                    }
                                </div>
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
                                <Label htmlFor="facilitator_name" className='requird-label-input'>Nombre del Facilitador</Label>
                                <Input
                                    
                                    id="facilitator_name"
                                    name="facilitator_name"
                                    value={formState.facilitator_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="facilitator_role" className='requird-label-input'>Rol</Label>
                                <Input
                                    
                                    id="facilitator_role"
                                    name="facilitator_role"
                                    placeholder="Filmmaker"
                                    value={formState.facilitator_role}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="facilitator_skills" className='requird-label-input'>Habilidades</Label>
                                <Input
                                    
                                    id="facilitator_skills"
                                    name="facilitator_skills"
                                    placeholder='web, photoshop, figma...'
                                    value={formState.facilitator_skills}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="facilitator_description" className='requird-label-input'>Descripción del Facilitador</Label>
                                <Textarea
                                    
                                    id="facilitator_description"
                                    name="facilitator_description"
                                    value={formState.facilitator_description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="facilitator_image" className='requird-label-input'>Foto del Facilitador</Label>
                                <div className="flex">
                                    <Input
                                        
                                        id="facilitator_image"
                                        name="facilitator_image"
                                        type="file"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50 focus:outline-none border-gray-600"
                                    />
                                    {
                                        formState.facilitator_image && (
                                            <Image
                                                src={URL.createObjectURL(formState.facilitator_image)}
                                                alt="course flayer"
                                                className="w-[50px] h-[40px]  object-cover rounded-lg ml-2"
                                                width={40}
                                                height={40}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label>Redes Sociales</Label>
                                <div className="relative flex flex-1 flex-shrink-0">
                                    <Input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        placeholder="Instagram"
                                        id='instagram'
                                        name='instagram'
                                        value={formState.instagram}
                                        onChange={handleChange}
                                    />
                                    <Instagram className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>

                                <div className="relative flex flex-1 flex-shrink-0">
                                    <Input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        placeholder="Facebook"
                                        id='facebook'
                                        name='facebook'
                                        value={formState.facebook}
                                        onChange={handleChange}
                                    />
                                    <Facebook className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                                <div className="relative flex flex-1 flex-shrink-0">
                                    <Input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        placeholder="Linkedin"
                                        id='linkedin'
                                        name='linkedin'
                                        value={formState.linkedin}
                                        onChange={handleChange}
                                    />
                                    <Linkedin className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                                <div className="relative flex flex-1 flex-shrink-0">
                                    <Input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        placeholder="Correo"
                                        id='mail'
                                        name='mail'
                                        type='email'
                                        value={formState.mail}
                                        onChange={handleChange}
                                    />
                                    <MailIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
                                <Label htmlFor="url" className='requird-label-input'>URL de la Reunión</Label>
                                <Input
                                    
                                    id="url"
                                    name="url"
                                    value={formState.url}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="datetime" className='requird-label-input'>Fecha de la Reunión</Label>
                                <Input
                                    
                                    id="datetime"
                                    name="datetime"
                                    type='datetime-local'
                                    value={formState.datetime}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="details" className='requird-label-input'>Detalles</Label>
                                <Textarea
                                    
                                    id="details"
                                    name="details"
                                    value={formState.details}
                                    onChange={handleChange}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <SubmitButton text="Crear Curso"/>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </form>
    );
}

