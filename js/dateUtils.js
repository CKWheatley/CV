export class ExperienceDate {
  constructor(startDate, endDate = null) {
    this.startDate = ExperienceDate.parse(startDate);
    this.endDate = endDate ? ExperienceDate.parse(endDate) : new Date();
    this.isCurrent = endDate === null;

    if (this.endDate < this.startDate) {
      throw new RangeError('An experience end date cannot be earlier than its start date.');
    }
  }

  static parse(isoDate) {
    const parsedDate = new Date(`${isoDate}T00:00:00`);
    if (Number.isNaN(parsedDate.getTime())) {
      throw new TypeError(`Invalid ISO date: ${isoDate}`);
    }
    return parsedDate;
  }

  get displayRange() {
    const formatter = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' });
    return `${formatter.format(this.startDate)} – ${this.isCurrent ? 'Present' : formatter.format(this.endDate)}`;
  }

  get totalMonths() {
    const monthsApart = (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12
      + this.endDate.getMonth() - this.startDate.getMonth();
    return monthsApart + (this.endDate.getDate() >= this.startDate.getDate() ? 1 : 0);
  }

  get durationLabel() {
    const years = Math.floor(this.totalMonths / 12);
    const months = this.totalMonths % 12;
    const parts = [];
    if (years) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    if (months || !parts.length) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
    return parts.join(' ');
  }
}
