import { useEffect, useRef } from 'react'

export const DomRef = () => {
  // const inputRef = useRef<HTMLInputElement>(null);        //Todo jika anda tidak yakin ref nya tidak akan null
  const inputRef = useRef<HTMLInputElement>(null!);         //Todo jika anda yakin ref nya tidak akan null

  useEffect(() => {
    // inputRef.current?.focus()
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )
}
