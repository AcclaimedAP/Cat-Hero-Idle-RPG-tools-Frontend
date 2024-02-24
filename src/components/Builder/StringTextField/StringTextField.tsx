import { useEffect, useState } from "react"



export const StringTextField = ({ children }: { children: string }) => {
  const [value, setValue] = useState(children)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    setValue(children)
  }, [children])
  return (
    <>
      <div className="container-light">
        <input type="text" name="" id="" value={value} onChange={handleChange} className="h-6 w-full bg-transparent text-black placeholder:text-gray-600" placeholder="..." />
      </div>
    </>
  )

}