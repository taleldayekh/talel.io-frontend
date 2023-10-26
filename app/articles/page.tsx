'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Articles() {
  const router = useRouter();

  useEffect(() => {
    // TODO: Temporary redirect until articles page is implemented
    router.push('/', { scroll: false });
  });

  return <></>;
}
