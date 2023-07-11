'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import withRouteGuard from 'HOCs/withRouteGuard';

export default withRouteGuard(function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/article')
  })

  return <></>
})
