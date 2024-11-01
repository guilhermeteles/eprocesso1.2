import { 
    faDatabase, 
    faFolder, 
    faCircleExclamation,
    faNoteSticky,
    faHand, 
    faClipboardList, 
    faFolderOpen
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pendings = [
    {
        text: 'Finalizar cadastro do processo no SIEF-Processos.',
        icon: faDatabase,
        color: '#FFE2D1',
    },
    {
        text: 'Existe SJD a ser avaliada.',
        icon: faFolder,
        color: '#FEE685',
    },
    {
        text: 'Existe documento a ser efetivado.',
        icon: faCircleExclamation,
        color: '#DFEACD',
    },
    {
        text: 'Existe providência aberta.',
        icon: faFolderOpen,
        color: '#C7EFE2',
    },
    {
        text: 'Existe nota para o processo ativa.',
        icon: faNoteSticky,
        color: '#C3EBFA',
    },
    {
        text: 'Exista alegação.',
        icon: faHand,
        color: '#E0E0FF',
    },
    {
        text: 'Processo está em atividade de análise de quesitos e a ficha de quesitos ainda não foi respondida.',
        icon: faClipboardList,
        color: '#EDEFF0',
    },
];

export default function Pendencias() {
    // Randomly determine how many pendings to show (between 0 and 4)
    const pendingCount = Math.floor(Math.random() * 4); // 0 to 4
    const randomPendings = new Set();

    // Select unique random pendings
    while (randomPendings.size < pendingCount) {
        const randomIndex = Math.floor(Math.random() * pendings.length);
        randomPendings.add(pendings[randomIndex]);
    }

    return (
        <div className="w-full h-fit gap-2 flex flex-col">
            {pendingCount === 0 ? (
                <p className='text-sm'>No momento, não há pendências no processo.</p>
            ) : (
                Array.from(randomPendings).map((pending, index) => (
                    <div key={index} className="flex items-center p-2 rounded-sm" style={{ backgroundColor: pending.color }}>
                        <FontAwesomeIcon icon={pending.icon} className="text-xl mr-2" />
                        <span className='text-xs'>{pending.text}</span>
                    </div>
                ))
            )}
        </div>
    );
}
