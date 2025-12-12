const ResumeView = ({ resumeData }) => {
  if (!resumeData) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center mt-10">
        <div className="text-gray-500 text-xl">
          <svg className="w-20 h-20 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p>No resume data found. Please create your resume first.</p>
        </div>
      </div>
    );
  }

  const { personalInfo, experience, education, skills, projects, certifications, languages } = resumeData;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden mt-10">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10">
        <h1 className="text-4xl font-bold mb-3">{personalInfo.fullName}</h1>

        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-6 text-sm opacity-95">

          {personalInfo.email && (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {personalInfo.email}
            </span>
          )}

          {personalInfo.phone && (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {personalInfo.phone}
            </span>
          )}

          {personalInfo.location && (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {personalInfo.location}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 mt-4 text-sm font-medium underline underline-offset-2 opacity-90">
          {personalInfo.linkedin && <a href={personalInfo.linkedin} target="_blank">LinkedIn</a>}
          {personalInfo.github && <a href={personalInfo.github} target="_blank">GitHub</a>}
          {personalInfo.portfolio && <a href={personalInfo.portfolio} target="_blank">Portfolio</a>}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="p-10">

        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-10">
            <h2 className="section-title">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <section className="mb-10">
            <h2 className="section-title">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-600">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <section className="mb-10">
            <h2 className="section-title">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</span>
                </div>
                {edu.gpa && <p className="text-gray-700 mt-1">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {(skills?.technical?.length || skills?.soft?.length) && (
          <section className="mb-10">
            <h2 className="section-title">Skills</h2>

            {/* Technical */}
            {skills.technical.length > 0 && (
              <div className="mb-5">
                <h3 className="font-semibold text-gray-700">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.technical.map((s, i) => (
                    <span key={i} className="tag-blue">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Soft */}
            {skills.soft.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-700">Soft Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.soft.map((s, i) => (
                    <span key={i} className="tag-green">{s}</span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section className="mb-10">
            <h2 className="section-title">Projects</h2>

            {projects.map((p, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-700 mt-1">{p.description}</p>

                {p.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.technologies.map((t, j) => (
                      <span key={j} className="tag-purple">{t}</span>
                    ))}
                  </div>
                )}

                <div className="flex gap-6 mt-2 text-sm">
                  {p.link && <a href={p.link} className="text-blue-600 underline">Live Demo</a>}
                  {p.github && <a href={p.github} className="text-blue-600 underline">GitHub</a>}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Languages */}
        {languages?.length > 0 && (
          <section className="mb-10">
            <h2 className="section-title">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, i) => (
                <span key={i} className="tag-gray">{lang}</span>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications?.length > 0 && (
          <section className="mb-10">
            <h2 className="section-title">Certifications</h2>
            {certifications.map((c, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="text-gray-700">{c.issuer} — {c.date}</p>
                {c.credentialId && <p className="text-sm text-gray-600">Credential ID: {c.credentialId}</p>}
              </div>
            ))}
          </section>
        )}

      </div>

      {/* PRINT BUTTON */}
      <div className="p-8 bg-gray-50 border-t">
        <button
          onClick={() => window.print()}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
};

export default ResumeView;
