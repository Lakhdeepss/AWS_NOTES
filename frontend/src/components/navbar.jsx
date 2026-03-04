import { PlusIcon } from "lucide-react";
import { Link } from "react-router";
const NavBar = () => {
    return (
        <header className="bg-base-300 border-b border-base-content/10  ">
            <div className="mx-auto max-w-6xl flex h-16 items-center justify-between p-4">
                <h1 className="text-primary text-3xl font-bold font-mono tracking-tight">ThinkBoard</h1>
                <div className="flex items-center gap-4">
                    <Link to="/createPage" className="btn btn-primary">
                        <PlusIcon></PlusIcon>
                        New Note</Link>
                </div>
            </div>
        </header>
    )
}
export default NavBar;  