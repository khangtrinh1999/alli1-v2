export interface Selections {
    value: string;
    name: string;
    image?: string;
    description?: string;
    color?: string;
    subItems?:Selections[];
}