import { useRouter } from 'next/router'

export default function ComicDetail() {
  const router = useRouter()
  return `ComicDetail: ${router.query.id}`;
}
