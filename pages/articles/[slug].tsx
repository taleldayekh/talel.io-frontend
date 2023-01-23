import { useRouter } from 'next/router';

export default function Article() {
    const router = useRouter();
    const { slug } = router.query;

    return <></>
}
