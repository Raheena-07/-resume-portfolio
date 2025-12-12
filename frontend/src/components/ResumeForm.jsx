import { useState, useEffect } from 'react';

const ResumeForm = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
      portfolio: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: {
      technical: [],
      soft: []
    },
    projects: [],
    certifications: [],
    languages: []
  });

  const [tempSkill, setTempSkill] = useState({ technical: '', soft: '' });
  const [tempLanguage, setTempLanguage] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handlePersonalInfoChange = (e) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
          current: false
        }
      ]
    });
  };

  const updateExperience = (index, field, value) => {
    const newExperience = [...formData.experience];
    newExperience[index][field] = value;
    setFormData({ ...formData, experience: newExperience });
  };

  const removeExperience = (index) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExperience });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          gpa: ''
        }
      ]
    });
  };

  const updateEducation = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData({ ...formData, education: newEducation });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const addSkill = (type) => {
    if (tempSkill[type].trim()) {
      setFormData({
        ...formData,
        skills: {
          ...formData.skills,
          [type]: [...formData.skills[type], tempSkill[type].trim()]
        }
      });
      setTempSkill({ ...tempSkill, [type]: '' });
    }
  };

  const removeSkill = (type, index) => {
    const newSkills = formData.skills[type].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: {
        ...formData.skills,
        [type]: newSkills
      }
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          title: '',
          description: '',
          technologies: [],
          link: '',
          github: ''
        }
      ]
    });
  };

  const updateProject = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const removeProject = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
  };

  const addLanguage = () => {
    if (tempLanguage.trim()) {
      setFormData({
        ...formData,
        languages: [...formData.languages, tempLanguage.trim()]
      });
      setTempLanguage('');
    }
  };

  const removeLanguage = (index) => {
    const newLanguages = formData.languages.filter((_, i) => i !== index);
    setFormData({ ...formData, languages: newLanguages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Your Resume</h2>

      {/* Personal Information */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-blue-500 pb-2">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name *"
            value={formData.personalInfo.fullName}
            onChange={handlePersonalInfoChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.personalInfo.email}
            onChange={handlePersonalInfoChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            value={formData.personalInfo.phone}
            onChange={handlePersonalInfoChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.personalInfo.location}
            onChange={handlePersonalInfoChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.personalInfo.linkedin}
            onChange={handlePersonalInfoChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            name="github"
            placeholder="GitHub URL"
            value={formData.personalInfo.github}
            onChange={handlePersonalInfoChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio URL"
            value={formData.personalInfo.portfolio}
            onChange={handlePersonalInfoChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
          />
        </div>
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.personalInfo.summary}
          onChange={handlePersonalInfoChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </section>

      {/* Experience */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2">
            Experience
          </h3>
          <button
            type="button"
            onClick={addExperience}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Experience
          </button>
        </div>
        {formData.experience.map((exp, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Start Date (e.g., Jan 2020)"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="End Date (e.g., Dec 2022)"
                value={exp.endDate}
                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={exp.current}
              />
            </div>
            <div className="mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-600">Currently working here</span>
              </label>
            </div>
            <textarea
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) => updateExperience(index, 'description', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="mt-2 text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2">
            Education
          </h3>
          <button
            type="button"
            onClick={addEducation}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Education
          </button>
        </div>
        {formData.education.map((edu, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Field of Study"
                value={edu.field}
                onChange={(e) => updateEducation(index, 'field', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="GPA (Optional)"
                value={edu.gpa}
                onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Start Date"
                value={edu.startDate}
                onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="End Date"
                value={edu.endDate}
                onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="mt-2 text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-blue-500 pb-2">
          Skills
        </h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Technical Skills</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add technical skill"
              value={tempSkill.technical}
              onChange={(e) => setTempSkill({ ...tempSkill, technical: e.target.value })}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill('technical'))}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => addSkill('technical')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.skills.technical.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill('technical', index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Soft Skills</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add soft skill"
              value={tempSkill.soft}
              onChange={(e) => setTempSkill({ ...tempSkill, soft: e.target.value })}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill('soft'))}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => addSkill('soft')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.skills.soft.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill('soft', index)}
                  className="text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2">
            Projects
          </h3>
          <button
            type="button"
            onClick={addProject}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Project
          </button>
        </div>
        {formData.projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
            <input
              type="text"
              placeholder="Project Title"
              value={project.title}
              onChange={(e) => updateProject(index, 'title', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
            <input
              type="text"
              placeholder="Technologies (comma-separated)"
              value={project.technologies?.join(', ') || ''}
              onChange={(e) => updateProject(index, 'technologies', e.target.value.split(',').map(t => t.trim()))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="url"
                placeholder="Live Link"
                value={project.link}
                onChange={(e) => updateProject(index, 'link', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                placeholder="GitHub Link"
                value={project.github}
                onChange={(e) => updateProject(index, 'github', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="mt-2 text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-blue-500 pb-2">
          Languages
        </h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add language"
            value={tempLanguage}
            onChange={(e) => setTempLanguage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={addLanguage}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.languages.map((lang, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {lang}
              <button
                type="button"
                onClick={() => removeLanguage(index)}
                className="text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition text-lg font-semibold shadow-lg"
        >
          Save Resume
        </button>
      </div>
    </form>
  );
};

export default ResumeForm;