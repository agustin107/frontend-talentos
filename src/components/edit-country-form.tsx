'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

interface EditCountryFormProps {
  country: any;
}

export const EditCountryForm = ({ country }: EditCountryFormProps) => {
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name')?.toString();
    const flag = formData.get('flag')?.toString();

    await supabase.from('countries').update({ name, flag }).eq('id', country.id);

    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        className="text-black"
        defaultValue={country?.name}
      />
      <input
        name="flag"
        type="text"
        placeholder="Flag"
        className="text-black"
        defaultValue={country?.flag}
      />
      <button type="submit">Editar</button>
    </form>
  );
};
