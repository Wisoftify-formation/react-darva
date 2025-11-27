import type { Student } from "../types";
import { useCallback } from "react";
import { useStudentsCtx } from "../stores/students.context";

export const useStudents = () => {
  const [students, setStudents] = useStudentsCtx();

  const handleSubmit = useCallback(async (student: Student) => {
    setStudents(prev => [...prev, student]);
  }, [setStudents]);

  const handleDelete = useCallback(async (student: Student) => {
    setStudents(prev => prev.filter(s => s.id !== student.id))
  }, [setStudents]);

  const handleEdit = useCallback(async (student: Student) => {
    setStudents(prev => prev.map(i => i.id === student.id ? student : i))
  }, [setStudents]);

  const reset = useCallback(() => {
    setStudents([]);
  }, [setStudents]);

  return ({
    students, 
    handleSubmit,
    handleDelete,
    handleEdit,
    reset
  })
}

