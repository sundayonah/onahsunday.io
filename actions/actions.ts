// app/actions/actions.js
'use server'

export async function getProjects() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_PROJECT_BASE_URL, {

            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Failed to fetch projects');
    }
}

export async function getPackages() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_PACKAGES_BASE_URL, {

            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching packages:', error);
        throw new Error('Failed to fetch packages');
    }
}