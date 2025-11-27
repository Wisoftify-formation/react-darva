import {useStudentsCtx} from '../stores/students.context';
import { useParams } from 'react-router-dom';
import {useMemo} from 'react';

export const Student = () => {
  const [students] = useStudentsCtx();
  const { id } = useParams();

  const student = useMemo(() => {
    return students.find(i => `${i.id}` === id);
  }, [id, students]);

  return (
    <div>
      <h1>Student</h1>

      {student ? (
        <div className="mt-6 flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md max-w-md">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">ID</span>
            <span className="font-mono font-bold text-lg">{student.id}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">Prénom</span>
            <span className="font-semibold text-base">{student.name || <span className="italic text-gray-400">Non renseigné</span>}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">Nom</span>
            <span className="font-semibold text-base">{student.surname || <span className="italic text-gray-400">Non renseigné</span>}</span>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-lg">Aucun étudiant trouvé pour cet ID.</span>
        </div>
      )}
    </div>
  )
}
