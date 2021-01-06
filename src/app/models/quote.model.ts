import { Character } from "./character.model";

export class Quote {
    id!: string;
    content!: string;
    character!: Character;
}