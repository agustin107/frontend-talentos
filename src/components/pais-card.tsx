'use client';

import { Image } from '@chakra-ui/next-js';
import { Card, CardBody, Divider, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const PaisCard = ({ pais }: any) => {
  const router = useRouter();

  return (
    <Card
      maxW="sm"
      onClick={() => {
        router.push(`/dashboard/pais/${pais.name}`);
      }}
    >
      <Image
        width={400}
        height={200}
        src={pais.flag}
        alt={pais.name}
        borderRadius='lg'
        className="w-10 h-10"
      />
      <Divider />
      <CardBody>
        <Heading size="md">{pais.name}</Heading>
      </CardBody>
    </Card>
  );
};
