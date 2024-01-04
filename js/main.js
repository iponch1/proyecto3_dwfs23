import { createChart } from './chartModule.js';


document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('http://api.disneyapi.dev/character?page=1&pageSize=50');
        const data = await response.json();

        createChart(data);
        
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }

    
});
