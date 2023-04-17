export enum SelectedPage {
    Features = 'features',
    Pricing = 'pricing',
    Ressources = 'ressources'
}

export interface CardAdvanced {
    id: number,
    img: string,
    title: string,
    text: string
}