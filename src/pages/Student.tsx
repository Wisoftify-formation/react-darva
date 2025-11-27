import {useStudentsCtx} from '../stores/students.context';
import { useParams } from 'react-router-dom';

export const Student = () => {
  const [students] = useStudentsCtx();
  const { id } = useParams();

  return (
    <div>
      {id}
      <h1>Student</h1>
    </div>
  )
}
