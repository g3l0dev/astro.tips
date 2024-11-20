import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
   const posts = await getCollection("liderazgo-en-crecimiento")
   return rss({
      title: "Astro Blog",
      description: "my blog",
      site: context.site,
      items: posts.map((post) => ({
         ...post.data,
         link: `/liderazgo-en-crecimiento/${post.slug}/`,
         
      }))
   })
 }