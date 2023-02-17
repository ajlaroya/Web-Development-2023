import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'scn9odoh',
  dataset: 'production',
  apiVersion: '2023-02-13',
  useCdn: true
})