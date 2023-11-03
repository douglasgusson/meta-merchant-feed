export type DateRange = {
  dateFrom: Date;
  dateTo: Date;
};

export namespace DateRange {
  export type Model = DateRange;

  export function formatter(dateRange: DateRange.Model): string {
    return `${dateRange.dateFrom.toISOString()}/${dateRange.dateTo.toISOString()}`;
  }
}
