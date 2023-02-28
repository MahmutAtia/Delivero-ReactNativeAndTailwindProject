import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = SanityClient({
    pojectId: 'usf8f0ou',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2021-10-21',

})

let PROJECT_ID = "usf8f0ou";
let DATASET = "production";



export {QUERY}
export default client;