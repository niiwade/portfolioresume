import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounds";
import Heading from "@/components/Heading";
import { Content, DateField, isFilled } from "@prismicio/client";



export default  function ContentBody({ page }: { page: Content.BlogPostDocument | Content.ProjectDocument }) {
 


  function formatDate(date: DateField) {

    if (isFilled.date(date)) {


      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }

      return new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(date))
      }

  }


  const formattedDate = formatDate(page.data.date)




  return (
    <Bounded as='article'>
      <div className="rounded-2xl border-2 border-slate-400 bg-slate-800 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.data.title}</Heading>
        <div className="flex gap-4 text-green-500 text-xl font-bold">{
          page.tags.map((tag) => (
            <span key={tag} >{tag}</span>
          ))
        }</div>
        <p className="mt-8 border-b border-slate-900 text-xl font-medium text-slate-200">{formattedDate}</p>
        <div className="prose prose-lg prose-invert mt-12 w-fu ll max-w-none md:mt-20">

        <SliceZone slices={page.data.slices} components={components} />

        </div>
      </div>
    </Bounded>
  );
}

