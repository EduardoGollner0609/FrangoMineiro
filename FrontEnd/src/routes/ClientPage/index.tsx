import { Outlet } from "react-router-dom";
import SideBarNavegation from "../../components/SideBarNavegation";

export default function ClientPage() {
    return (
        <>
            <SideBarNavegation />
            <main>
                <Outlet />
            </main>
        </>
    );
}