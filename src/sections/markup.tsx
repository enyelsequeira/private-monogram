import Typography from "@/global-components/Typography";
import Container from "@/global-components/wrapper";
import Image from "next/image";
import Bottom from "./bottom";

const Markup = () => {
  return (
    <>
      <Container
        as="section"
        size={"contain"}
        className="flex flex-col lg:grid lg:grid-cols-4 mx-auto mt-[368px]"
      >
        <div className=" col-start-1 col-span-3 row-start-1">
          <Typography variant={"h1"}>markup</Typography>
          <Typography className="max-w-[480px]  font-light text-2xl  text-[#414141]  mt-[69px] leading-[162%]">
            When ready for deployment, a static-site generator such as Astro or
            Next.js is used to compile the website. The end result is a
            collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.
          </Typography>
          <div className="mt-14">
            {" "}
            <Image
              src={"/topped-blocks.svg"}
              width={620}
              height={455}
              alt="block"
            />
          </div>
        </div>
        <div className="hidden col-start-3 row-start-1 lg:flex gap-x-[46px]  relative overflow-hidden h-[964px] w-[764px]">
          <div className=" max-w-[280px] w-full h-[629px] rounded-[68px] bg-second bg-center bg-no-repeat bg-cover  mt-[171px]" />

          <div className=" max-w-[278px] w-full h-[670px] rounded-[68px] bg-second bg-right-top bg-no-repeat bg-cover" />

          <div className=" max-w-[280px] w-full h-[479px] rounded-[68px] bg-white/50 absolute bottom-0 backdrop-blur-[60px] mix-blend-normal left-[164px]	" />

          <div className=" max-w-[280px] w-full h-[662px] rounded-[68px] bg-white/50 absolute bottom-0 backdrop-blur-[60px] mix-blend-normal right-0	" />
        </div>
      </Container>

      <div className="relative  mt-9">
        <div className="">
          <Image
            src="/wall-blocks.svg"
            width={6000}
            height={228}
            alt="block-wall"
          />
        </div>
        <Bottom />
      </div>
    </>
  );
};

export default Markup;
