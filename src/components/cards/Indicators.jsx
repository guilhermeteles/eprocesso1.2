import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { groupsData } from '../indicatorsData';
import IconBadge from '../IconBadge';

export default function Indicators() {
    return (
        <div className="w-full h-full p-4 overflow-auto">
            <div className="flex flex-wrap gap-2 py-2 mb-4">
                <div>
                    <div className="flex flex-wrap gap-2">
                        {groupsData.flatMap((group) => group.items).map((indicator) => (
                            <IconBadge
                                key={indicator.id}
                                text={indicator.status}
                                icon={<FontAwesomeIcon icon={indicator.icon} />}
                                color={indicator.color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}