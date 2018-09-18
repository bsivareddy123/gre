export class Option {
    id: number;
    question_id: number;
    name: any;
    solution: any;
    text: any;
    paragraph: string;
    colA: string;
    colB: string;
    title1: string;
    is_answer: boolean;
    selected: boolean;
    user_aws: boolean;
    isAnswer: boolean;
   

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.question_id = data.question_id;
        this.name = data.name;
        this.text = data.text;
        this.is_answer = data.is_answer;
        this.isAnswer = data.isAnswer;
        this.user_aws = data.user_aws;
        this.paragraph = data.paragraph;
        this.title1 = data.title1;
        this.colA = data.colA;
        this.colB = data.colB;
        this.solution = data.solution;
    }
}
