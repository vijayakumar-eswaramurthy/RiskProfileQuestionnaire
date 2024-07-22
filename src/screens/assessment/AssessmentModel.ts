/**
 * HomeModel : 
 *         - Maintain all static text content here, which can be modified later without disturbing component files.
 *         - This content can be moved to CMS system on need basis. 
 */
import { QuestionnaireInterface } from "../../components/QuestionnaireComponent/QuestionnaireInterface";
export const questionsModel: QuestionnaireInterface[] = [
    {
        id: "1",
        question: "What is your current age range?",
        options: [
            {
                id: "1",
                text: "Above 65 or under 18",
                points: 1
            },
            {
                id: "2",
                text: "Between 61 and 65",
                points: 2
            },
            {
                id: "3",
                text: "Between 56 and 60",
                points: 3
            },
            {
                id: "4",
                text: "Between 51 and 55",
                points: 4
            },
            {
                id: "5",
                text: "Between 18 and 50",
                points: 5
            },
        ]
    },
    {
        id: "2",
        question: "In general, what is the time period intended for your financial investment?",
        options: [
            {
                id: "1",
                text: "Less than 1 year",
                points: 1
            },
            {
                id: "2",
                text: "1 year to less than 3 years",
                points: 2
            },
            {
                id: "3",
                text: "3 years to less than 5 years",
                points: 3
            },
            {
                id: "4",
                text: "5 years to less than 8 years",
                points: 4
            },
            {
                id: "5",
                text: "8 years or above",
                points: 5
            },
        ]
    },
    {
        id: "3",
        question: "How long have you been investing in financial products that fluctuate in value ?",
        options: [
            {
                id: "1",
                text: "No experience",
                points: 1
            },
            {
                id: "2",
                text: "Less than 2 years",
                points: 2
            },
            {
                id: "3",
                text: "Between 2 and 4 years",
                points: 3
            },
            {
                id: "4",
                text: "Between 5 and 7 years",
                points: 4
            },
            {
                id: "5",
                text: "More than 7 years",
                points: 5
            },
        ]
    },
    {
        id: "4",
        question: "Which channel have you used or are currently using, more frequently, to obtain investment knowledge?",
        options: [
            {
                id: "1",
                text: "No and/or not interested in any investment knowledge",
                points: 1
            },
            {
                id: "2",
                text: "Discuss investment or finance related topics with friends, relatives and/or colleagues",
                points: 2
            },
            {
                id: "3",
                text: "Read and/or listen to investment or finance related news",
                points: 3
            },
            {
                id: "4",
                text: "Review investment or finance related materials from various sources",
                points: 4
            },
            {
                id: "5",
                text: "Research investment or finance related topics or attend investment or finance related classes, forums, presentations, seminars or workshops",
                points: 5
            },
        ]
    },
    {
        id: "5",
        question: "Which financial products have you ever held or are you currently holding ?",
        options: [
            {
                id: "1",
                text: "Cash, bank deposits, certificates of deposit, capital-protected products",
                points: 1
            },
            {
                id: "2",
                text: "Bonds, bond funds",
                points: 2
            },
            {
                id: "3",
                text: "Foreign currencies, non-capital-protected currency-linked structured products",
                points: 3
            },
            {
                id: "4",
                text: "Commodities, investment-linked insurance products, open-end mutual funds (excluding money market funds and bond funds), non-capital-protected equity-linked structured products",
                points: 4
            },
            {
                id: "5",
                text: "Stocks, derivatives including but not limited to options, warrants and futures contracts",
                points: 5
            },
        ]
    },
    {
        id: "6",
        question: "What percentage of your total liquid assets is currently held in financial products that fluctuate in value?",
        options: [
            {
                id: "1",
                text: "0%",
                points: 1
            },
            {
                id: "2",
                text: "More than 0% and less than or equal to 10%",
                points: 2
            },
            {
                id: "3",
                text: "More than 10% and less than or equal to 20%",
                points: 3
            },
            {
                id: "4",
                text: "More than 20% and less than or equal to 30%",
                points: 4
            },
            {
                id: "5",
                text: "More than 30%",
                points: 5
            },
        ]
    },
    {
        id: "7",
        question: "What level of fluctuation in the value of a financial product would be generally acceptable to you?",
        options: [
            {
                id: "1",
                text: "Less than 10% up or down",
                points: 1
            },
            {
                id: "2",
                text: "Between 10% up and 10% down",
                points: 2
            },
            {
                id: "3",
                text: "Between 15% up and 15% down",
                points: 3
            },
            {
                id: "4",
                text: "Between 20% up and 20% down",
                points: 4
            },
            {
                id: "5",
                text: "More than 20% up or down",
                points: 5
            },
        ]
    },
    {
        id: "8",
        question: "What percentage of your monthly income on average could be invested in financial products that fluctuate in value ?",
        options: [
            {
                id: "1",
                text: "0%",
                points: 1
            },
            {
                id: "2",
                text: "More than 0% and less than or equal to 10%",
                points: 2
            },
            {
                id: "3",
                text: "More than 10% and less than or equal to 20%",
                points: 3
            },
            {
                id: "4",
                text: "More than 20% and less than or equal to 30%",
                points: 4
            },
            {
                id: "5",
                text: "More than 30%",
                points: 5
            },
        ]
    },
    {
        id: "9",
        question: "How many months of your normal expenses could be covered by your reserved liquid assets in case of an unexpected event ?",
        options: [
            {
                id: "1",
                text: "No reserved liquid assets for any unexpected event",
                points: 1
            },
            {
                id: "2",
                text: "Less than 3 months",
                points: 2
            },
            {
                id: "3",
                text: "Between 3 months and 6 months",
                points: 3
            },
            {
                id: "4",
                text: "Between 6 months and 9 months",
                points: 4
            },
            {
                id: "5",
                text: "More than 9 months",
                points: 5
            },
        ]
    },
    {
        id: "10",
        question: "What is your current investment objective?",
        options: [
            {
                id: "1",
                text: "Security of capital is most important",
                points: 1
            },
            {
                id: "2",
                text: "Security of capital is important",
                points: 2
            },
            {
                id: "3",
                text: "Balance between security and growth of capital is important",
                points: 3
            },
            {
                id: "4",
                text: "Growth of capital is important",
                points: 4
            },
            {
                id: "5",
                text: "Growth of capital is most important",
                points: 5
            },
        ]
    }
];