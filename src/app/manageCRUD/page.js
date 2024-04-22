import { CreateForm } from '@/components/manage/createForm';
import { EventTable } from '@/components/manage/eventTable';
import React from 'react'

export default async function Page() {
    const res = await fetch('https://eventmakers.devscale.id/events')
    const {data} = await res.json()
    // console.log(data);

    return(
        <main>
            <CreateForm/>
        </main>
        
    )



}

