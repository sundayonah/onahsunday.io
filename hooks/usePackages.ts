import { useState, useEffect } from 'react';
import { getPackages } from '../actions/actions';

export const usePackages = () => {
    const [npmPackages, setNpmPackages] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedPackages = await getPackages();
                if (!fetchedPackages) {
                    throw new Error('No projects data received');
                }
                setNpmPackages(fetchedPackages);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError(err.message || 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { npmPackages, loading, error };
};