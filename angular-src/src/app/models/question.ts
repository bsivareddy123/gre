import { Option } from './option';

export class Question {
    id: number;
    name: any;
    solution: any;
    trackid: number;
    paragraph: string;
    title1: string;
    colA: string;
    colB: string;
    text: any;
    question_type_id: number;
    options: Option[];
    answered: boolean;
    is_answer: boolean;
   

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.trackid = data.trackid;
        this.name = data.name;
        this.paragraph = data.paragraph;
        this.title1 = data.title1;
        this.colA = data.colA;
        this.colB = data.colB;
        this.text = data.text;
        this.is_answer = data.is_answer;
        this.solution = data.solution;
        this.question_type_id = data.question_type_id;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}
