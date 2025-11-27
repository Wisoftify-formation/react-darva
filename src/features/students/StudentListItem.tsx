import type { Student } from '../../types';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { StudentForm } from './StudentForm';
import { Link } from 'react-router-dom';

type StudentListItemProps = {
  student: Student,
  onDelete?: (student: Student) => Promise<void>,
  onEdit?: (student: Student) => Promise<void>,
}

export const StudentListItem = (props: StudentListItemProps) => {
  const { student, onDelete, onEdit } = props;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = async () => {
    if (!onDelete) return;
    if (!confirm('Are you sure you want to delete this student?')) return;

    await onDelete(student);
  }

  const handleEdit = async (_student: Student) => {
    if (!onEdit) return;

    await onEdit(_student);
    setIsEditModalOpen(false);
  }

  return (
    <div className="border p-4 rounded-md">
      <h2>{student.name} {student.surname}</h2>

      {onDelete ? 
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={handleDelete}
        >Delete</button>
    : null}

    {onEdit ? 
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setIsEditModalOpen(true)}
      >Edit</button>
    : null}

      {isEditModalOpen ? 
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <StudentForm onSubmit={handleEdit} student={student} />
        </Modal>
      : null}

      <Link to={`/students/${student.id}`} className="text-blue-500 hover:text-blue-600">View</Link>
    </div>
  )
}