import Note from '../Note';

const notesData = [
    {
        author: 'Nota Usuário',
        date: '31/12/2023',
        content: 'A presente nota tem o objetivo de esclarecer aspectos tributários pertinentes ao caso em análise, abordando a incidência de tributos e possíveis interpretações fiscais aplicáveis à situação em questão.',
    },
    {
        author: 'Nome Equipe',
        date: '30/12/2023',
        content: 'De acordo com a legislação tributária vigente e com base nos documentos apresentados.',
    },
    {
        author: 'Processo',
        date: '29/12/2023',
        content: 'Este processo é relevante para entender a situação fiscal atual e suas implicações.',
    },
    {
        author: 'Nota Usuário',
        date: '28/12/2023',
        content: 'Recomenda-se a revisão dos documentos apresentados para garantir a conformidade.',
    },
    {
        author: 'Nome Equipe',
        date: '27/12/2023',
        content: 'Discussão sobre as melhores práticas tributárias aplicáveis ao caso.',
    },
    {
        author: 'Processo',
        date: '26/12/2023',
        content: 'Análise detalhada dos impactos fiscais do processo em questão.',
    },
];

export default function Notes() {
    // Randomly determine how many notes to show (between 0 and 4)
    const notesCount = Math.floor(Math.random() * 3); // 0 to 4
    const selectedNotes = new Set();

    // Select unique random notes
    while (selectedNotes.size < notesCount) {
        const randomIndex = Math.floor(Math.random() * notesData.length);
        selectedNotes.add(notesData[randomIndex]);
    }

    return (
        <div className="w-full h-full p-4 flex flex-col gap-6 overflow-y-auto">
            <div className='flex flex-col gap-4'>
                {notesCount === 0 ? (
                    <p className='text-sm'>No momento, não há notas disponíveis.</p>
                ) : (
                    Array.from(selectedNotes).map((note, index) => (
                        <Note 
                            key={index}
                            author={note.author}
                            date={note.date}
                            content={note.content}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
