import FormCreateTornei from "./formCreateTornei";
import TableTornei from "./tableTornei";

function TabTornei() {
    return ( <div className=" bg-[var(--dark-blue)] rounded-xl mb-5">
    <FormCreateTornei/>
    <TableTornei/>
   </div> );
}

export default TabTornei;