import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

export default function NumProcess() {
    const processoNumber = '10010.000037/0915-24';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(processoNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      };

      const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
      };
      const [copied, setCopied] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const NameDisplay = ({ name, children }) => {
        return (
            <div className='flex items-center'>
                <span className="font-bold uppercase text-xs me-2">{name}</span>
                <h2 className="text-md text-light w-fit bg-gray-50 py-1 px-3 rounded-sm">{children}</h2>
            </div>
        );
    };
    return (
        <div className="w-full h-full p-6 grid grid-cols-2 gap-6 overflow-auto items-center">
            <div className="space-y-4 w-fit m-auto">
                <div className="flex items-center mr-auto">
                    <button onClick={toggleFavorite} >
                        <FontAwesomeIcon
                            icon={isFavorited ? faStarSolid : faStarRegular}
                            color={isFavorited ? 'gold' : '#2672DE'}
                            className="cursor-pointer"
                        />
                    </button>
                    <div className="flex items-center">
                        <button
                            onClick={copyToClipboard}
                            className={`text-[#2672DE] text-2xl text-semibold flex items-center gap-2 ml-0.5 -mt-0.5 ${copied ? 'text-green-600' : 'text-[#2672DE]'} `}
                        >
                            {processoNumber}
                            {copied ? (
                                <FontAwesomeIcon icon={faCheck} className='text-sm' />
                            ) : (
                                <FontAwesomeIcon icon={faCopy} className='text-sm' />
                            )}
                        </button>
                    </div>
                </div>
                <div className="space-y-2 w-fit">
                    <NameDisplay name="Nome">
                        Joana Nogueira Martins
                    </NameDisplay>
                    <NameDisplay name="NI">
                        123.456.789-01
                    </NameDisplay>

                </div>

            </div>
            <div className="space-y-2 w-fit bg-blue-10 m-auto">
                <NameDisplay name="Situação SIEF-Processos">
                    Pendente
                </NameDisplay>
                <NameDisplay name="Nível de Sigilo Interno">
                    Básico
                </NameDisplay>
                <NameDisplay name="Nível de Sigilo Externo">
                    Básico
                </NameDisplay>
            </div>
        </div>

    )
}