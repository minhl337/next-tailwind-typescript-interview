export default function Form1({ id }) {
  return (
    <div className=" text-semibold sans text-gray-500">
      <form className="h-[44px] p-3 border border-gray-300 rounded-md">
        <div className="">
          <input type="text" className="w-full" placeholder={id}></input>
        </div>
      </form>
    </div>
  )
}
