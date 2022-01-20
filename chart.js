const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'EG-Daten',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 60, 2, 20, 30, 45],
  }]
};

const fgdata = {
  labels: labels,
  datasets: [{
    label: 'EV-Daten',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 100, 5, 2, 220, 230, 145],
  }]
};



const config = {
  type: 'line',
  data: data,
  options: {}
};

const fgconfig = {
  type: 'line',
  data: fgdata,
  options: {}
};


