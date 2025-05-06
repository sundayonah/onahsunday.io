export interface PackageItem {
    id: string;
    name: string;
    description: string;
    npmUrl: string;
    stacks?: string[];
}


export interface ProjectItems {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    link: string;
    stacks: string[];
}