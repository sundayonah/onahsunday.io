// import { revalidatePath } from 'next/cache';


// const PROJECT_BASE_URL = process.env.NEXT_PUBLIC_PROJECT_BASE_URL
const PACKAGES_BASE_URL = process.env.NEXT_PUBLIC_PACKAGES_BASE_URL;

// actions.js
export async function getProjects() {
    const PROJECT_BASE_URL = process.env.NEXT_PUBLIC_PROJECT_BASE_URL;

    if (!PROJECT_BASE_URL) {
        throw new Error('Project base URL is not defined');
    }

    try {
        const response = await fetch(PROJECT_BASE_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in getProjects:', error);
        throw error;
    }
}


export async function getPackages() {
    const response = await fetch(`${PACKAGES_BASE_URL}`);


    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    // revalidatePath('/');

    return await response.json();
}