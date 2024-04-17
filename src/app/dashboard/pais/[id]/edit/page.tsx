import { EditCountryForm } from '@/components/edit-country-form';
import { createServerClient } from '@/utils/supabase/server';

export default async function EditPais({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('countries')
    .select('*')
    .eq('name', params.id)
    .single();

  return <EditCountryForm country={data} />;
}
