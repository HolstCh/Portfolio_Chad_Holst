import React, { useState } from "react";
import { BriefcaseIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function WorkExperience() {
  const [entries, setEntries] = useState([
    {
      company: "Hexagon | NovAtel",
      title: "DevOps Developer",
      location: "Calgary, AB",
      start: "August 6, 2024",
      end: "Present",
      highlights: ["Dockerized a GNSS simulator and migrated its Jenkins pipeline to GitLab CI/CD, cutting deployment time by 25%",
        "Built a Grafana dashboard with a Python ETL, monitoring 30 GitLab pipelines daily for failure and bottleneck trends",
        "Automated software updates on 130+ nodes with Ansible, reducing manual effort by 95% and ensuring consistency",
        "Supported 6 engineering teams with CI/CD workflows, troubleshooting and resolving failures across DevOps tools",
        "Upgraded and maintained DevOps tools and Docker images, improving system reliability and minimizing downtime"
      ],
    },
  ]);

  const updateEntry = (idx, key, value) => {
    setEntries((prev) =>
      prev.map((e, i) => (i === idx ? { ...e, [key]: value } : e))
    );
  };

  const updateHighlight = (idx, hIdx, value) => {
    setEntries((prev) =>
      prev.map((e, i) =>
        i === idx
          ? {
              ...e,
              highlights: e.highlights.map((h, j) => (j === hIdx ? value : h)),
            }
          : e
      )
    );
  };

  const addHighlight = (idx) => {
    setEntries((prev) =>
      prev.map((e, i) =>
        i === idx ? { ...e, highlights: [...e.highlights, ""] } : e
      )
    );
  };

  const removeHighlight = (idx, hIdx) => {
    setEntries((prev) =>
      prev.map((e, i) =>
        i === idx
          ? { ...e, highlights: e.highlights.filter((_, j) => j !== hIdx) }
          : e
      )
    );
  };

  const addEntry = () => {
    setEntries((prev) => [
      ...prev,
      { company: "", title: "", location: "", start: "", end: "", highlights: [""] },
    ]);
  };

  const removeEntry = (idx) => {
    setEntries((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <section>
      {/* Header (replaces your Skills header) */}
      <div className="responsive-width landing-text mx-auto flex px-10 py-5 flex-col md:flex-col lg:flex-col items-center">
        <BriefcaseIcon className="mx-auto inline-block w-10 mb-4 text-gray-400" />
        <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-black">
          Work Experience
        </h1>
        <p className="projects-text lg:w-2/3 sm:text-xl mx-auto leading-relaxed text-base text-l text-center text-gray-400">
          Quick fields to fill in your roles, dates, and impact bullets.
        </p>
      </div>

      {/* Form */}
      <div className="responsive-width mx-auto px-10 pb-10">
        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={addEntry}
            className="mb-4 md:ml-4 sm:ml-4 text-gray-400 bg-gray-800 border-0 py-3 px-4 focus:outline-none hover:bg-gray-600 hover:text-blue-600 rounded-md font-bold text-lg mb-2 text-center"
          >
            <PlusIcon className="w-5" />
          </button>
        </div>

        <div className="space-y-6">
          {entries.map((e, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
                  <input
                    className="w-full rounded-md border border-gray-200 p-2"
                    placeholder="Company (e.g., Acme Inc.)"
                    value={e.company}
                    onChange={(ev) => updateEntry(idx, "company", ev.target.value)}
                  />
                  <input
                    className="w-full rounded-md border border-gray-200 p-2"
                    placeholder="Role / Title (e.g., Frontend Developer)"
                    value={e.title}
                    onChange={(ev) => updateEntry(idx, "title", ev.target.value)}
                  />
                  <input
                    className="w-full rounded-md border border-gray-200 p-2"
                    placeholder="Location (e.g., Calgary, AB)"
                    value={e.location}
                    onChange={(ev) => updateEntry(idx, "location", ev.target.value)}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className="w-full rounded-md border border-gray-200 p-2"
                      placeholder="Start (e.g., May 2024)"
                      value={e.start}
                      onChange={(ev) => updateEntry(idx, "start", ev.target.value)}
                    />
                    <input
                      className="w-full rounded-md border border-gray-200 p-2"
                      placeholder="End (e.g., Present)"
                      value={e.end}
                      onChange={(ev) => updateEntry(idx, "end", ev.target.value)}
                    />
                  </div>
                </div>

                {entries.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEntry(idx)}
                    className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                    title="Remove experience"
                  >
                    <TrashIcon className="w-5" />
                  </button>
                )}
              </div>

              {/* Highlights */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">Highlights</p>
                  <button
                    type="button"
                    onClick={() => addHighlight(idx)}
                    className="text-sm font-medium text-black hover:underline"
                  >
                    + Add bullet
                  </button>
                </div>

                <div className="mt-2 space-y-2">
                  {e.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex gap-2">
                      <input
                        className="w-full rounded-md border border-gray-200 p-2"
                        placeholder="Impact bullet (e.g., Built X to improve Y by Z%)"
                        value={h}
                        onChange={(ev) => updateHighlight(idx, hIdx, ev.target.value)}
                      />
                      {e.highlights.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeHighlight(idx, hIdx)}
                          className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                          title="Remove bullet"
                        >
                          <TrashIcon className="w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional preview line */}
              <div className="mt-4 text-sm text-gray-500">
                Preview:{" "}
                <span className="text-gray-800 font-medium">
                  {e.title || "Role"} @ {e.company || "Company"}
                </span>{" "}
                <span className="text-gray-600">
                  ({e.start || "Start"} – {e.end || "End"})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}