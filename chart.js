const labels = [
  'Team 01',
  'Team 02',
  'Team 03',
  'Team 04',
  'Team 05',
  'Team 06',
];

const months = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
]
// Datenkategorie X
const egdata = {
  labels: months,
  datasets: [{
    label: 'Daten-Kategorie X',
    backgroundColor: 'rgb(75, 192, 192)',
    borderColor: 'rgb(75, 192, 192)',
    data: [0, 10, 60, 2, 20, 30, 45],
    fill: false,
    tension: 0.1
  }]
};

const egconfig = {
  type: 'line',
  data: egdata,
};


// Datenkategorie Y
const fgdata = {
  labels: months,
  datasets: [{
    label: 'Daten im Jahresverlauf',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 100, 5, 2, 220, 230, 145],
  }]
};

const fgconfig = {
  type: 'bar',
  data: fgdata,
  options: {}
};

// Datenkategorie XY
const evdata = {
  labels: labels,
  datasets: [{
    label: 'Datensatz XY',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const evconfig = {
  type: 'bar',
  data: evdata,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

// Datenkategorie XZ
const efdata = {
  labels: labels,
  datasets: [{
    label: 'Daten-Kategorie XZ',
    backgroundColor: 'rgb(210, 99, 32)',
    borderColor: 'rgb(255, 69, 0)',
    data: [10, 100, 69, 52, 60, 30, 95],
    fill: false,
    tension: 0.1
  }]
};

const efconfig = {
  type: 'line',
  data: efdata,
};


// Datenkategorie Z
const iddata = {
  labels: [
    'Daten X1',
    'Daten X2',
    'Daten X3'
  ],
  datasets: [{
    label: 'Daten Kategorie Z',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const idconfig = {
  type: 'doughnut',
  data: iddata,
  options: {}
};
