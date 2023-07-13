import Form1 from "./Form1"
import Form2 from "./Form2"

export default function ItemCard({ member }) {
  return (
    <div className="grid grid-cols-9 gap-4 align-middle justify-center">
      <div className="flex col-span-1 p-4">
        <input
          type="checkbox"
          className="accent-green-400"
          checked={member.isCovered}
        ></input>
      </div>
      <div className="col-span-3 py-4 flex">
        <div
          className={`flex items-center justify-center rounded-full bg-${member.color} p-auto w-6 h-6`}
        >
          {member.initials}
        </div>{" "}
        {member.name}{" "}
        <span className="ml-1 text-gray-500">{` (${member.nickName})`}</span>
      </div>
      <div className="text-left col-span-1 p-4">
        <input type="radio" checked={member.isSub}></input>
      </div>
      <div className="text-left col-span-2">
        <Form2 insurance={member.insurance} />
      </div>
      <div className="text-left col-span-2">
        <Form1 id={member.id} />
      </div>
    </div>
  )
}
