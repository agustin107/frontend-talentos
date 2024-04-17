import { DeleteCountryButton } from '@/components/delete-country-button';
import { createServerClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function PaisPorIdPage({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase.from('countries').select('*').eq('name', params.id).single();

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center mt-4">
      <h3>{data?.name}</h3>

      <Image
        src={data?.flag}
        width={100}
        height={100}
        alt={data?.name}
      />

      <Link href={`/dashboard/pais/${data?.name}/edit`}>Editar</Link>
      <DeleteCountryButton country={data} />
    </div>
  );
}
