import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-16 p-3 bg-gray-800 text-white h-screen w-screen">
                {children}
            </div>
        </div>
    )
}