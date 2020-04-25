export interface NgxMention {
    id: number | string;
    value: string;
}

export interface NgxMentionConfig {
    denotationCharacter?: string;
    showDenotationCharacter?: boolean;
    minimalCharacters?: number;
    disableSearch?: boolean;
}
