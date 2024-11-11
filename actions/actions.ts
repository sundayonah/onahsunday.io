// import { revalidatePath } from 'next/cache';


// const PROJECT_BASE_URL = process.env.NEXT_PUBLIC_PROJECT_BASE_URL
const PACKAGES_BASE_URL = process.env.NEXT_PUBLIC_PACKAGES_BASE_URL;

// actions.js
export async function getProjects() {
    const PROJECT_BASE_URL = process.env.NEXT_PUBLIC_PROJECT_BASE_URL;

    // Debug logging
    console.log('Attempting to fetch from:', PROJECT_BASE_URL);

    if (!PROJECT_BASE_URL) {
        throw new Error('Project base URL is not defined in environment variables');
    }

    try {
        const response = await fetch(PROJECT_BASE_URL, {
            // Adding these headers explicitly
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // Adding cache control
            cache: 'no-store',
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Response:', {
                status: response.status,
                statusText: response.statusText,
                body: errorText
            });
            throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Successfully fetched projects:', data);
        return data;
    } catch (error) {
        console.error('Detailed fetch error:', {
            name: error.name,
            message: error.message,
            cause: error.cause
        });
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