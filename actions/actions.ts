// import { revalidatePath } from 'next/cache';


const PROJECT_BASE_URL = process.env.NEXT_PUBLIC_PROJECT_BASE_URL
const PACKAGES_BASE_URL = process.env.NEXT_PUBLIC_PACKAGES_BASE_URL;


export async function getProjects() {
    const response = await fetch(`${PROJECT_BASE_URL}`);

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    // revalidatePath('/');

    // console.log(await response.json(), "response in action")

    return await response.json();
}

export async function getPackages() {
    const response = await fetch(`${PACKAGES_BASE_URL}`);


    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    // revalidatePath('/');

    return await response.json();
}