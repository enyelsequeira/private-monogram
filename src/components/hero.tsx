import Typography from "@/global-components/Typography";
import Container from "@/global-components/wrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <Container
      as="section"
      size={"contain"}
      className=" flex flex-col lg:grid lg:grid-cols-4 mx-auto pt-10 lg:pt-[153px]"
    >
      <div className=" col-start-1 col-span-3 row-start-1  text-center lg:text-start">
        <Typography as="h1" color="black" variant={"h1"}>
          jamstack
          <span className=" text-transparent bg-clip-text bg-main bg-repeat bg-right-top">
            {" "}
            101
          </span>
        </Typography>
        {/* both ways works, just aonther way to use typography if you want to use your own classes */}
        <Typography className="max-w-[549px] w-full text-center lg:text-start mx-auto  font-light text-lg font-primary  text-[#757575] lg:ml-[52px] mt-[44px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue
          massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus
          vel pretium tempor ut dui vivamus sit.
        </Typography>

        <Image
          className=" mx-auto lg:ml-[247px] mt-[87px]"
          src={"/mouse-line.svg"}
          width={81}
          height={580}
          alt="mouse-line"
        />
      </div>
      <div className="hidden lg:justify-center xl:justify-start col-start-3 row-start-1 lg:flex gap-x-[46px]  relative overflow-hidden h-[964px] w-[764px]">
        <div className=" max-w-[280px] w-full h-[629px] rounded-[68px] bg-[url('/bg-cards.jpeg')] bg-center bg-no-repeat bg-cover  mt-[171px] " />

        <div className=" max-w-[278px] w-full h-[670px] rounded-[68px] bg-[url('/bg-cards.jpeg')] bg-right-top bg-no-repeat bg-cover hidden xl:block" />

        <div className=" max-w-[280px] w-full h-[479px] rounded-[68px] bg-white/50 absolute bottom-0 backdrop-blur-[60px] mix-blend-normal left-[164px]	" />

        <div className=" max-w-[280px] w-full h-[662px] rounded-[68px] bg-white/50 absolute bottom-0 backdrop-blur-[60px] mix-blend-normal right-0 hidden xl:block	" />
      </div>
    </Container>
  );
};

export default Hero;
