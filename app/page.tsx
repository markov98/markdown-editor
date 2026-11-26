import { Suspense } from 'react'
import TextEditor from './TextEditor'

export default function Home() {
  return (
    <Suspense fallback={null}>
      <TextEditor />
    </Suspense>
  )
}
