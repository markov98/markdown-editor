'use client'

import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  return <TextEditor />;
}
