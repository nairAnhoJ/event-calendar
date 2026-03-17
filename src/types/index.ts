export interface User {
    id: string;
    id_number: string;
    name: string;
    first_name: string;
    last_name: string;
    department_id: number;
    department: string;
    site_id: number;
    site_name: string;
    designation: string;
    email: string;
    avatar: string;
    text_color: string;
    bg_color: string;
    first_time_login: boolean;
    allowed_app: string[];
    role: string;
    is_active: boolean;
}

export interface Error {
    path: string;
    msg: string;
}

export interface EventDate {
    id: string;
    type: string;
    date: string;
    date2: string;
    date3: string;
    from_date: string;
    to_date: string;
    start_time: string;
    end_time: string;
    venue: string;
    location: string;
    slot_limit: number;
    is_active: boolean;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    venue: string;
    location: string;
    start_time: string;
    end_time: string;
    registration_deadline: string;
    is_active: boolean;
    created_by_name: string;
    created_by: number;
    created_at: string;
    dates: EventDate[];
}

export interface RegistrationDetails {
    id: string;
    reference_number: string;
    status: string;
    created_at: string;
    date: string;
    start_time: string;
    end_time: string;
    venue: string;
    location: string;
}