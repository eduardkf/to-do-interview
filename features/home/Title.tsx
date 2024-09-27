import { Text } from '@radix-ui/themes'

export default function HomeTitle({ }) {

    return (<>
        <div className='flex flex-col gap-4'>
            <Text className='text-2xl font-medium'>
                Good Morning, user 👋
            </Text>
            <Text className='text-gray-500 text-lg font-extralight'>
                Today, Thursday 26 September 2024
            </Text>
        </div>

    </>)
}