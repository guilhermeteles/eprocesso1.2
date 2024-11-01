const stats = [
    { name: 'Usuário', stat: '20' },
    { name: 'Atividade', stat: '30' },
    { name: 'Equipe', stat: '45' },
  ]

export default function Temporalidade() {
    return (
        <div className="flex flex-col h-full w-full rounded-lg">
            {/* <h2>Dias em Posse</h2> */}
            <div className="flex text-center divide-x h-full ">

                {stats.map((item) => (
                    <div key={item.name} className="w-full h-full flex items-center">
                        <div className="w-full flex flex-col ">
                            <div className="text-sm font-medium text-gray-500 leading-tight">{item.name}</div>
                            <div className="text-2xl font-semibold text-gray-900 leading-tight">{item.stat}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}