import { useState, useEffect } from 'react';
import { getPackages } from '../actions/actions';

export const usePackages = () => {
    const [npmPackages, setNpmPackages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {

                const fetchedPackages = await getPackages();
                setNpmPackages(fetchedPackages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return { npmPackages };
};