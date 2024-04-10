"use client";

import { createClient } from '@/utils/supabase/client';

export const CreateCountryForm = () => {
  const supabase = createClient();

  return (
    <div className='container mx-auto'>
    <form
      className="flex flex-col gap-4"
      onSubmit={async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name')?.toString();
        const flag = formData.get('flag')?.toString();

        const { data, error } = await supabase.from('countries').insert({ name, flag });

        console.log('data', data, error);
      }}
    >
      <input name="name" type="text" placeholder="Nombre" className='text-black' />
      <input name="flag" type="text" placeholder="Flag" className='text-black' />
      <button type="submit">Crear</button>
    </form>
    </div>
  );
};
