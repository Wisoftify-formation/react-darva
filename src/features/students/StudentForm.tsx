import { useState } from 'react';
import type { Student } from '../../types';
import {z, ZodType} from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type StudentFormProps = {
  onSubmit: (student: Student) => Promise<void>,
  student?: Student
}

const studentSchema = z.object({
  name: z.string().min(1, {message: "Le nom est requis"}),
  surname: z.string().min(1, {message: "Le prénom est requis"})
});
type StudentFormData = z.infer<typeof studentSchema>;

export const StudentForm = ({onSubmit, student}: StudentFormProps) => {
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, reset, formState: {errors}} = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      name: student?.name || '',
      surname: student?.surname || ''
    },
  })

  const _handleSubmit = async ({name, surname}: StudentFormData) => {
    if (loading) return;
    setLoading(true);
    await onSubmit({
      id: student?.id ?? Math.floor(Math.random() * 1000000),
      name,
      surname
    });
    setLoading(false);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(_handleSubmit)} className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
        {errors.name ? (
          <span className="block text-sm text-red-600 mt-1">{errors.name.message}</span>
        ) : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
          Surname
        </label>
        <input
          id="surname"
          type="text"
          {...register('surname')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
        {errors.surname ? (
          <span className="block text-sm text-red-600 mt-1">{errors.surname.message}</span>
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