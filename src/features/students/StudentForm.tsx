import { useState } from 'react';
import type { Student } from '../../types';

type StudentFormProps = {
  onSubmit: (student: Student) => Promise<void>,
  student?: Student
}

type StudentFormError = {
  name: string | null;
  surname: string | null;
}

export const StudentForm = ({onSubmit, student}: StudentFormProps) => {
  const [name, setName] = useState(student?.name || '');
  const [surname, setSurname] = useState(student?.surname || '');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<StudentFormError>({
    name: null,
    surname: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    let _errors: StudentFormError = {
      name: null,
      surname: null,
    };

    if (!name) _errors = {..._errors, name: 'Name is required'};
    if (!surname) _errors = {..._errors, surname: 'Surname is required'};
    
    setErrors(_errors);
    if (Object.values(_errors).some(e => e !== null)) {
      setLoading(false);
      return;
    };

    setErrors({name: null, surname: null});

    await onSubmit({
      id: student?.id ?? Math.floor(Math.random() * 1000000),
      name,
      surname
    });

    setName('');
    setSurname('');
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
        {errors.name ? (
          <span className="block text-sm text-red-600 mt-1">{errors.name}</span>
        ) : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
          Surname
        </label>
        <input
          id="surname"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
        {errors.surname ? (
          <span className="block text-sm text-red-600 mt-1">{errors.surname}</span>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  )
}