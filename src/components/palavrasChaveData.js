import {
    faDatabase,
    faFileSignature,
    faFolderOpen,
    faUser,
    faClock,
    faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

export const groupsData = [
    {
        title: "Indicadores do Processo",
        color: "#92D9BB",
        items: [
            { id: 1, color: "#EDF5FF", icon: faDatabase, title: "Forma de Atualização do DEBCAD", status: "MANUAL" },
            { id: 2, color: "#FFF5C2", icon: faClipboardList, title: "Indicador Autenticação ou Assinatura Pendente", status: "N" },
            { id: 3, color: "#FFF2F5", icon: faFolderOpen, title: "Número Processo", status: "10265.000010/2024-73" },
            { id: 4, color: "#EDF5FF", icon: faClock, title: "Data do Protocolo", status: "15/08/2024" },
            { id: 5, color: "#FFF5C2", icon: faUser, title: "Nome da Equipe Formalizadora", status: "1º CC/MF/DF" },
            { id: 6, color: "#FFF2F5", icon: faFolderOpen, title: "Indicador se Existe Providência Aberta", status: "S" },
            { id: 7, color: "#EDF5FF", icon: faClipboardList, title: "Providência(s)", status: "Compartilha - PRONUCIAMENTO EM PROCESSO SOB CONTROLE DO Sei" },
            { id: 8, color: "#FFF5C2", icon: faFileSignature, title: "Nome do Último Documento Juntado", status: "FICHA DE IDENTIFICAÇÃO" },
            { id: 9, color: "#FFF2F5", icon: faClock, title: "Data Entrada Atividade", status: "15/08/2024" },
            { id: 10, color: "#EDF5FF", icon: faUser, title: "Situação", status: "CONFIRMADO" },
            { id: 11, color: "#FFF5C2", icon: faFolderOpen, title: "Tipo de Unidade", status: "CARF" },
        ],
    },
    {
        title: "Sobre o Interessado",
        color: "#92D9BB",
        items: [
            { id: 12, color: "#EDF5FF", icon: faUser, title: "Nome Contribuinte", status: "UOLIRHEZOWL UVORXRL WV XZIEZOSL" },
            { id: 13, color: "#FFF5C2", icon: faUser, title: "NI Contribuinte", status: "051.369.465-04" },
            { id: 14, color: "#FFF2F5", icon: faUser, title: "Tipo Contribuinte", status: "PF" },
            { id: 15, color: "#EDF5FF", icon: faUser, title: "Idade Contribuinte", status: "074" },
            { id: 16, color: "#FFF5C2", icon: faUser, title: "Indicador Contribuinte Diferenciado", status: "N" },
            { id: 17, color: "#FFF2F5", icon: faUser, title: "Indicador Contribuinte Especial", status: "N" },
        ],
    },
    {
        title: "Sobre o Julgamento",
        color: "#92D9BB",
        items: [
            { id: 18, color: "#EDF5FF", icon: faClipboardList, title: "Forma de Atualização do Indicador de Contencioso de Baixa Complexidade", status: "MANUAL" },
            { id: 19, color: "#FFF5C2", icon: faClipboardList, title: "Indicador de Julgamento em Lote", status: "N" },
            { id: 20, color: "#FFF2F5", icon: faClipboardList, title: "Indicador Sugestivo de Julgamento Síncrono", status: "NA" },
        ],
    },
    {
        title: "Sobre o Responsável",
        color: "#92D9BB",
        items: [
            { id: 21, color: "#EDF5FF", icon: faUser, title: "CPF do Responsável pelo Processo", status: "051.369.465-04" },
            { id: 22, color: "#FFF5C2", icon: faUser, title: "CPF do Responsável Anterior pelo Processo", status: "N/A" },
            { id: 23, color: "#FFF2F5", icon: faClock, title: "Data Distribuição Última", status: "15/08/2024" },
        ],
    },
];

export const getIndicatorById = (id) => {
    for (const group of groupsData) {
        const item = group.items.find(item => item.id === id);
        if (item) return item;
    }
    return null;
};
