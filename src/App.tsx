import { useState } from 'react';
import type { Student } from './types';
import { StudentList } from './features/students/StudentsList';
import { StudentForm } from './features/students/StudentForm';

const App = () => {
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

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <StudentForm onSubmit={handleSubmit} />
      <StudentList
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  )
}

export default App;