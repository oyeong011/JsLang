import Link from 'next/link';


export default function Home() {


  return (
    <div>
      <h4>Home</h4>
      <Link href={'/list'}>링크</Link>
    </div>

  )
}
