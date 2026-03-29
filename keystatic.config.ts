import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'EdwinDeeme/pimenta-webpage',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        pubDate: fields.date({ label: 'Fecha de publicación' }),
        author: fields.text({ label: 'Autor', defaultValue: 'Pimenta Studio' }),
        authImage: fields.text({ label: 'Imagen del autor', defaultValue: '/Logo.svg' }),
        image: fields.text({ label: 'Imagen de portada (URL o ruta)' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        summary: fields.text({ label: 'Resumen', multiline: true }),
        type: fields.select({
          label: 'Tipo',
          options: [
            { label: 'Artículo', value: 'Article' },
            { label: 'Tutorial', value: 'Tutorial' },
          ],
          defaultValue: 'Article',
        }),
        content: fields.markdoc({ label: 'Contenido' }),
      },
    }),

    portfolio: collection({
      label: 'Proyectos',
      slugField: 'title',
      path: 'src/content/portfolio/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción', multiline: true }),
        client: fields.text({ label: 'Cliente' }),
        year: fields.number({ label: 'Año' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        image: fields.text({ label: 'Imagen (URL o ruta en /public)' }),
        liveUrl: fields.url({ label: 'URL del proyecto' }),
        featured: fields.checkbox({ label: 'Destacado en home', defaultValue: false }),
        content: fields.markdoc({ label: 'Descripción detallada' }),
      },
    }),
  },
});
