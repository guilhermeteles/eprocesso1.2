const stats = [
    { name: 'Usuário', stat: '20' },
    { name: 'Atividade', stat: '30' },
    { name: 'Equipe', stat: '45' },
  ]

export default function Temporalidade() {
    return (
        <div className="flex flex-col h-full w-full p-2">
            {/* <h2>Dias em Posse</h2> */}
            <div className="flex text-center divide-x h-full bg-gray-50 rounded-md">

                {stats.map((item) => (
                    <div key={item.name} className="w-full h-full flex items-center">
                        <div className="w-full">
                            <div className="text-sm font-medium text-gray-500">{item.name}</div>
                            <div className="text-2xl font-semibold tracking-tight text-gray-900">{item.stat}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}