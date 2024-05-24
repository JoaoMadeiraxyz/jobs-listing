import Image from "next/image";
import Link from "next/link";

import parse from "html-react-parser";

export function JobComponent({
  companyLogo,
  jobTitle,
  companyName,
  jobLevel,
  jobExcerpt,
  annualSalaryMin,
  salaryCurrency,
  url = "",
}) {
  return (
    <div className="flex flex-col gap-2 w-full min-h-32 bg-slate-700 rounded-lg p-4">
      <div className="flex flex-row justify-between">
        <div className="flex gap-5 items-center w-[80%]">
          <Image
            src={companyLogo}
            alt="logo"
            width="50"
            height="50"
            quality={100}
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">{jobTitle}</h2>
            <div className="flex gap-1 text-slate-300">
              <p>{companyName}</p>
              {annualSalaryMin && (
                <>
                  {"-"}
                  <p>
                    {annualSalaryMin} {salaryCurrency}/year
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start w-[20%]">
          <div className="bg-slate-400 px-3 py-1 rounded-xl">
            <p>{jobLevel}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-200">{parse(jobExcerpt)}</p>
        <Link
          href={url}
          target="_blank"
          className="text-blue-400 underline w-fit"
        >
          Visit Role
        </Link>
      </div>
    </div>
  );
}
