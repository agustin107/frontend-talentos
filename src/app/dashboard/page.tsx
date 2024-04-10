import { PaisCard } from '@/components/pais-card';
import { createServerClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data } = await supabase.from('countries').select('*');
  const user = await supabase.auth.getUser();

  if (user.error) {
    return redirect('/');
  }

  return (
    <div className="flex flex-col gap-4">
      <div>Paises</div>
      <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
        {data?.map((pais: any) => (
          <PaisCard pais={pais} key={pais.name.common} />
        ))}
      </div>
    </div>
  );
}
