export interface IWilderProps {
    name: string;
    city: string;
    id: number;
    skill: [{
        id: number;
        title: string;
        votes: number;
    }];
}