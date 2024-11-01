import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { groupsData } from "../palavrasChaveData";

// Dropdown Component with Enhanced Accessibility and Styling
export function Dropdown({ selectedItem, onSelect }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="text-xs w-full justify-between"
          aria-label="Select keyword group"
        >
          <span className="truncate">{selectedItem.title}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {groupsData.map((group) => (
          <React.Fragment key={group.title}>
            {group.items.map(item => (
              <DropdownMenuItem
                key={item.id}
                onSelect={() => onSelect(item.title, item.status)} // Call onSelect with item title and status
                className="cursor-pointer w-fit"
              >
                {item.title}
              </DropdownMenuItem>
            ))}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// CustomKeyWord Component with Default State Handling
export default function CustomKeyWord() {
  const [selectedItem, setSelectedItem] = useState({
    title: "Palavras-chave", // Initial title
    status: ""
  });

  const handleSelect = (title, status) => {
    setSelectedItem({ title, status }); // Update the selected item state
  };

  return (
    <div className="w-full h-full p-4 max-w-xs mx-auto">
      <div className="space-y-4">
        <Dropdown selectedItem={selectedItem} onSelect={handleSelect} />
        
        <div className="bg-gray-50 p-3 rounded-md">
          {selectedItem.title === "Palavras-chave" ? (
            <p className="text-gray-500 text-sm">
              Escolha um grupo de palavras-chave.
            </p>
          ) : (
            <div>
              <p className="font-semibold">{selectedItem.title}</p>
              {selectedItem.status && (
                <p className="text-sm text-gray-600 mt-1">
                  Status: {selectedItem.status}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
