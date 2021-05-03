class Course {
  private _name: string;
  public get name() {
    return this._name;
  }
  private _isAdvanced: boolean;
  public get isAdvanced() {
    return this._isAdvanced;
  }
  constructor(name: string, isAdvanced: boolean) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
}
class Person {
  private _name: string;
  public get name() {
    return this._name;
  }
  private _courses: Course[];
  public get courses() {
    return this._courses;
  }
  constructor(name: string, courses: Course[]) {
    this._name = name;
    this._courses = courses;
  }

  addCourse(course: Course) {
    this._courses.push(course);
  }
  removeCourse(
    course: Course,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(course);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

const person = new Person("이태희", [
  new Course("TDD", false),
  new Course("Refactoring", true),
]);

const numAdvancedCourses = person.courses.filter((c) => c.isAdvanced).length;

const basicCourseNames = ["Design Pattern"];

for (const name of basicCourseNames) {
  person.addCourse(new Course(name, false));
}
