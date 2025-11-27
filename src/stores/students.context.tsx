import { createContext, useContext, useState } from "react";
import type { Student } from "../types";
import {useLocalStorage} from 'usehooks-ts';

const StudentsContext = createContext<[
  Student[],
  React.Dispatch<React.SetStateAction<Student[]>>,
  () => void
]>([[], () => {}, () => {}]);

export const StudentsProvider = ({ children }: { children: React.ReactNode }) => {
  const [students, setStudents, remove] = useLocalStorage<Student[]>('students-key', [])

  return (
    <StudentsContext.Provider value={[students, setStudents, remove]}>
      {children}
    </StudentsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStudentsCtx = () => {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error('useStudents must be used within an StudentsProvider');
  }
  return context;
};