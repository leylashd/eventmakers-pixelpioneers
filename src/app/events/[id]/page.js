import { CreateForm } from "@/components/CreateForm";

import { Navbar } from "@/components/Navbar";

async function getEvent(id) {
    const res = await fetch(`https://eventmakers.devscale.id/events/${id}`);
    const { data } = await res.json();
    console.log(data);
    return data;
}



export default async function Page({ params }) {

    const { id } = params;
    const event = await getEvent(id);
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-screen-md  ">
                <div className="card  font-bold w-96 shadow-xl p-5 my-4 bg-slate-300">
                    <h1>{event.events.title}</h1>
                </div>
                <img className="w-full pt-3" src={event.events.image} />
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-xl font-bold mt-4">Details</h1>
                        <p>{event.events.description}</p>
                    </div>
                    <div className="flex items-start">
                        <div className="ml-4 card w-96 shadow-xl p-5 my-4 bg-slate-300 mt-3">
                            <p className="font-bold">Date:</p>
                            <p> {event.events.dateTime}</p>
                            <p className="font-bold mt-2">Author :</p>
                            <p> {event.events.author}</p>
                            <p className="font-bold mt-2">Join Now</p>
                            <CreateForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
