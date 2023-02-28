import { SanityClient, createClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = createClient({
    pojectId: 'usf8f0ou',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2021-10-21',

})

let QUERY = encodeURIComponent('*[_type == "category"]');


const builder = ImageUrlBuilder(client);
const urlFor = (source) => builder.image(source)
export {urlFor, QUERY }
export default client 