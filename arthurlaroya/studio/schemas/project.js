export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        isUnique: (proposedSlug) => true,
      },
    },
    {
      name: 'externUrl',
      title: 'Final Destination URL',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
    },
    {
      title: 'Featured Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        //   options: {
        //     isHighlighted: true, // <-- make this field easily accessible
        //   },
        },
      ],
    },
    {
      title: 'Image Gallery',
      description: 'Add images that represent the project',
      name: 'gallery',
      type: 'gallery',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'string',
    },
    {
      name: 'projectContext',
      title: 'Context for Project',
      type: 'string',
      description: 'Tell a little about what type of project this is',
      options: {
        list: [
          {
            title: 'Personal',
            value: 'personal',
          },
          {
            title: 'Education',
            value: 'education',
          },
          {
            title: 'Work',
            value: 'work',
          },
        ],
      },
    },
    {
      title: 'Tags',
      name: 'tags',
      description: 'Tags to describe project',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Technologies',
      name: 'tech',
      description: 'Technologies used in project',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        // https://www.sanity.io/docs/schema-types/reference-type
        {
          title: 'Category',
          name: 'categoryReference',
          type: 'reference',
          weak: false,
          to: [{type: 'category'}],
          description: 'Filterable categories',
        },
      ],
    },
    {
      title: 'Collaborators',
      name: 'collaborators',
      description: 'For when you work with other people',
      type: 'array',
      of: [{type: 'reference', to: {type: 'person'}}],
    },

    {
      name: 'duration',
      title: 'Time Spent',
      description: 'List the amount of time it took (optional)',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: 'Start Date',
          name: 'startDate',
          type: 'date',
          options: {
            dateFormat: 'YYYY-MM-DD',
            calendarTodayLabel: 'today',
          },
        },
        {
          name: 'days',
          title: 'Number of Days',
          type: 'number',
        },
      ],
    },
  ],
}
