import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

const ChartExample = () => {
Chart.register(...registerables);
console.log('aaa')
const data = {
labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
datasets: [
{
label: 'Vendas',
data: [12, 19, 3, 5, 2],
backgroundColor: 'rgba(75,192,192,0.2)',
borderColor: 'rgba(75,192,192,1)',
borderWidth: 1,
},
{
label: 'Lucro',
data: [5, 7, 9, 10, 8],
backgroundColor: 'rgba(54, 162, 235, 0.2)',
borderColor: 'rgba(54, 162, 235, 1)',
borderWidth: 1,
},
],
};
const options = {
scales: {
y: {
beginAtZero: true,
},
},
};
console.log('bbb')
return (
<div>
<h2>Gráfico de Vendas e Lucro</h2>
<Bar data={data} options={options} />
</div>
);
};
export default ChartExample;