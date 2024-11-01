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
                // console.log(fetchedProjects)
                setProjects(fetchedProjects);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'An unknown error occurred');
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return { projects, loading, error };
};