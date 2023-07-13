export default function ItemHeader() {
  return (
    <div className="grid grid-cols-9 gap-4 mb-3">
      <div className="flex col-span-1">Covered</div>
      <div className="col-span-3">Name</div>
      <div className="text-center col-span-1">Subscriber</div>
      <div className="text-left col-span-2">Insurance</div>
      <div className="text-left col-span-2">ID</div>
    </div>
  )
}
