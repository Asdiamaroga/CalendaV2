

export interface Color {
    primary: string;
    secondary: string;
}

export interface PlainTeamMember {
    name :string;
    surName :string;
    color : Color;
}

export interface TeamMember {
    id :string;
    data: {
        name :string;
        surName :string;
        color : Color;
    }
}