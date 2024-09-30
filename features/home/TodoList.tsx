"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { fetchTodos } from "@/requests/requests";
import { Text } from '@radix-ui/themes';
import { useQuery } from "@tanstack/react-query";
import { Clock, MoreVerticalIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function TodoList() {

    const { data, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => fetchTodos()
    })

    return <>
        {!isLoading ? <>
            <div className="flex flex-col gap-3">
                {data?.todos.map((todo) =>
                    <div className="flex flex-row  justify-between items-center p-3 bg-white rounded-md">
                        <div className="flex flex-row gap-5 items-center">
                            <Checkbox />
                            <Text className="">{todo.todo}</Text>
                        </div>
                        <div className="flex flex-row gap-1">
                            <div className="bg-gray-100 gap-1 items-center flex flex-row p-2 rounded-lg">
                                <Clock size={15} className="text-gray-500" />
                                <Text className="text-sm text-gray-500 ">8:00 - 9:00</Text>
                            </div>
                            <div className="bg-gray-100 gap-1 items-center flex flex-row p-2 rounded-lg">
                                <MoreVerticalIcon size={15} className="text-gray-500" />
                            </div>
                        </div>

                    </div>)}
            </div>


        </> : <div className="flex flex-col gap-3">
            <Skeleton className="h-12  p-3 rounded-md" />
            <Skeleton className="h-12  p-3 rounded-md" />
            <Skeleton className="h-12  p-3 rounded-md" />
            <Skeleton className="h-12  p-3 rounded-md" />
            <Skeleton className="h-12  p-3 rounded-md" />
        </div>}

    </>
}