export class DateTransform {
  static duration(durationMinutes: number) {
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes - hours * 60;
    return `${hours}ч ${minutes}м`;
  }

  static difference(date: string, durationMinutes: number) {
    const startDate = new Date(date);
    const start = `${startDate.getHours()}:${startDate.getMinutes()}`;
    const endDate = new Date(startDate.setMinutes(durationMinutes));
    const end = `${endDate.getHours()}:${endDate.getMinutes()}`;
    return `${start} - ${end}`
  }
}
