


export const TypesList = ({ types }: { types: string[] }) => {



  return (
    <>
      <div className="flex flex-row flex-wrap w-32 gap-1 text-[0.65rem] capitalize">
        {types.map((type, key) => {
          return <span key={key} className="rounded-lg px-2 hover-type">{type}</span>
        })
        }
      </div>

    </>
  )

}