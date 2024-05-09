import { Link } from "react-router-dom";
import BottomNavLinks from "./BottomNavLinks";

import { FaEdit } from "react-icons/fa"
import { FaUser } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"
import { IoMdNotifications } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

const Profile = ()=> {

    return(
        <div>
            <h1 className="text-[1.5rem] font-semibold m-2">Profile</h1>
            <div className="m-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="rounded-[50%] w-[100px]" src="https://via.placeholder.com/50" alt="Profile pic" />
                    <div>
                        <h2 className="text-[20px] font-semibold">Username</h2>
                        <p className="text-green-500 text-[14px]">Lagos</p>
                    </div>
                </div>
                <FaEdit className="text-green-500 text-[30px]"/>
            </div>

            <div className="border-t border-black">
                <div className="flex items-center justify-between border-b border-black p-6">
                    <div className="flex items-center gap-2">
                        <FaUser />
                        <p className="font-semibold">Personal Information</p>
                    </div>
                    <FaArrowRight />
                </div>

                <div className="flex items-center justify-between border-b border-black p-6">
                    <Link to="/notifications" className="flex items-center gap-2">
                        <IoMdNotifications />
                        <p className="font-semibold">Notifications</p>
                    </Link>
                    <FaArrowRight />
                </div>

                <div className="flex items-center justify-between border-b border-black p-6">
                    <div className="flex items-center gap-2">
                        <FaHistory />
                        <p className="font-semibold">Voting History</p>
                    </div>
                    <FaArrowRight />
                </div>

                <div className="flex items-center justify-between border-b border-black p-6">
                    <div className="flex items-center gap-2">
                        <FaDeleteLeft />
                        <p className="font-semibold">Report</p>
                    </div>
                    <FaArrowRight />
                </div>

                <div className="flex items-center justify-between border-b border-black p-6">
                    <div className="flex items-center gap-2">
                        <FaSignOutAlt />
                        <p className="font-semibold">Log Out</p>
                    </div>
                    <FaArrowRight />
                </div>
            </div>
            <BottomNavLinks />
        </div>
    )
}

export default Profile