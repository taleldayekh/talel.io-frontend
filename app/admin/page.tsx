'use client';

import withRouteGuard from 'HOCs/withRouteGuard';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default withRouteGuard(function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/article');
  });

  return <></>;
});
