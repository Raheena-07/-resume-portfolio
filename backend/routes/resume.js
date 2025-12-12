const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Create or Update Resume
router.post('/', async (req, res) => {
  try {
    // Check if resume exists
    const existingResume = await Resume.findOne();
    
    if (existingResume) {
      // Update existing resume
      const updatedResume = await Resume.findByIdAndUpdate(
        existingResume._id,
        req.body,
        { new: true, runValidators: true }
      );
      return res.status(200).json({
        success: true,
        message: 'Resume updated successfully',
        data: updatedResume
      });
    }
    
    // Create new resume
    const newResume = new Resume(req.body);
    await newResume.save();
    
    res.status(201).json({
      success: true,
      message: 'Resume created successfully',
      data: newResume
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error saving resume',
      error: error.message
    });
  }
});

// Get Resume
router.get('/', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    
    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: resume
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching resume',
      error: error.message
    });
  }
});

// Delete Resume
router.delete('/', async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete();
    
    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Resume deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting resume',
      error: error.message
    });
  }
});

module.exports = router;