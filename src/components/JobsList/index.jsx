"use client";
import { useState, useEffect } from "react";
import fetchJobs from "@/functions/fetchJobs";
import { JobComponent } from "../JobComponent";

const CACHE_KEY = "jobsCache";
const CACHE_EXPIRATION = 3600000; // 1 hora em milissegundos

export function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  const getJobs = async () => {
    try {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        const now = new Date().getTime();
        if (now - timestamp < CACHE_EXPIRATION) {
          setJobs(data);
          return;
        }
      }

      const data = await fetchJobs();
      setJobs(data);
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: new Date().getTime() }));
    } catch (err) {
      setError(
        "Erro ao buscar vagas de emprego! Veja o console para mais detalhes."
      );
      console.error(err);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className="flex flex-col w-[80%] min-h-16 p-6 bg-slate-900 rounded-lg gap-5">
      {jobs.jobs &&
        jobs.jobs.length > 0 &&
        jobs.jobs.map((job) => (
          <JobComponent
            key={job.id}
            url={job.url}
            jobTitle={job.jobTitle}
            jobExcerpt={job.jobExcerpt}
            companyName={job.companyName}
            companyLogo={job.companyLogo}
            jobLevel={job.jobLevel}
            salaryCurrency={job.salaryCurrency}
            annualSalaryMin={job.annualSalaryMin}
          />
        ))}
    </section>
  );
}
