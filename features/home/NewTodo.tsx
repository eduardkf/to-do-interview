import {Text} from '@radix-ui/themes'
import { X } from 'lucide-react'

export default function NewTodo({ }) {
    return <>

    <div className="w-fit flex flex-row bg-black rounded-full p-3">
        <div className='flex-row flex items-center gap-2'>
            <X size={15} className='text-white'/>
            <Text className='text-white text-sm'>Create new todo</Text>
        </div>
    </div>
    </>
}