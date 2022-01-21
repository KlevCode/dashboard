const labels = [
  'Team 01',
  'Team 02',
  'Team 03',
  'Team 04',
  'Team 05',
  'Team 06',
];


// Erstgespräche
const egdata = {
  labels: labels,
  datasets: [{
    label: 'Erstgespräche im Jahresverlauf',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 60, 2, 20, 30, 45],
  }]
};

const egconfig = {
  type: 'line',
  data: egdata,
  options: {}
};


// Folgegespräche
const fgdata = {
  labels: labels,
  datasets: [{
    label: 'Ausstehende Folgegespräche',
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

// EV-Gültigkeit
const evdata = {
  labels: labels,
  datasets: [{
    label: 'EV-Daten',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [130, 100, 5, 2, 220, 23, 45],
  }]
};

const evconfig = {
  type: 'bar',
  data: evdata,
  options: {}
};

// ID-Prüfungen
const iddata = {
  labels: labels,
  datasets: [{
    label: 'Ausstehende ID-Prüfungen',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 100, 5, 2, 220, 230, 145],
  }]
};

const idconfig = {
  type: 'line',
  data: iddata,
  options: {}
};
