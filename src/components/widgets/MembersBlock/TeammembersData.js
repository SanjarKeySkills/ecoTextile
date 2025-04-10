// import { getMemberPathById } from "../../../server/api/teamMembers/id";

const membersData = [
    {
        id: "1",
        name: "Аскат Мажитов",
        annotation:
            "Руководитель и основатель проекта. Более 15 лет опыта в сфере консаллтинга.",
        // image: getMemberPathById(1),
        image: require("../../../assets/team/askat_mazhitov.png"),
        jobExp: "Руководитель и основатель проекта. Более 15 лет опыта в сфере консаллтинга. \n Основатель проекта EcotextilePlus",
        edu: "Университет Ала-Тоо, специальность - «экономика» (2010).",
        competence:
            "Финансы; \n Внутренний аудит; \n Стратегическое планирование.",
        sertif: "ESG",
    },
    {
        id: "2",
        name: "Санжар Аманов",
        annotation: "Более 10 лет опыта в сфере производства.",
        // image: getMemberPathById(2),
        image: require("../../../assets/team/sanjar_amanov.png"),
        jobExp: "Более 10 лет опыта в сфере производства.",
        edu: "Кыргызский государственный университет строительства, транспорта и архитектуры, специальность - «международные экономические отношения» (1998).",
        competence: "Финансы; \n Внутренний аудит; \n Экология.",
        sertif: "Сертификат: Борьба со смогом",
    },
    {
        id: "3",
        name: "Санжар Абакиров",
        annotation: "Более 5 лет опыта в IT.",
        // image: getMemberPathById(3),
        image: require("../../../assets/team/sanjar_abakirov.png"),
        jobExp: "Более 5 лет опыта в IT сфере и разработке фронтенд проектов.",
        edu: "КРСУ им Е. Б. Н.",
        competence:
            "Программирование; \n Веб дизайн; \n Стратегическое планирование.",
        sertif: "Экология и Айти",
    },
    {
        id: "4",
        name: "Наруто мырза",
        annotation: "Более 5 лет опыта в швейке.",
        // image: getMemberPathById(3),
        image: require("../../../assets/team/sanjar_amanov.png"),
        jobExp: "Более 5 лет опыта в сфере швейки.",
        edu: "КРСУ им Е. Б. Н.",
        competence: "Швейка.",
        sertif: "Швейка",
    },
    {
        id: "5",
        name: "Тоторо байке",
        annotation: "Более 5 лет опыта в швейке.",
        // image: getMemberPathById(3),
        image: require("../../../assets/team/totoro.png"),
        jobExp: "Более 5 лет опыта в сфере швейки.",
        edu: "КРСУ им Е. Б. Н.",
        competence: "Швейка.",
        sertif: "Швейка",
    },
    {
        id: "6",
        name: "Сайтама мырза",
        annotation: "Более 5 лет опыта в швейке.",
        // image: getMemberPathById(3),
        image: require("../../../assets/team/saitama.png"),
        jobExp: "Более 5 лет опыта в сфере швейки.",
        edu: "КРСУ им Е. Б. Н.",
        competence: "Швейка.",
        sertif: "Швейка",
    },
];

export default membersData;
