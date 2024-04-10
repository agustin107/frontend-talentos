import { createServerClient } from '@/utils/supabase/server';
import Image from 'next/image';

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
    </div>
  );
}
