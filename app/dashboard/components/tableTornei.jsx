import { deleteItem, deleteTorneo, editTorneo } from "@/app/db/action";
import prisma from "@/app/db/db";
async function getData() {
    const data = await prisma.Tornei.findMany({
      orderBy: {
        createAt: "desc",
      },
    });
    return data;
  }

async function TableTornei() {
  const data = await getData();
  return (
    <div className="hidden lg:block text-white">
      <div className="grid grid-cols-6 bg-[var(--acc)] p-2 gap-2">
        <div className="col-span-1 text-center ">
          <h4>Nome Torneo</h4>
        </div>
        <div className="col-span-1 text-center ">
          <h4>Data Inizio</h4>
        </div>
        <div className="col-span-1 text-center ">
          <h4>Data Fine</h4>
        </div>
        <div className="col-span-1 text-center ">
          <h4>Tipologia Torneo</h4>
        </div>
        <div className="col-span-1 text-center ">
          <h4>Link Toreno</h4>
        </div>
        <div className="col-span-1 text-center ">
          <h4>Modifica</h4>
        </div>
      </div>
      <div className="h-[55vh] overflow-y-auto overflow-x-hidden pb-10">
        {data.map((item) => (
          <div key={item.id} className=" relative">
            <form className="px-2" action={editTorneo}>
              <div className="grid grid-cols-6  py-5 border-b-2 gap-2">
                <input name="id" value={item.id} type="hidden" />
                <div className="col-span-1 text-center ">
                  <input
                    className=" bg-transparent w-full text-center"
                    type="text"
                    defaultValue={item.nomeTorneo}
                    name="nomeTorneo"
                  />
                </div>
                <div className="col-span-1 text-center ">
                  <input
                    className=" bg-transparent w-full text-center"
                    type="date"
                    defaultValue={item.dataInizio}
                    name="dataInizio"
                  />
                </div>
                <div className="col-span-1 text-center ">
                  <input
                    className=" bg-transparent w-full text-center"
                    type="date"
                    defaultValue={item.dataFine}
                    name="dataFine"
                  />
                </div>
                <div className="col-span-1 text-center ">
                  <input
                    className=" bg-transparent w-full text-center "
                    type="text"
                    defaultValue={item.tipologiaTorneo}
                    name="tipologiaTorneo"
                  />
                </div>
                <div className="col-span-1 text-center ">
                  <input
                    className=" bg-transparent w-full text-center "
                    type="text"
                    defaultValue={item.linkTorneo}
                    name="linkTorneo"
                  />
                </div>
                <div className="col-span-1 text-center ">
                  <button className="rounded-md bg-[var(--acc)] w-full flex justify-center py-1 active:scale-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <form action={deleteTorneo} className="formDelete">
              <input name="id" value={item.id} type="hidden" />
              <button className="rounded-full h-9 w-9 bg-red-500 flex justify-center items-center active:scale-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableTornei;
