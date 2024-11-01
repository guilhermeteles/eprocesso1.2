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
    const NameDisplay = ({ name, children, size = "xs" }) => {
        const [copied, setCopied] = useState(false);
    
        const handleClick = async () => {
            // Copy the content to the clipboard
            try {
                await navigator.clipboard.writeText(children);
                setCopied(true);
    
                // Optionally, reset the state after a delay
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        };
    
        return (
            <div className='flex items-center'>
                {name && (
                    <span className={`font-bold uppercase text-${size} me-2`}>
                        {name}
                    </span>
                )}
                <div
                    onClick={handleClick}
                    className={`flex items-center cursor-pointer w-fit py-1 px-2 rounded-md transition-colors text-${size} ${
                        copied ? 'bg-green-200 text-green-600' : 'bg-gray-50 text-regular'
                    }`}
                >
                    {children}
                    {copied && (
                        <FontAwesomeIcon icon={faCheck} className='text-sm ml-2' />
                    )}
                </div>
            </div>
        );
    };
    
    
    return (
        <div className="w-full h-full grid grid-cols-2 overflow-auto items-center">
            <div className="space-y-2 m-auto w-full h-full">
                <div className="flex w-full h-full rounded-md px-">
                    <div className="flex flex-col w-full h-full items-center px-4">
                        <div className='flex gap-2 w-full h-full -ms-0.5'>
                            <button onClick={toggleFavorite} >
                                <FontAwesomeIcon
                                    icon={isFavorited ? faStarSolid : faStarRegular}
                                    color={isFavorited ? 'gold' : '#2672DE'}
                                    className="cursor-pointer text-sm"
                                />
                            </button>
                            <NameDisplay name="" size="xl">
                                {processoNumber}
                            </NameDisplay>
                            {/* <button
                                onClick={copyToClipboard}
                                className={`text-gray-500 text-lg font-semibold flex items-center gap-2 ${copied ? 'text-green-600' : 'text-[#2672DE]'} `}
                            >
                                {processoNumber}
                                {copied ? (
                                    <FontAwesomeIcon icon={faCheck} className='text-sm' />
                                ) : (
                                    <FontAwesomeIcon icon={faCopy} className='text-sm text-[#2672DE]' />
                                )}
                            </button> */}
                        </div>
                        <div className='w-full h-full items-start flex flex-col gap-1'>
                            <NameDisplay name="Nome">
                                Joana Nogueira Martins
                            </NameDisplay>
                            <NameDisplay name="NI">
                                123.456.789-01
                            </NameDisplay>
                        </div>
                   
                    </div>
                    
                </div>

            </div>
            <div className="space-y-2 m-auto w-full h-full p-2">
                <div className="flex flex-col w-full h-full rounded-md bg-gray-50 px-3">
                    <div className='w-full h-full items-start flex flex-col gap-1 justify-center p-2'>
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
            </div>
        </div>

    )
}