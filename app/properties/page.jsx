'use client';
import React from 'react';
import { useRouter, useParams } from 'next/navigation';

const PropertiesPage = () => {
  const router = useRouter();
  const {id} = useParams();

  return (
    <div>
        <button onClick={ () => router.push('/') }
        className="bg-blue-500 p-2">Go Home {id}</button>
    </div>
  )
}

export default PropertiesPage