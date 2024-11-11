// useProjects.js
import { useState, useEffect } from 'react';
import { getProjects } from '../actions/actions';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedProjects = await getProjects();
                if (!fetchedProjects) {
                    throw new Error('No projects data received');
                }
                setProjects(fetchedProjects);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError(err.message || 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { projects, loading, error };
};