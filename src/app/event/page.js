import { EventList } from "@/components/EventList";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import React from "react";

export default async function Page() {
    const res = await fetch("https://eventmakers.devscale.id/events/", {
        cache: "no-store",
    });
    const { data } = await res.json();
    console.log(data);
    return (
        <main>
            <Navbar />
            <div className="grid grid-cols-3 mt-5 place-items-center">
                {data.map((item) => {
                    return <EventList id={item.events.id} title={item.events.title} image={item.events.image} datetime={item.events.dateTime} author={item.events.author} />;
                })}
            </div>
        </main>
    );
}
