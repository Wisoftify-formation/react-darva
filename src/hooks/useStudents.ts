import type { Student } from "../types";
import { useState, useCallback } from "react";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([{
    id: 1,
    name: 'John',
    surname: 'Doe'
  }]);

  const handleSubmit = useCallback(async (student: Student) => {
    setStudents(prev => [...prev, student]);
  }, []);

  const handleDelete = useCallback(async (student: Student) => {
    setStudents(prev => prev.filter(s => s.id !== student.id))
  }, []);

  const handleEdit = useCallback(async (student: Student) => {
    setStudents(prev => prev.map(i => i.id === student.id ? student : i))
  }, []);

  const reset = useCallback(() => {
    setStudents([]);
  }, []);

  return ({
    students, 
    handleSubmit,
    handleDelete,
    handleEdit,
    reset
  })
}

