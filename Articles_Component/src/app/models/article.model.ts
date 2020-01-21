export class Article {
    constructor(
        public title: string,
        public descrtiption: string,
        public author: string,
        public imageUrl: string
    ) {
        this.title = title;
        this.descrtiption = descrtiption;
        this.author = author;
        this.imageUrl = imageUrl;
    }
}