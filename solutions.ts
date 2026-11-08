
function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

function processInput(input: string | number | boolean): string | number {
  switch (typeof input) {
    case "string":
      return input.trim().toLowerCase();
    case "number":
      return input * 10;
    case "boolean":
      return input ? "Active" : "Inactive";
  }
}

type Coordinate = readonly [number, number, string];

function formatCoordinate([latitude, longitude, locationName]: Coordinate): string {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudent: number): Course[] {
  return courses.filter((course) => course.students >= minStudent && course.isPublished);
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout(() => resolve("Access Granted"), 1000);
  });
}
