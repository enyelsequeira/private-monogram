import Typography from "@/global-components/Typography";
import Image from "next/image";

const paragraphs = [
  {
    text: " Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility",
    id: "0",
  },
  {
    text: "Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.",
    id: "1",
  },
  {
    text: " A Jamstack website, delivering SEO-friendly, lean & clean HTML in  milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.",
    id: "2",
  },
];
const Circles = ({ index }: { index: number }) => {
  return (
    <div
      className={`w-[212px] h-[212px]  ${
        index === 2 ? "bg-[url('/elipse-2.svg')]" : "bg-[url('/elipse-3.svg')]"
      }   bg-center  rounded-full flex items-center justify-center`}
    >
      <Typography as="p" variant={"numbers"} className="text-shadow ">
        100
      </Typography>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="text-black bg-black h-fit lg:min-h-screen">
      <div className="max-w-[1280px]  flex-col  lg:h-[1328px] mx-auto flex justify-center">
        <div className="bottom lg:absolute top-28  lg:w-[1204px] lg:h-[1328px] text-white  ">
          <Typography
            as="h2"
            variant={"h2"}
            color="accent"
            className="text-center mt-[120px]"
          >
            top audit scores
          </Typography>
          <div className="grid grid-cols-1  lg:grid-cols-4 gap-y-4 lg:gap-y-0 px-[77px] justify-items-center  mt-[96px] mb-[128px]">
            {[1, 2, 3, 4].map((item, i) => {
              return <Circles key={i} index={i} />;
            })}
          </div>
          <div className="max-w-[756px] flex mx-auto items-center flex-col text-left gap-y-4">
            {paragraphs.map((item) => {
              return (
                <Typography
                  as="p"
                  key={item.id}
                  variant="sub"
                  className="text-lg text-center lg:text-start lg:text-[26px]  mx-auto"
                  color="accentP"
                >
                  {item.text}
                </Typography>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto flex items-center flex-col mt-[245px] gap-y-[30px] pb-[136px]">
        <p className="text-white text-center lg:text-start">
          This is a design test by Enyel for Monogram.
        </p>
        <Image src="/heart.svg" alt="heart" width={58} height={57} />
      </div>
    </div>
  );
};

export default Bottom;
