import { TemplateRef } from '@angular/core';

export interface NgxMention {
    id: number | string;
    value: string;
}

export interface NgxMentionConfig {
    denotationCharacter?: string;
    showDenotationCharacter?: boolean;
    minimalCharacters?: number;
    disableSearch?: boolean;
    dropUp?: boolean;
}

export interface NgxMentionTemplate {
    template: TemplateRef<any>;
    label: string;
}
