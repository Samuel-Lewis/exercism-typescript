function insertSort<T>(array: T[], value: T): T[] {
  // Assume array is sorted
  const found = array.findIndex((v) => value < v);
  const pos = found === -1 ? array.length : found;
  array.splice(pos, 0, value);
  return array;
}

export default class GradeSchool {
  private roster = new Map<string, string[]>();

  studentRoster() {
    return new Map(
      [...this.roster.entries()].map(([k, v]) => [k, [...v]] as const)
    );
  }

  studentsInGrade(grade: number): string[] {
    return (this.roster.get(grade.toString()) || []).slice();
  }

  addStudent(name: string, grade: number) {
    const key = grade.toString();

    if (!this.roster.has(key)) {
      this.roster.set(key, []);
    }

    this.roster = new Map(
      [...this.roster.entries()]
        .map<[string, string[]]>(([k, v]) =>
          k === key ? [k, insertSort(v, name)] : [k, v]
        )
        .sort(([kl], [kr]) => kl.localeCompare(kr))
    );
  }
}
