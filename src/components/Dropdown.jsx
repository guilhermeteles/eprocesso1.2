import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Palavra-chave
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
            >
              <PencilSquareIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500 group-data-[focus]:forced-colors:text-[HighlightText]"
              />
              Edit
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
            >
              <DocumentDuplicateIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500 group-data-[focus]:forced-colors:text-[HighlightText]"
              />
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
            >
              <ArchiveBoxIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500 group-data-[focus]:forced-colors:text-[HighlightText]"
              />
              Archive
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
            >
              <ArrowRightCircleIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500 group-data-[focus]:forced-colors:text-[HighlightText]"
              />
              Move
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
            >
              <UserPlusIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500 group-data-[focus]:forced-colors:text-[HighlightText]"
              />
              Share
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
            >
              <HeartIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500 group-data-[focus]:forced-colors:text-[HighlightText]"
              />
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
            >
              <TrashIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500 group-data-[focus]:forced-colors:text-[HighlightText]"
              />
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
