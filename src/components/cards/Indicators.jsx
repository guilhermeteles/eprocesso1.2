import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { groupsData } from '../indicatorsData';
import IconBadge from '../IconBadge';

export default function Indicators() {
    return (
        <div className='w-full h-full rounded-lg grid grid-cols-4 grid-rows-2 gap-1 p-1 '>
            {groupsData
                .flatMap((group) => group.items)
                .slice(0, 8) // Get the first 10 elements
                .map((indicator) => (
                    <div key={indicator.id} className='col-span-1 row-span-1'>
                        <IconBadge
                            text={indicator.status}
                            icon={<FontAwesomeIcon icon={indicator.icon} />}
                            color={indicator.color}
                        />
                    </div>
                ))}
        </div>
    )
}