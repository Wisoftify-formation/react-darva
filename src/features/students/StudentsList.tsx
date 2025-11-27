import type { Student } from '../../types';
import { StudentListItem } from './StudentListItem';
import { useMemo } from 'react';

type StudentListProps = {
  students: Student[],
  onDelete?: (student: Student) => Promise<void>,
  onEdit?: (student: Student) => Promise<void>
};

export const StudentList = (props: StudentListProps) => {
  const { students, onDelete, onEdit } = props;
  const _students = useMemo(() => students.sort((a, b) => a.name.localeCompare(b.name)), [students]);

  return (
    <div>
      {_students.map((student) => (
        <StudentListItem
          key={student.id}
          student={student}
          onDelete={onDelete}
          onEdit={onEdit}
        />))}
    </div>
  )
}