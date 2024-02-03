import Input from '@/components/input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchInput(props) {
  return (
    <div className="flex items-center relative my-2">
      <Input className="indent-2" {...props} />
      <MagnifyingGlassIcon className="h-3 absolute -mt-1.5 text-gray-500 ml-1 top-[50%]" />
    </div>
  )
}
