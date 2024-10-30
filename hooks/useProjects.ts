// import { useState, useEffect } from 'react';
// import { getProjects } from '../actions/actions';

// export const useProjects = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const fetchedProjects = await getProjects();
//                 setProjects(fetchedProjects);

//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }

//         fetchData();
//     }, []);

//     return { projects };
// };