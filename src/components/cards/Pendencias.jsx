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
        icon: faOpenFolder,
        color: '#C7EFE2',
    },
    {
        text: 'Existe nota para o processo ativa.',
        icon: faNote,
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

    return (
        <div className="w-full h-full p-6">
            Pendencias
        </div>
    )
}