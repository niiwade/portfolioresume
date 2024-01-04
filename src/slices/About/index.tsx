import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounds from "../../components/Bounds";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { PrismicNextImage } from "@prismicio/next";
import Pic from "./Pic";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading
          as="h1"
          size="lg"
          className="col-start-1 leading-loose"
        >
          {slice.primary.heading}
        </Heading> 
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText field={slice.primary.desc} />
        </div>
        <Button linkField={slice.primary.button_link} label={slice.primary.button_text}/>

      <Pic
      image={slice.primary.profile_pic}
      className="row-start-1 rounded-full max-w-sm md:col-start-2 md:row-start-2 md:row-end-3"
      />
      </div>
    </Bounds>
  );
};

export default About;
 