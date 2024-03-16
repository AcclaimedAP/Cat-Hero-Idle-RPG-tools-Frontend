

export const Ribbon = ({ children, width }: { children: string, width?: string }) => {
  const widthClass = width === 'small' ? "w-[15.5rem]" : width === 'large' ? "w-[23rem]" : width === "medium" ? "w-[20.5rem]" : "w-[18rem]"
  return (
    <>
      <div className={`${widthClass} hover-banner absolute h-10 top-3 left-1/2 -translate-x-1/2`}>
        <span className='text-[0.9rem] absolute top-2 text-nowrap w-full text-center uppercase'>{children}</span>
      </div>
    </>
  )
}