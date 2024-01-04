const Chart = window.Chart;

export function createChart(response) {
    console.log('Datos de la API:', response);

    if (typeof response === 'object' && response !== null && response.hasOwnProperty('data')) {
        const containerProperty = response['data'];

        if (Array.isArray(containerProperty)) {
            console.log('Datos cargados correctamente:', containerProperty);

            const charactersWithTVShows = containerProperty.filter(item => item.tvShows.length > 0);
            const charactersWithoutTVShows = containerProperty.filter(item => item.tvShows.length === 0);

            const ctx = document.getElementById('myChart').getContext('2d');
            
            const myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Personajes con show de tv', 'Personajes sin show de tv'],
                    datasets: [{
                        data: [charactersWithTVShows.length, charactersWithoutTVShows.length],
                        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
                        hoverBackgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                        borderWidth: 1
                    }]
                }
            });

            console.log('Gráfico creado exitosamente:', myChart);
        } else {
            console.error('La propiedad contenedora no es un array:', containerProperty);
        }
    } else {
        console.error('El objeto response no tiene la propiedad contenedora:', response);
    }
}
