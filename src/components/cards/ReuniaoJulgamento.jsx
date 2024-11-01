import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const trialDatesData = [
    {
        title: 'Audiência de Conciliação',
        date: '15/11/2023',
    },
    {
        title: 'Julgamento de Apelação',
        date: '20/11/2023',
    },
    {
        title: 'Sessão de Julgamento',
        date: '25/11/2023',
    },
    {
        title: 'Audiência de Instrução',
        date: '30/11/2023',
    },
    {
        title: 'Reunião de Mediação',
        date: '05/12/2023',
    },
    {
        title: 'Julgamento de Embargos',
        date: '10/12/2023',
    },
];

export default function ReuniaoJulgamento() {
    // Randomly determine how many trial dates to show (between 0 and 4)
    const trialDatesCount = Math.floor(Math.random() * 2); // 0 to 4
    const selectedTrialDates = new Set();

    // Select unique random trial dates
    while (selectedTrialDates.size < trialDatesCount) {
        const randomIndex = Math.floor(Math.random() * trialDatesData.length);
        selectedTrialDates.add(trialDatesData[randomIndex]);
    }

    return (
        <div className="w-full h-full flex flex-col gap-4">
            {trialDatesCount === 0 ? (
                <p className='text-sm'>No momento, não há datas de julgamento disponíveis.</p>
            ) : (
                Array.from(selectedTrialDates).map((trialDate, index) => (
                    <div key={index} className="p-2 border rounded-md">
                        <div className='flex text-xs items-center'>
                            <FontAwesomeIcon icon={faCalendarDays} className="mr-2 text-sm " />
                            <p>{trialDate.date}</p>
                        </div>
                    
                        
                        <div>
                            <h3 className="font-semibold">{trialDate.title}</h3>
                            
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
