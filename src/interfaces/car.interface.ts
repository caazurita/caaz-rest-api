export interface ICar {
    id?: string;
    model: string;
    year: number;
    color: string;
    status?: boolean;
    type: 'hybrid' | 'motor' | 'electric';
}