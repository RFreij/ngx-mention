# Ngx Mention

---

Very simple Angular mentions inspired by [Angular mentions](https://github.com/dmacfarlane/angular-mentions)

Provides auto-complete suggestions for @mentions in text input field and text area's

## Usage

Add the package as a dependency to your project using:

```bash
npm install @netcreaties/ngx-mention
```

```bash
yarn add @netcreaties/ngx-mention
```

Add the module to your app.module imports:
```typescript
import { NgxMentionModule } from '@netcreaties/ngx-mention';
...

@NgModule({
    imports: [NgxMentionModule],
    ...
})
```

Add the `[ncNgxMention]` directive to your input or textarea element

```html
<input type="text" [ncNgxMention]="items">
```

Where `items` is a array of objects defined like interface [NgxMention](projects/src/lib/ngx-mention/src/lib/ngx-mention.config.ts)

### Configuration options

The following configuration options are available

Option                      | Default   | Description
---                         | ---       | ---
denotationCharacter         | @         | Trigger on which the mention list is activated
minimalCharacters           | 0         | Minimal amount of characters before search is activated
disableSearch               | false     | Set this to true for async search (using the search Output)

For example
```html
<input type="text" [ncNgxMention]="items" [ngxMentionConfig]="{denotationCharacter: '$', minimalCharacters: 3}">
```

### Output events
Output                                              | Description
---                                                 | ---
`@Output() searchTerm: EventEmitter<string>`        | Event that is emitted whenever the search term changes. Can be used to trigger async search.
`@Output() selectItem: EventEmitter<NgxMention>`    | Event that is emitted when an item is selected
