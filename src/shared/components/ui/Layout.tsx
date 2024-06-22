import { FaTrophy, FaUserFriends } from "react-icons/fa";
import { MdLocalFireDepartment, MdStorefront } from "react-icons/md";
import TapMenuButton from "../../assets/TapMenuButton.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = {
  0: "/friends",
  1: "/upgrade",
  2: "/home",
  3: "/store",
  4: "/contest",
};
const getActiveTab = () => {
  const pathName = window.location.pathname;
  if (pathName.includes("friends")) return 0;
  if (pathName.includes("upgrade")) return 1;
  if (pathName.includes("store")) return 3;
  if (pathName.includes("contest")) return 4;
  return 2;
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState(getActiveTab());
  
  const activeClass = "text-primary-light";
  const navigate = useNavigate();
  const handleNavigate = (activeTab: 0 | 1 | 2 | 3 | 4) => {
    setActiveTab(activeTab);
    navigate(tabs[activeTab]);
  };
  return (
    <>
      {children}
      <div className="fixed bottom-8 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border-[1px] border-neutral-500 bg-neutral-800 font-mono font-medium uppercase text-neutral-300 transition-colors">
        <div className="mx-auto grid h-full max-w-lg grid-cols-5">
          <div
            onClick={() => handleNavigate(0)}
            className={`${
              activeTab === 0 && activeClass
            } inline-flex flex-col items-center cursor-pointer justify-center rounded-s-full px-5`}
          >
            <FaUserFriends className="mb-1 h-7 w-7" />
            <p className="text-xs">Friends</p>
          </div>
          <div
            onClick={() => handleNavigate(1)}
            className={`${
              activeTab === 1 && activeClass
            } inline-flex flex-col items-center cursor-pointer justify-center px-5`}
          >
            <MdLocalFireDepartment className="mb-1 h-7 w-7" />
            <p className="text-xs">Upgrade</p>
          </div>
          <div className="relative flex items-center justify-center">
            {activeTab === 2 && (
              <div className="absolute -inset-1 bg-gradient-to-r from-warning to-secondary rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            )}
            <div
              onClick={() => handleNavigate(2)}
              className="absolute inline-flex flex-col h-24 w-24 rounded-full items-center justify-center"
            >
              <img src={TapMenuButton} alt="coin-btn" />
            </div>
          </div>
          <div
            onClick={() => handleNavigate(3)}
            className={`${
              activeTab === 3 && activeClass
            } inline-flex flex-col items-center cursor-pointer justify-center px-5`}
          >
            <MdStorefront className="mb-1 h-7 w-7" />
            <p className="text-xs">Store</p>
          </div>
          <div
            onClick={() => handleNavigate(4)}
            className={`${
              activeTab === 4 && activeClass
            } inline-flex flex-col items-center cursor-pointer justify-center rounded-e-full px-5`}
          >
            <FaTrophy className="mb-1 h-7 w-7" />
            <p className="text-xs">Contest</p>
          </div>
        </div>
      </div>
    </>
  );
};
