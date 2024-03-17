import { useEffect, useState } from "react"
import copyIcon from './copy.svg'

/**
 * @name StringTextField
 * @description This component is used to display a text field for a string.
 * @param children The string to display in the text field.
 * @returns {JSX.Element} The StringTextField component.
 * @example
 * <StringTextField>Some text</StringTextField>
 * // returns a text field with the value "Some text"
 */

export const StringTextField = ({ children }: { children: string }) => {
  const [value, setValue] = useState(children);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true);
  }
  useEffect(() => {
    setValue(children)
  }, [children])

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 2000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copied])
  return (
    <>
      <div className="container-light flex flex-row">
        <input type="text" name="" id="" value={value} onChange={handleChange} className="h-6 w-full bg-transparent text-black placeholder:text-gray-600 text-center" placeholder="..." onFocus={(e) => { e.target.select() }} />
        <span className="ms-4 -my-1 hover:scale-110 transition-all h-full relative w-8">
          <button className="h-8 absolute w-8 right-0" onClick={handleCopy}><img src={copyIcon} alt="" width={32} height={32} /></button>
        </span>
      </div>
      {copied && <span className="w-full text-green-900 ">Copied to clipboard!</span>}
    </>
  )

}