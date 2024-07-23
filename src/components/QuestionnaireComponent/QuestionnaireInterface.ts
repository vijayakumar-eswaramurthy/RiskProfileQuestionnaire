
export interface QuestionnaireInterface {
    id: string;
    question: string,
    options: Array<{
        id: string;
        text: string;
        points: number;
    }>;
}