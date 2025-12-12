const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String },
  description: { type: String },
  current: { type: Boolean, default: false }
});

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  field: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String },
  gpa: { type: String }
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String }],
  link: { type: String },
  github: { type: String }
});

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String },
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    summary: { type: String }
  },
  experience: [experienceSchema],
  education: [educationSchema],
  skills: {
    technical: [{ type: String }],
    soft: [{ type: String }]
  },
  projects: [projectSchema],
  certifications: [{
    name: { type: String },
    issuer: { type: String },
    date: { type: String },
    credentialId: { type: String }
  }],
  languages: [{ type: String }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Resume', resumeSchema);