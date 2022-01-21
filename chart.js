const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];


// Erstgespräche
const egdata = {
  labels: labels,
  datasets: [{
    label: 'EG-Daten',
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
    label: 'EV-Daten',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 100, 5, 2, 220, 230, 145],
  }]
};

const fgconfig = {
  type: 'line',
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
    data: [0, 100, 5, 2, 220, 230, 145],
  }]
};

const evconfig = {
  type: 'line',
  data: evdata,
  options: {}
};

// ID-Prüfungen
const iddata = {
  labels: labels,
  datasets: [{
    label: 'EV-Daten',
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
