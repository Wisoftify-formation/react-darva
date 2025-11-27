import type { Student } from "../types";
import { useState } from "react";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([{
    id: 1,
    name: 'John',
    surname: 'Doe'
  }]);

  const handleSubmit = async (student: Student) => {
    setStudents([...students, student])
  }

  const handleDelete = async (student: Student) => {
    setStudents(students.filter(s => s.id !== student.id))
  }

  const handleEdit = async (student: Student) => {
    setStudents(students.map(i => i.id === student.id ? student : i))
  }

  return ({
    students, 
    handleSubmit,
    handleDelete,
    handleEdit
  })
}

