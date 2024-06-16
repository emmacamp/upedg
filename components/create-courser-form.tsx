'use client';
import axios from 'axios';
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
import { CloudFog, Facebook, Instagram, Linkedin, Loader, MagnetIcon } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import { useContextForm } from '@/app/context/FormContext';

export function CreateCourseForm() {
    const { state: form, handleChange, handleDateMeetingChange, handleFileChange, handleMeetingChange, handleSocialfacilitatorChange, handlefacilitatorChange, handlefacilitatorSkillsChange } = useContextForm();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Verificar campos requeridos
        const requiredFields = [
            'course_title',
            'course_description',
            'course_flayer',
            'facilitator.facilitator_image',
            'facilitator.facilitator_name',
            'facilitator.facilitator_role',
            'facilitator.facilitator_description',
            'meeting.url',
            'meeting.datetime',
            'meeting.details'
        ];

        const missingFields = requiredFields.filter(field => {

            const fieldParts = field.split('.');
            if (fieldParts.length > 1) {
                // @ts-ignore
                return !form[fieldParts[0]][fieldParts[1]]
            }
            // @ts-ignore
            return !form[field];
        });

        if (missingFields.length > 0) {
            console.log(missingFields);
            toast.error('Por favor, complete todos los campos requeridos.');
            return;
        }
        
        const formData = new FormData();
        formData.append('course_title', form.course_title);
        formData.append('course_description', form.course_description);
        if (form.course_flayer) formData.append('course_flayer', form.course_flayer);
        formData.append('facilitator_name', form.facilitator.facilitator_name);
        formData.append('facilitator_role', form.facilitator.facilitator_role);
        formData.append('facilitator_description', form.facilitator.facilitator_description);
        if (form.facilitator.facilitator_image) formData.append('facilitator_image', form.facilitator.facilitator_image);
        formData.append('facilitator_skills', form.facilitator.facilitator_skills.join(','));
        formData.append('facilitator_socials', JSON.stringify(form.facilitator.facilitator_socials));
        formData.append('meeting', JSON.stringify(form.meeting));

        // console.log({ missingFields, form: Object.fromEntries(formData.entries()) });
        // console.log(Object.fromEntries(formData.entries()));
        // Aquí se puede enviar formData al servidor.
        await axios.post('/api/courses/create-course', formData);

    };

    return (
        <Tabs defaultValue="course" className="sm:w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="course">Curso</TabsTrigger>
                <TabsTrigger value="facilitador">Facilitador</TabsTrigger>
                <TabsTrigger value="meeting">Reunión</TabsTrigger>
            </TabsList>
            <form onSubmit={handleSubmit}>
                <TabsContent value="course">
                    <Card>
                        <CardHeader>
                            <CardTitle>Información del Curso</CardTitle>
                            <CardDescription>Ingrese la información del curso.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="course_title" className='required'>Título del Curso</Label>
                                <Input
                                    required
                                    id="course_title"
                                    name="course_title"
                                    placeholder='Curso de ...'
                                    value={form.course_title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="course_description" className='required'>Descripción del Curso</Label>
                                <Textarea
                                    required
                                    id="course_description"
                                    name="course_description"
                                    placeholder='Aprende a ...'
                                    value={form.course_description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="course_flayer" className='required'>Flyer del Curso</Label>
                                <Input
                                    required
                                    id="course_flayer"
                                    name='course_flayer'
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'course_flayer')}
                                    className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50 focus:outline-none border-gray-600"
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
                                <Label htmlFor="facilitator_name" className='required'>Nombre del Facilitador</Label>
                                <Input
                                    required
                                    id="facilitator_name"
                                    name="facilitator_name"
                                    value={form.facilitator.facilitator_name}
                                    onChange={handlefacilitatorChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="facilitator_role" className='required'>Rol</Label>
                                <Input
                                    required
                                    id="facilitator_role"
                                    name="facilitator_role"
                                    placeholder="Filmmaker"
                                    value={form.facilitator.facilitator_role}
                                    onChange={handlefacilitatorChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="facilitator_skills" className='required'>Habilidades</Label>
                                <Input
                                    required
                                    id="facilitator_skills"
                                    name="facilitator_skills"
                                    placeholder='web, photoshop, figma...'
                                    value={form.facilitator.facilitator_skills.join(', ')}
                                    onChange={handlefacilitatorSkillsChange}
                                />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="facilitator_description" className='required'>Descripción del Facilitador</Label>
                                <Textarea
                                    required
                                    id="facilitator_description"
                                    name="facilitator_description"
                                    value={form.facilitator.facilitator_description}
                                    onChange={handlefacilitatorChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="facilitator_image" className='required'>Foto del Facilitador</Label>
                                <Input
                                    required
                                    id="facilitator_image"
                                    name="facilitator_image"
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'facilitator_image')}
                                    className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50 focus:outline-none border-gray-600"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label>Redes Sociales</Label>
                                <div className="relative flex flex-1 flex-shrink-0">
                                    <Input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        placeholder="Instagram"
                                        id='instagram'
                                        name='instagram'
                                        value={form.facilitator.facilitator_socials.instagram}
                                        onChange={handleSocialfacilitatorChange}
                                    />
                                    <Instagram className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>

                                <div className="relative flex flex-1 flex-shrink-0">
                                    <Input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        placeholder="Facebook"
                                        id='facebook'
                                        name='facebook'
                                        value={form.facilitator.facilitator_socials.facebook}
                                        onChange={handleSocialfacilitatorChange}
                                    />
                                    <Facebook className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                                <div className="relative flex flex-1 flex-shrink-0">
                                    <Input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        placeholder="Linkedin"
                                        id='linkedin'
                                        name='linkedin'
                                        value={form.facilitator.facilitator_socials.linkedin}
                                        onChange={handleSocialfacilitatorChange}
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
                                        value={form.facilitator.facilitator_socials.mail}
                                        onChange={handleSocialfacilitatorChange}
                                    />
                                    <MagnetIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
                                <Label htmlFor="url" className='required'>URL de la Reunión</Label>
                                <Input
                                    required
                                    id="url"
                                    name="url"
                                    value={form.meeting.url}
                                    onChange={handleMeetingChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="datetime" className='required'>Fecha de la Reunión</Label>
                                <Input
                                    required
                                    id="datetime"
                                    name="datetime"
                                    type='datetime-local'
                                    onChange={handleDateMeetingChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="details" className='required'>Detalles</Label>
                                <Textarea
                                    required
                                    id="details"
                                    name="details"
                                    value={form.meeting.details}
                                    onChange={handleMeetingChange}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <CreateCourseButton formInputRequiredEmpty/>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </form>
        </Tabs>
    );
}


const CreateCourseButton = ({ formInputRequiredEmpty }: { formInputRequiredEmpty: boolean }) => {
    const { pending } = useFormStatus();

    const isDisabled = pending || formInputRequiredEmpty;

    return (
        <Button disabled={isDisabled} type="submit" className="w-[350px]">
            Crear Curso
            {
                isDisabled && <Loader className="ml-2" size={20} />
            }
        </Button>
    );
}