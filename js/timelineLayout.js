

const overlaps = (first, second) => first.rowStart <= second.rowEnd && second.rowStart <= first.rowEnd;

export class TimelineLayoutEngine {
  constructor(monthHeight = 20) {
    this.monthHeight = monthHeight;
  }

  rowsForHeight(height) {
    return Math.max(1, Math.ceil(height / this.monthHeight));
  }

  arrange(items) {
    const lanes = [];
    const placed = new Map();
    [...items]
      .map((item) => ({ ...item, rowEnd: item.rowStart + item.rowSpan - 1 }))
      .sort((first, second) => second.durationMonths - first.durationMonths || first.rowStart - second.rowStart || first.id.localeCompare(second.id))
      .forEach((item) => {
        let lane = lanes.findIndex((laneItems) => laneItems.every((placedItem) => !overlaps(item, placedItem)));
        if (lane === -1) lane = lanes.length;
        (lanes[lane] ??= []).push(item);
        placed.set(item.id, { ...item, lane });
      });
    return { items: [...placed.values()], laneCount: lanes.length };
  }
}
