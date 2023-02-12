import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'scn9odoh',
  dataset: 'production',
  useCdn: true
})