import { TemplateRef } from '@angular/core';

export type FormatFunction = (item: NgxMention) => string;

export type NgxMentions<T = NgxMention> = T[];

export interface NgxMention {
    id: number | string;
    value: string;
}

export interface NgxMentionConfig<T = NgxMention> {
    denotationCharacter?: string;
    showDenotationCharacter?: boolean;
    minimalCharacters?: number;
    disableSearch?: boolean;
    dropUp?: boolean;
    formatSelected?: (item: T) => string;
}

export interface NgxMentionTemplate {
    template: TemplateRef<any>;
    /** @deprecated */
    label: string;
}
