export default class Atomate{
    constructor(str){
        this.setData(str);
    }

    setData(str){
        this.data = str;
        this.memory = 'X'; // init
    }

    getLastElement(){
        return this.memory.length ? this.memory[this.memory.length - 1] : null;
    }

    replaceMemory(sym){
        if (this.memory.length){
            this.popMemory();
            this.memory += sym;
        }
    }

    popMemory(){
        if (this.memory.length)
            this.memory = this.memory.slice(0, this.memory.length - 1);
    }

    pushMemory(sym){
        this.memory += sym;
    }

    Do(){
        let n = this.data.length;
        let error = null;
        let result = [
            [],
            [],
            [],
            []
        ];
        for(let i = 0; i < n && error === null;){
            // идем по всей строке
            let symbol = this.data[i];

            if (this.getLastElement() === 'X'){

                // X
                if (symbol === '0'){
                    error = 'Нет едениц';
                }else if (symbol === '1'){
                    this.replaceMemory("A");
                }else error = 'Некорректный символ';
                
            }else if (this.getLastElement() === 'A'){

                // A
                if (symbol === '0'){
                    this.popMemory();
                }else if (symbol === '1'){
                    this.replaceMemory("CB");
                    i++;
                    result[0].push(1);
                }else error = 'Некорректный символ';

            }else if (this.getLastElement() === 'B'){

                // B
                if (symbol === '0'){
                    error = "Не хватает едениц";
                }else if (symbol === '1'){
                    this.replaceMemory("CA");
                    i++;
                    result[2].push(1);
                }else error = 'Некорректный символ';

            }else if (this.getLastElement() === 'C'){

                // C
                if (symbol === '0'){
                    this.popMemory();
                    this.replaceMemory("D");
                    i++;
                    result[1].push(0);
                }else if (symbol === '1'){
                    error = "Еденица запрещена после нуля";
                }else error = 'Некорректный символ';

            }else if (this.getLastElement() === 'D'){

                // D
                if (symbol === '0'){
                    this.popMemory();
                    result[3].push(0);
                    i++;
                }else if (symbol === '1'){
                    error = "Еденица запрещена после нуля";
                }else error = 'Некорректный символ';

            }else if (this.getLastElement() === null){

                // empty
                if (symbol === '0'){
                    this.pushMemory('E');
                }else if (symbol === '1'){
                    error = "Еденица запрещена после нуля";
                }else error = 'Некорректный символ';

            }else if (this.getLastElement() === 'E'){

                // E
                if (symbol === '0'){
                    this.replaceMemory('F');
                    result[1].push(0);
                    i++;
                }else if (symbol === '1'){
                    error = "Еденица запрещена после нуля";
                }else error = 'Некорректный символ';

            }else if (this.getLastElement() === 'F'){

                // F
                if (symbol === '0'){
                    this.replaceMemory('E');
                    result[3].push(0);
                    i++;
                }else if (symbol === '1'){
                    error = "Еденица запрещена после нуля";
                }else error = 'Некорректный символ';

            }
        }
        if (error === null){
            if (this.getLastElement() === 'X') error = "Нет едениц и нулей";
            else if (this.getLastElement() === 'A') error = "Нет нулей";
            else if (this.getLastElement() === 'B') error = "Не хватает едениц и нет нулей";
            else if (this.getLastElement() === 'C') error = "Мало нулей";
            else if (this.getLastElement() === 'D') error = "Мало нулей";
            else if (this.getLastElement() === null) error = "Колличество нулей и едениц совпадает";
            else if (this.getLastElement() === 'F') error = "Не хватает нулей";
        }

        let resultStrings = [
            result[0].join(""),
            result[1].join(""),
            result[2].join(""),
            result[3].join("")
        ];

        return error === null ? resultStrings.join("") : error;
    }
}