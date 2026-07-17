import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Covers the fundamentals of programming, algorithms, problem-solving, and basic computer systems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MTH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Introduces vectors, matrices, linear transformations, eigenvalues, and their applications in science and engineering.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ECE301",
    name: "Digital Electronics",
    department: "Electronics and Communication Engineering",
    description:
      "Explores digital logic, Boolean algebra, combinational and sequential circuits, and digital system design.",
    createdAt: new Date().toISOString(),
  },
];
