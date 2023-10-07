import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Arthurs World',

  projectId: 'gbclu14u',
  dataset: 'production',
  basePath: "/studio",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
