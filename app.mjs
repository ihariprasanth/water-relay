import { priorityQueue } from './queue.mjs';
const form = document.querySelector('form');
const queue = document.querySelector('#queue');
const summary = document.querySelector('#summary');
let reports = JSON.parse(localStorage.getItem('water-relay-reports') || '[]');

function render() {
  const items = priorityQueue(reports);
  summary.textContent = reports.length + ' reports across ' + items.length + ' locations';
  queue.replaceChildren();
  for (const item of items) {
    const row = document.createElement('li');
    row.textContent = item.ward + ' · ' + item.street + ' · ' + item.reports + ' reports · ' +
      item.hours + 'h · ' + (item.critical ? 'Essential site' : 'Residential') + ' · score ' + item.score;
    queue.append(row);
  }
}
function save() {
  localStorage.setItem('water-relay-reports', JSON.stringify(reports));
  render();
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const street = data.get('street').trim();
  if (!street) return;
  reports.push({ ward: data.get('ward'), street, hours: Number(data.get('hours')), site: data.get('site') });
  save();
  form.reset();
});
document.querySelector('#sample').onclick = () => {
  reports = [
    { ward: 'Ward 12', street: 'Market Road', hours: 10, site: 'Residential' },
    { ward: 'Ward 12', street: 'market road', hours: 15, site: 'Residential' },
    { ward: 'Ward 18', street: 'Station Road Clinic', hours: 4, site: 'Clinic' }
  ];
  save();
};
render();
