'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export const PaisCard = ({ pais }: any) => {
  const router = useRouter()

  return (
    <div
      key={pais.name}
      className="flex flex-col items-center gap-2 w-52"
      onClick={() => {
        router.push(`/dashboard/pais/${pais.name}`);
      }}
    >
      <Image
        width={40}
        height={40}
        src={pais.flag}
        alt={pais.name}
        className="w-10 h-10"
      />
      <span>{pais.name}</span>
    </div>
  );
};
