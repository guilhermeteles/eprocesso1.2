import { useState } from 'react';
import { Link } from 'react-router-dom';

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
  faStream,
  // faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

// Custom components
import { IconButton } from '../IconButton';

export default function Documents() {
  const [viewMode, setViewMode] = useState('tree'); // 'tree' or 'chronological'
  const [selectedDocuments, setSelectedDocuments] = useState([]); // To store selected documents
  const [expandedParents, setExpandedParents] = useState({}); // Track which parents are expanded
  const [chronos, setChronos] = useState('crescente'); // Set default view mode

  const documents = [
    {
      id: 1,
      name: 'Petição Inicial de Revisão Fiscal',
      date: '2024-10-13',
      children: [
        {
          id: 2,
          name: 'Citação de Notificação Fiscal',
          date: '2024-10-14',
          children: [
            {
              id: 3,
              name: 'Resposta à Citação',
              date: '2024-10-15',
              children: [
                {
                  id: 4,
                  name: 'Contestação de Débito Fiscal',
                  date: '2024-10-16',
                  children: [
                    {
                      id: 5,
                      name: 'Réplicas à Contestação',
                      date: '2024-10-17',
                      children: [
                        { id: 6, name: 'Juntada de Documentos Fiscais', date: '2024-10-18' },
                        { id: 7, name: 'Pedido de Tutela Provisória', date: '2024-10-19' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: 'Ação de Indenização Fiscal',
      date: '2024-10-20',
      children: [
        {
          id: 9,
          name: 'Laudo Pericial de Avaliação',
          date: '2024-10-21',
          children: [
            {
              id: 10,
              name: 'Manifestação sobre o Laudo',
              date: '2024-10-22',
              children: [
                {
                  id: 11,
                  name: 'Pedido de Produção de Provas',
                  date: '2024-10-23',
                  children: [
                    { id: 12, name: 'Provas Documentais de Pagamento', date: '2024-10-24' },
                    { id: 13, name: 'Provas Testemunhais sobre a Receita', date: '2024-10-25' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 14,
      name: 'Ação de Anulação de Lançamento',
      date: '2024-10-26',
      children: [
        {
          id: 15,
          name: 'Pedido de Revisão de Lançamento',
          date: '2024-10-27',
          children: [
            {
              id: 16,
              name: 'Decisão Judicial sobre o Lançamento',
              date: '2024-10-28',
              children: [
                {
                  id: 17,
                  name: 'Recurso de Apelação Tributária',
                  date: '2024-10-29',
                  children: [
                    { id: 18, name: 'Contrarrazões ao Recurso', date: '2024-10-30' },
                    { id: 19, name: 'Juntada de Novos Documentos', date: '2024-10-31' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 20,
      name: 'Embargos de Declaração Fiscal',
      date: '2024-11-01',
      children: [
        {
          id: 21,
          name: 'Decisão dos Embargos',
          date: '2024-11-02',
          children: [
            {
              id: 22,
              name: 'Recurso Especial em Matéria Tributária',
              date: '2024-11-03',
              children: [
                {
                  id: 23,
                  name: 'Petição de Admissibilidade',
                  date: '2024-11-04',
                  children: [
                    { id: 24, name: 'Parecer do Ministério Público', date: '2024-11-05' },
                    { id: 25, name: 'Juntada de Novos Fatos', date: '2024-11-06' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 26,
      name: 'Ação de Usucapião Tributária',
      date: '2024-11-07',
      children: [
        {
          id: 27,
          name: 'Certidão de Registro Fiscal',
          date: '2024-11-08',
          children: [
            {
              id: 28,
              name: 'Manifestação do Réu',
              date: '2024-11-09',
              children: [
                {
                  id: 29,
                  name: 'Relatório de Vistoria Fiscal',
                  date: '2024-11-10',
                  children: [
                    { id: 30, name: 'Pedido de Desocupação Fiscal', date: '2024-11-11' },
                    { id: 31, name: 'Protesto de Irregularidade Fiscal', date: '2024-11-12' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // Additional documents
    {
      id: 32,
      name: 'Ação de Execução Fiscal',
      date: '2024-11-13',
      children: [
        {
          id: 33,
          name: 'Notificação de Débito',
          date: '2024-11-14',
          children: [
            {
              id: 34,
              name: 'Contestação de Notificação',
              date: '2024-11-15',
              children: [
                {
                  id: 35,
                  name: 'Pedido de Revisão de Débito',
                  date: '2024-11-16',
                  children: [
                    { id: 36, name: 'Laudo Pericial de Revisão', date: '2024-11-17' },
                    { id: 37, name: 'Declaração de Imposto de Renda', date: '2024-11-18' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 38,
      name: 'Embargos à Execução Fiscal',
      date: '2024-11-19',
      children: [
        {
          id: 39,
          name: 'Pedido de Suspensão da Execução',
          date: '2024-11-20',
          children: [
            {
              id: 40,
              name: 'Decisão sobre Suspensão',
              date: '2024-11-21',
              children: [
                {
                  id: 41,
                  name: 'Recurso contra Decisão',
                  date: '2024-11-22',
                  children: [
                    { id: 42, name: 'Contrarrazões ao Recurso', date: '2024-11-23' },
                    { id: 43, name: 'Juntada de Documentos Adicionais', date: '2024-11-24' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 44,
      name: 'Ação Declaratória de Inexistência de Débito',
      date: '2024-11-25',
      children: [
        {
          id: 45,
          name: 'Petição Inicial de Ação Declaratória',
          date: '2024-11-26',
          children: [
            {
              id: 46,
              name: 'Audiência de Conciliação',
              date: '2024-11-27',
              children: [
                {
                  id: 47,
                  name: 'Relatório da Audiência',
                  date: '2024-11-28',
                  children: [
                    { id: 48, name: 'Decisão Judicial', date: '2024-11-29' },
                    { id: 49, name: 'Recurso de Apelação', date: '2024-11-30' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 50,
      name: 'Pedido de Restituição de Impostos',
      date: '2024-12-01',
      children: [
        {
          id: 51,
          name: 'Requerimento de Restituição',
          date: '2024-12-02',
          children: [
            {
              id: 52,
              name: 'Documentação Comprobatória',
              date: '2024-12-03',
              children: [
                {
                  id: 53,
                  name: 'Laudo de Restituição',
                  date: '2024-12-04',
                  children: [
                    { id: 54, name: 'Provas de Pagamento', date: '2024-12-05' },
                    { id: 55, name: 'Contrarrazões da Receita Federal', date: '2024-12-06' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

  
{
  id: 61,
  name: 'Ação de Execução Fiscal',
  date: '2024-11-28',
  children: [
    {
      id: 62,
      name: 'Petição Inicial de Execução',
      date: '2024-11-29',
      children: [
        {
          id: 63,
          name: 'Citação do Executado',
          date: '2024-11-30',
          children: [
            {
              id: 64,
              name: 'Resposta do Executado',
              date: '2024-12-01',
              children: [
                { id: 65, name: 'Impugnação à Execução', date: '2024-12-02' },
                {
                  id: 66,
                  name: 'Pedidos de Suspensão da Execução', // New document
                  date: '2024-12-03',
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 67,
      name: 'Análise de Garantias', // New section
      date: '2024-12-04',
      children: [
        {
          id: 68,
          name: 'Documentação de Garantia', // New document
          date: '2024-12-05',
          children: [],
        },
        {
          id: 69,
          name: 'Avaliação de Bens', // New document
          date: '2024-12-06',
          children: [],
        },
      ],
    },
  ],
},
{
  id: 70,
  name: 'Recurso de Revisão Administrativa',
  date: '2024-12-07',
  children: [
    {
      id: 71,
      name: 'Petição de Recurso',
      date: '2024-12-08',
      children: [
        {
          id: 72,
          name: 'Manifestação sobre a Decisão',
          date: '2024-12-09',
          children: [
            {
              id: 73,
              name: 'Documentos de Prova', // New document
              date: '2024-12-10',
              children: [],
            },
            {
              id: 74,
              name: 'Notas Fiscais e Comprovantes', // New document
              date: '2024-12-11',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 75,
      name: 'Acompanhamento do Recurso', // New section
      date: '2024-12-12',
      children: [
        {
          id: 76,
          name: 'Relatório de Status', // New document
          date: '2024-12-13',
          children: [],
        },
        {
          id: 77,
          name: 'Comunicações com o Órgão Fiscalizador', // New document
          date: '2024-12-14',
          children: [],
        },
      ],
    },
  ],
},
{
  id: 78,
  name: 'Revisão de Débito Fiscal',
  date: '2024-12-15',
  children: [
    {
      id: 79,
      name: 'Petição Inicial de Revisão',
      date: '2024-12-16',
      children: [
        {
          id: 80,
          name: 'Documentos Comprobatórios', // New document
          date: '2024-12-17',
          children: [],
        },
      ],
    },
    {
      id: 81,
      name: 'Análise de Legislação Aplicável', // New section
      date: '2024-12-18',
      children: [
        {
          id: 82,
          name: 'Notas Técnicas', // New document
          date: '2024-12-19',
          children: [],
        },
        {
          id: 83,
          name: 'Parecer Jurídico', // New document
          date: '2024-12-20',
          children: [],
        },
      ],
    },
  ],
},
{
  id: 84,
  name: 'Relatório de Auditoria Fiscal',
  date: '2024-12-21',
  children: [
    {
      id: 85,
      name: 'Resultados da Auditoria',
      date: '2024-12-22',
      children: [],
    },
    {
      id: 86,
      name: 'Recomendações Finais', // New document
      date: '2024-12-23',
      children: [],
    },
  ],
},
{
  id: 87,
  name: 'Recurso Ordinário em Matéria Tributária',
  date: '2024-12-24',
  children: [
    {
      id: 88,
      name: 'Petição de Interposição',
      date: '2024-12-25',
      children: [],
    },
    {
      id: 89,
      name: 'Manifestação sobre a Resposta', // New document
      date: '2024-12-26',
      children: [],
    },
  ],
},
  ];
  
  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };
  
  // Toggle between tree and chronological views
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'tree' ? 'chronological' : 'tree'));
  };

  // Handle checkbox change
  const handleCheckboxChange = (documentId) => {
    setSelectedDocuments((prevSelected) =>
      prevSelected.includes(documentId)
        ? prevSelected.filter((id) => id !== documentId)
        : [...prevSelected, documentId]
    );
  };

  // Toggle expanding/collapsing a parent document
  const toggleExpand = (parentId) => {
    setExpandedParents((prevExpanded) => ({
      ...prevExpanded,
      [parentId]: !prevExpanded[parentId],
    }));
  };

  // Expand all parent documents and their children recursively
  const expandAll = () => {
    const allExpanded = {};

    // Recursive function to expand a document and its children
    const expandDocument = (doc) => {
      allExpanded[doc.id] = true; // Mark the current document as expanded
      // If the document has children, expand each of them recursively
      if (doc.children && doc.children.length > 0) {
        doc.children.forEach((child) => expandDocument(child));
      }
    };

    // Loop through all top-level documents
    documents.forEach((doc) => expandDocument(doc)); // Expand all documents

    setExpandedParents(allExpanded); // Set the expanded state
  };

  // Contract all parent documents
  const contractAll = () => {
    setExpandedParents({});
  };

  // Clear selected documents
  const clearSelection = () => {
    setSelectedDocuments([]);
  };
  
  // Recursive function to render documents
  const renderDocuments = (docList, depth = 0) => {
    return (
      <ul className="ml-4"> {/* Fixed left margin for indentation */}
        {docList.map((doc) => (
          <li key={doc.id} className="mb-2" style={{ marginLeft: '20px' }}> {/* Fixed indentation for all levels */}
            <div className="flex items-center">
              {/* Conditionally render the chevron icon only if the document has children */}
              {doc.children && doc.children.length > 0 && (
                <button
                  onClick={() => toggleExpand(doc.id)}
                  className="mr-1.5"
                >
                  <FontAwesomeIcon
                    icon={
                      expandedParents[doc.id] ? faChevronDown : faChevronRight
                    }
                    className="text-gray-700 h-2.5 w-2.5 mb-[3.5px]"
                  />
                </button>
              )}
              <input
                type="checkbox"
                checked={selectedDocuments.includes(doc.id)}
                onChange={() => handleCheckboxChange(doc.id)}
                className="mr-1.5"
              />
              <div
  className=" whitespace-nowrap text-sm text-[#3D4551] hover:underline cursor-pointer"
>
  {doc.name}
</div>
            </div>

            {/* Child Documents (If expanded) */}
            {expandedParents[doc.id] && doc.children && doc.children.length > 0 && renderDocuments(doc.children, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };


// Recursive function to render documents with an option for reverse order
const renderChronologicalDocuments = (docList, reverse = false) => {
  // Reverse the list if the reverse parameter is true
  const sortedDocList = reverse ? [...docList].reverse() : docList;

  const listItems = sortedDocList.map((doc) => (
    <li key={doc.id} className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={selectedDocuments.includes(doc.id)}
        onChange={() => handleCheckboxChange(doc.id)}
        className="mr-2 self-start mt-1.5"
      />
      <div
        to="/pdf-reader"
        state={{ fileName: doc.name }} // Passing file name in state
        className=" whitespace-nowrap text-sm text-[#3D4551] hover:underline cursor-pointer"
      >
        {doc.name} &nbsp;
        <span className="text-xs text-[#919191]">{formatDate(doc.date)}</span>
      </div>
    </li>
  ));

  // If the current document has children, call the function recursively
  sortedDocList.forEach((doc) => {
    if (doc.children && doc.children.length > 0) {
      listItems.push(...renderChronologicalDocuments(doc.children, reverse).props.children);
    }
  });

  return <ul className="mt-2">{listItems}</ul>;
};


// Function to get all documents in a one-dimensional array and sort by date
const AllDocumentsArray = (documents) => {
const flattenDocuments = (docs) => {
  let result = []; // Initialize the result array

  docs.forEach((doc) => {
    result.push(doc); // Add the current document
    if (doc.children && doc.children.length > 0) {
      // Recursively flatten the children
      result = result.concat(flattenDocuments(doc.children));
    }
  });

  return result; // Return the flattened result
};

// Flatten the documents
const flattenedDocs = flattenDocuments(documents);

// Sort the flattened documents by date (assumes doc.date is a Date object or a string that can be parsed into a date)
const sortedDocs = flattenedDocs.sort((a, b) => {
  return new Date(a.date) - new Date(b.date); // Change to b.date - a.date for descending order
});

return sortedDocs; // Return the sorted flattened documents
};

// Component rendering the chronological view
const ChronologicalView = () => {
  const flattenDocuments = AllDocumentsArray(documents); // Get top-level documents

  return (
    <div>
      {renderChronologicalDocuments(flattenDocuments)}
    </div>
  );
};

  // Component rendering the chronological view
  const AntiChronologicalView = () => {
    const flattenDocuments = AllDocumentsArray(documents).reverse(); // Get top-level documents

    return (
      <div>
        {renderChronologicalDocuments(flattenDocuments)}
      </div>
    );
  };

  // Function to change view to chronological
  const showChronologicalView = () => {
    setChronos('crescente');
  };

  // Function to change view to anti-chronological
  const showAntiChronologicalView = () => {
    setChronos('decrescente');
  };

  return (
    <div className="rounded-lg overflow-hidden flex flex-col h-full w-full">
      <div className='pt-4 px-4 border-b border-[#EDEFF0]'>
        <div className="flex justify-between items-center mb-4">
        <div className="mb-2">
          {viewMode === 'tree' && (
            <div className="mt-4 flex justify-between text-sm gap-4">

              <button
                className="text-blue-500 underline hover:text-blue-700"
                onClick={contractAll}
              >
                Contrair Tudo
              </button>
              <button
                className="text-blue-500 underline hover:text-blue-700"
                onClick={expandAll}
              >
                Expandir Tudo
              </button>
            </div>
          )}
          {viewMode === 'chronological' && (
            <div className="mt-4 flex justify-between text-sm gap-4">

              <button
                className="text-blue-500 underline hover:text-blue-700"
                onClick={showChronologicalView}
              >
                Crescente
              </button>
              <button
                className="text-blue-500 underline hover:text-blue-700"
                onClick={showAntiChronologicalView}
              >
                Decrescente
              </button>
            </div>
          )}
        </div>
          {/* <h2 className="text-md font-medium text-[#3D4551]">Documentos</h2> */}
        
          <div className="flex items-center space-x-1 mt-1">
            <FontAwesomeIcon
              icon={faStream}
              className={`cursor-pointer text-md ${viewMode === 'tree' ? 'text-blue-500' : 'text-gray-400'}`}
              onClick={toggleViewMode}
            />
            <div className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={viewMode === 'chronological'}
                onChange={toggleViewMode}
                className="sr-only peer"
              />
              <div onClick={toggleViewMode} className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-white dark:border peer-checked:after:translate-x-full peer-checked:after:border after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-[#2672DE] after:border-[#2672DE] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white"></div>
            </div>
            <FontAwesomeIcon
              icon={faCalendar}
              className={`cursor-pointer text-md ${viewMode === 'chronological' ? 'text-blue-500' : 'text-gray-400'}`}
              onClick={toggleViewMode}
            />
          </div>
          
        </div>
        
      </div>

      {/* Document List */}
      <div className="p-4 rounded-md scroll-smooth overflow-y-auto h-auto grow overflow-x-">
        {viewMode === 'tree' ? (
          <ul>
            {documents.map((doc) => (
              <li key={doc.id} className="mb-2">
                <div className="flex items-center">
                  <button
                    onClick={() => toggleExpand(doc.id)}
                    className="mr-1.5"
                  >
                    <FontAwesomeIcon
                      icon={
                        expandedParents[doc.id] ? faChevronDown : faChevronRight
                      }
                      className="text-gray-700 h-2.5 w-2.5 mb-[3.5px]"
                    />
                  </button>
                  <input
                    type="checkbox"
                    checked={selectedDocuments.includes(doc.id)}
                    onChange={() => handleCheckboxChange(doc.id)}
                    className="mr-1.5"
                  />
                  <div
                    className="text-sm text-[#3D4551] hover:underline cursor-pointer whitespace-nowrap"
                  >
                    {doc.name}
                  </div>
                </div>

                {expandedParents[doc.id] && doc.children && doc.children.length > 0 && renderDocuments(doc.children)}
              </li>
            ))}
          </ul>
        ) : (
          <div>
            {chronos === 'crescente' ? <ChronologicalView /> : <AntiChronologicalView />}
          </div>
        )}
      </div>


      {/* Footer: Selected Documents and Actions */}
      {selectedDocuments.length > 0 && (
        <div className="mt-auto">
          <div className="flex bg-[#2672DE]">
            <span className="px-3 py-2 text-white text-xs grow m-auto font-medium">
              {selectedDocuments.length} item(ns) selecionado(s)
            </span>
            <button
              onClick={clearSelection}
              className="bg-[#F7F9FA] text-[#3D4551] pt-1 pb-1 px-2 text-xs my-2 me-2 rounded-sm "
            >
              Limpar
            </button>
          </div>
          <div className="flex space-x-2 bg-[#0050D8] flex p-2 rounded-b-lg">
            <div className="flex flex-col">
              <div className="flex space-x-1">
                <IconButton
                  icon="fa-solid fa-file-contract"
                  name="Home"
                  color="#1A4480"
                />
                <IconButton
                  icon="fa-solid fa-calendar-days"
                  name="Profile"
                  color="#1A4480"
                />
                <IconButton
                  icon="fa-solid fa-info-circle"
                  name="Settings"
                  color="#1A4480"
                />
                <IconButton
                  icon="fa-solid fa-user"
                  name="Notifications"
                  color="#1A4480"
                />
                <IconButton
                  icon="fa-solid fa-lock"
                  name="Messages"
                  color="#1A4480"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

