import { IconButton, OutlinedIconButton } from "../IconButton"
import OverlayMenu from '../OverlayMenu'; 
import { useState } from 'react';
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MainMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [group3Items, setGroup3Items] = useState([]); // State to manage Group 3 items

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const addItemToGroup3 = (item, remove = false) => {
    if (remove) {
      // Remove item from Group 3
      setGroup3Items((prevItems) => prevItems.filter(i => i.name !== item.name)); // Adjust condition based on your logic
    } else {
      // Add the new item to Group 3
      setGroup3Items((prevItems) => [...prevItems, item]); // Add the new item to Group 3
    }
  };

 
    return (
        <div className="w-full h-full flex items-center justify-between px-4">
            <div className="flex gap-6 items-center overflow-auto">
                {/* Grupo 1 */}
                <div className="flex flex-col">
                    {/* <p className="text-xs">Informações do Processo</p> */}
                    <div className="flex space-x-1">
                        <IconButton
                            icon={faFileContract}
                            name="Home"
                            color="#1A4480"
                            textColor='#fff'
                        />
                        <IconButton
                            icon={faCalendarDays}
                            name="Profile"
                            color="#1A4480"
                            textColor='#fff'
                        />
                        <IconButton
                            icon={faInfoCircle}
                            name="Settings"
                            color="#1A4480"
                            textColor='#fff'
                        />
                        <IconButton
                            icon={faUser}
                            name="Notifications"
                            color="#1A4480"
                            textColor='#fff'
                        />
                        <IconButton
                            icon={faLock}
                            name="Messages"
                            color="#1A4480"
                            textColor='#fff'
                        />
                    </div>
                </div>
                {/* Grupo 2 */}
                <div className="flex flex-col">
                    {/* <p className="text-xs">Ações do Processo</p> */}
                    <div className="flex space-x-1">
                        <IconButton
                            icon={faArrowRight}
                            name="Analytics"
                            color="#0050D8"
                        />
                        <IconButton
                            icon={faArrowUp}
                            name="Reports"
                            color="#0050D8"
                        />
                        <IconButton
                            icon={faPeopleArrows}
                            name="Tasks"
                            color="#0050D8"
                        />
                        <IconButton
                            icon={faDownload}
                            name="Feedback"
                            color="#0050D8"
                        />
                        <IconButton
                            icon={faFile}
                            name="Help"
                            color="#0050D8"
                        />
                    </div>
                </div>
                {/* Grupo 3 */}
                <div className="flex flex-col">
                    {/* <p className="text-xs">Ações dos Documentos</p> */}
                    <div className="flex space-x-1">
                        <IconButton
                            icon={faFileContract}
                            name="Home"
                            color="#2672DE"
                            textColor='#fff'
                        />
                        <IconButton
                            icon={faCalendarDays}
                            name="Profile"
                            color="#2672DE"
                            textColor='#fff'
                        />
                        <IconButton
                            icon={faInfoCircle}
                            name="Settings"
                            color="#2672DE"
                            textColor='#fff'
                        />
                        <IconButton
                            icon={faUser}
                            name="Notifications"
                            color="#2672DE"
                            textColor='#fff'
                        />
                        <IconButton
                            icon={faLock}
                            name="Messages"
                            color="#2672DE"
                            textColor='#fff'
                        />
                    </div>
                </div>
                {/* Grupo 4 */}
                
            </div>
            <div className="flex flex-col grow ms-6">
                <div className="flex justify-between">
                    {/* <p className="text-xs">Favoritos</p> */}
                    <div className="flex space-x-1">
                        {group3Items.map((item, index) => (
                            <IconButton
                                key={index}
                                letter={item.letter}
                                name={item.name}
                                color={item.color} // Customize the color if needed
                                textColor="#3D4551"
                            />
                        ))}
                        </div>
                        <OutlinedIconButton
                            icon={faBars}
                            name="Profile"
                            onClick={toggleMenu}
                            textColor='#1A4480'
                        />
                    </div>

            </div>
            <OverlayMenu
                isOpen={isMenuOpen}
                onClose={closeMenu}
                onAddItemToGroup3={addItemToGroup3} // Pass function to add/remove items
            />
        </div>
    )
}