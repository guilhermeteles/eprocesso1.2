import Note from '../Note'

export default function Notes() {
    return (
        <div className="w-full h-full p-6 flex flex-col gap-6 overflow-y-auto">
            <h2>Notas Ativas</h2>
            <div className='flex flex-col gap-4'>
                <Note 
                author='Nota Usuário'
                date='31/12/2023'
                content='A presente nota tem o objetivo de esclarecer aspectos tributários pertinentes ao caso em análise, abordando a incidência de tributos e possíveis interpretações fiscais aplicáveis à situação em questão.'
                />
                <Note 
                author='Nome Equipe'
                date='31/12/2023'
                content='De acordo com a legislação tributária vigente e com base nos documentos apresentados.'
                />        
            </div>
        </div>
    )
}