'use client'

import React, { createContext, useReducer, ReactNode } from 'react';
const initialStateForm: Course<Facilitator> = {
    course_title: '',
    course_description: '',
    course_flayer: null,
    facilitator: {
        facilitator_name: '',
        facilitator_role: '',
        facilitator_skills: [],
        facilitator_description: '',
        facilitator_image: null,
        facilitator_socials: {
            instagram: '',
            facebook: '',
            linkedin: '',
            mail: '',
        }
    },
    meeting: {
        url: '',
        datetime: '',
        details: '',
    },
};

type ActionType =
    | { type: 'SET_FIELD'; payload: { name: string; value: any } }
    | { type: 'SET_FILE'; payload: { name: string; value: any } }
    | { type: 'SET_FACILITATOR_FIELD'; payload: { name: string; value: any } }
    | { type: 'SET_FACILITATOR_SOCIAL'; payload: { name: string; value: any } }
    | { type: 'SET_MEETING_FIELD'; payload: { name: string; value: any } }
    | { type: 'RESET_FORM' };

function reducer(state: Course<Facilitator>, action: ActionType): Course<Facilitator> {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case 'SET_FACILITATOR_FIELD':
            return {
                ...state,
                facilitator: {
                    ...state.facilitator,
                    [action.payload.name]: action.payload.value,
                },
            };
        case 'SET_FILE':
            if (action.payload.name === 'course_flayer') {
                return {
                    ...state,
                    course_flayer: action.payload.value,
                };
            }
            return {
                ...state,
                facilitator: {
                    ...state.facilitator,
                    facilitator_image: action.payload.value,
                },
            };



        case 'SET_FACILITATOR_SOCIAL':
            return {
                ...state,
                facilitator: {
                    ...state.facilitator,
                    facilitator_socials: {
                        ...state.facilitator.facilitator_socials,
                        [action.payload.name]: action.payload.value,
                    },
                },
            };
        case 'SET_MEETING_FIELD':
            return {
                ...state,
                meeting: {
                    ...state.meeting,
                    [action.payload.name]: action.payload.value,
                },
            };
        case 'RESET_FORM':
            return initialStateForm;
        default:
            return state;
    }
}

interface FormContextProps {
    state: Course<Facilitator>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handlefacilitatorChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handlefacilitatorSkillsChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSocialfacilitatorChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleMeetingChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleDateMeetingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialStateForm);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            dispatch({ type: 'SET_FILE', payload: { name: field, value: file } });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FIELD', payload: { name, value } });
    };

    const handlefacilitatorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FACILITATOR_FIELD', payload: { name, value } });
    };

    const handlefacilitatorSkillsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        const skills = value.split(',').map(skill => skill.trim());
        dispatch({ type: 'SET_FACILITATOR_FIELD', payload: { name: 'facilitator_skills', value: skills } });
    };

    const handleSocialfacilitatorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FACILITATOR_SOCIAL', payload: { name, value } });
    };

    const handleMeetingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_MEETING_FIELD', payload: { name, value } });
    };

    const handleDateMeetingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const date = new Date(value).toISOString();
        dispatch({ type: 'SET_MEETING_FIELD', payload: { name: 'datetime', value: date } });
    };


    return (
        <FormContext.Provider value={{
            state,
            handleChange,
            handlefacilitatorChange,
            handlefacilitatorSkillsChange,
            handleSocialfacilitatorChange,
            handleMeetingChange,
            handleDateMeetingChange,
            handleFileChange,
        }}>
            {children}
        </FormContext.Provider>
    );
};

export const useContextForm = () => {
    const context = React.useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
};