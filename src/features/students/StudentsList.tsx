import type { Student } from '../../types';
import { StudentListItem } from './StudentListItem';

type StudentListProps = {
  students: Student[],
  onDelete?: (student: Student) => Promise<void>,
  onEdit?: (student: Student) => Promise<void>
};

export const StudentList = (props: StudentListProps) => {
  const { students, onDelete, onEdit } = props;

  return (
    <div>
      {students.map((student) => (
        <StudentListItem
          key={student.id}
          student={student}
          onDelete={onDelete}
          onEdit={onEdit}
        />))}
    </div>
  )
}