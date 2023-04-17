import withRouteGuard from 'HOCs/withRouteGuard';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default withRouteGuard(function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/article');
  });

  return <></>;
});
