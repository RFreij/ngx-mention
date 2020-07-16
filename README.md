# Ngx Mention

Very simple Angular mentions inspired by [Angular mentions](https://github.com/dmacfarlane/angular-mentions)

Provides auto-complete suggestions for @mentions in text input field and text area's

## Demo

Demo is available [here](https://rfreij.github.io/ngx-mention/)

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
dropUp                      | false     | Mention list should be a drop up instead of dropdown

For example
```html
<input type="text" [ncNgxMention]="items" [ngxMentionConfig]="{denotationCharacter: '$', minimalCharacters: 3}">
```

### Custom templates
It is possible to add a custom template to change the way items are visible. The given label will be used to retrieve the correct name to be visible in the input field.

```Html
<ng-template #customTemplate let-item="item">
    {{ item.username }} {{ item.id }}
</ng-template>

<input
    type="text"
    [ncNgxMention]="[{id: 1, username: 'John'}, {id: 2, username: 'Doe'}]"
    [customTemplate]="{ template: customTemplate, label: 'username' }"
/>
```


### Output events
Output                                              | Description
---                                                 | ---
`@Output() searchTerm: EventEmitter<string>`        | Event that is emitted whenever the search term changes. Can be used to trigger async search.
`@Output() selectItem: EventEmitter<NgxMention>`    | Event that is emitted when an item is selected

### Todo
* Extend demo-app to see code examples
* Add basic styles to demo-app to make it more presentable
* Add tests
* Add support for multiple denotation characters

### Sites using this package
Are you using this package and do you want to be added to the list? Please create a pull request with your entry.

* [Voetbalwedden](https://www.voetbalwedden.net)
* [Bettingfans](https://www.bettingfans.com)
