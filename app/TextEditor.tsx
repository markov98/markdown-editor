'use client'

import { TaskItem, TaskList } from '@tiptap/extension-list'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from './MenuBar'

const extensions = [StarterKit, TaskItem.configure({ nested: true }), TaskList]

export default function TextEditor() {
  const editor = useEditor({
    extensions,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'mx-auto my-8 min-h-[520px] w-[calc(100%-2rem)] max-w-4xl rounded-xl border border-slate-200 bg-white px-6 py-10 text-base leading-7 text-slate-700 shadow-xl shadow-slate-200/60 outline-none focus:ring-2 focus:ring-indigo-100 sm:px-12 [&_h1]:mb-5 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-slate-900 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_p]:my-4 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-400 [&_blockquote]:pl-4 [&_pre]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-slate-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-slate-100',
      },
    },
    content: ` Welcome to my Text Editor`,
  })

  return (
    <>
      {editor && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </>
  )
}