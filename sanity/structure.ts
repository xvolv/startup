import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Authors')
        .child(
          S.documentTypeList('author')
        ),
      S.listItem()
        .title('Startups')
        .child(
          S.documentTypeList('startup')
        ),  
    ])