import Typography from "@/global-components/Typography";
import Container from "@/global-components/wrapper";
import Image from "next/image";

const JavaScript = () => {
  return (
    <>
      <Container
        as="section"
        className="mt-[41px] max-w-[1397px] min-h-[893px] border mx-auto bg-main bg-no-repeat  rounded-[60px] relative z-0 bg-right-bottom overflow-hidden xl:overflow-visible "
      >
        <Typography
          as="h1"
          variant={"h1"}
          color="white"
          className="text-center mt-9 xl:mt-[93px] text-5xl xl:text-[153px]"
        >
          javascript
        </Typography>
        <Typography
          as="p"
          variant={"sub"}
          color="white"
          className="text-center mt-4 lg:mt-[44px] max-w-[578px] w-fit mx-auto"
        >
          Statically generated pages are brought to life with client-side
          JavaScript libraries and frameworks, such as Algolia and Next.js.
        </Typography>
        <Image
          src="/arrow-2.svg"
          alt="arrow-2"
          width={246}
          height={466}
          className="absolute h-[200px] md:hidden lg:block lg:h-[466px] right-[99px]"
        />
        <Image
          className="absolute top-[452px] z-40
        left-[50%] transform -translate-x-1/2
        
        "
          src={"/computer.svg"}
          width={810}
          height={808}
          alt="retro-computer"
        />
      </Container>

      <div className="hidden lg:block -mt-48 bg-[#151515]">
        <div
          className="mx-auto  xl:w-[1184px] xl:h-[1165px]   bg-[url('/logos.svg')]
          bg-repeat bg-top-1 "
        />
      </div>
      <div className="bg-[#151515] pb-10 relative">
        <Typography
          as="h1"
          color="white"
          variant={"h1"}
          className="text-center"
        >
          api
        </Typography>
        <Typography
          as="p"
          color="white"
          variant={"semi"}
          className="text-center max-w-[730px] mx-auto mt-[63px] pb-[40px] xl:pb-[412px] "
        >
          At build time, a Jamstack website uses data from one or more APIs to
          generate markup. These APIs can be a headless CMS like Prismic, a
          database like Supabase, or even a local JSON file!
        </Typography>
        <Container size={"contain"} className="mx-auto">
          <Image
            src="/3d.svg"
            width={1051}
            height={1000}
            alt="3d image"
            className="absolute top-80 md:top-60 xl:top-72 ball-rotate"
          />
        </Container>
      </div>

      <Image src="/wave.svg" width={2000} height={214} alt="wave" />
    </>
  );
};

export default JavaScript;
