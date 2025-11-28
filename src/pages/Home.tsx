import { useState } from 'react';
import { StudentList } from '../features/students/StudentsList';
import { StudentForm } from '../features/students/StudentForm';
import { useStudents } from '../hooks/useStudents';
import { useInterval } from '../hooks/useInterval';
import { ErrorBoundary } from 'react-error-boundary';

const Home = () => {
  const {
    students,
    handleSubmit,
    handleDelete,
    handleEdit
  } = useStudents();

  const [ms, setMs] = useState(1000);
  const date = useInterval(ms);

  return (
    <div className="container p-4">
      <button onClick={() => {throw new Error('test')}}>x</button>
      <p>{date.toISOString()}</p>
      <input type="number" value={ms} onChange={(e) => setMs(Number(e.target.value))} />

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

export default Home;