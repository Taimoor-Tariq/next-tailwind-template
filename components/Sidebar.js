import {
    AcademicCapIcon,
    CakeIcon,
    DatabaseIcon,
    PlusSmIcon
} from '@heroicons/react/solid';

export default function Sidebar() {
    const SideBarIcon = ({ icon, tooltip = "Tooltip 💛" }) => (
        <div className="sidebar-icon group">
            {icon}

            <span className='sidebar-tooltip group-hover:scale-100'>
                {tooltip}
            </span>
        </div>
    );

    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<AcademicCapIcon width={32} />} />
            <SideBarIcon icon={<CakeIcon width={32} />} />
            <SideBarIcon icon={<DatabaseIcon width={32} />} />
            <SideBarIcon icon={<PlusSmIcon width={32} />} />
        </div>
    )
}