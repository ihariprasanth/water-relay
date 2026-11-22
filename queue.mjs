export function priorityQueue(reports) {
  const groups = new Map();
  for (const report of reports) {
    const street = report.street.trim().replace(/\s+/g, ' ');
    const key = report.ward + '|' + street.toLowerCase();
    const item = groups.get(key) ?? { key, street, ward: report.ward, reports: 0, hours: 0, critical: false };
    item.reports++;
    item.hours = Math.max(item.hours, report.hours);
    item.critical ||= report.site !== 'Residential';
    groups.set(key, item);
  }
  return [...groups.values()].map(item => ({ ...item,
    score: (item.critical ? 50 : 0) + Math.min(24, item.hours) + Math.min(10, item.reports)
  })).sort((a, b) => b.score - a.score || a.key.localeCompare(b.key));
}
