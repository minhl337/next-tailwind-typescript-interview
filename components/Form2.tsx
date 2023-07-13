export default function Form2({ insurance }) {
  return (
    <div className=" text-semibold sans text-gray-500">
      <form className="h-[44px] p-3 border border-gray-300 rounded-md w-full">
        <div className="">
          <select className="w-full">
            <option value="Primary" selected={insurance === "Primary"}>
              Primary
            </option>
            <option value="Secondary" selected={insurance === "Secondary"}>
              Secondary
            </option>
          </select>
        </div>
      </form>
    </div>
  )
}
