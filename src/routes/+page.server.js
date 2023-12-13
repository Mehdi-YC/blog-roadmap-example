import { db } from "../lib/db/index";
import { blog,user } from "../lib/db/schema/index";
import { eq,sql } from "drizzle-orm";

export const load = async () => {
    return { streamed: { blogs:  await fetchBlogs() } };
};

const fetchBlogs = async () => {
    console.log("loading blogs...");
    const blogs =   await db
        .select()
        .from(blog)
        .limit(1);
        //.where(eq(PageInsights.id, 1));

    //console.log("blogs : ",blogs);
    return blogs;
};