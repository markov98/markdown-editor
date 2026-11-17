'use client'

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'px-2 py-1 border border-gray-300 rounded-md max-w-[800px] min-h-[100px] mx-auto',
      },
    },
  })

  return <EditorContent editor={editor} />
}

export default TextEditor;