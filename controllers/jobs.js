const { Job } = require('../models')

async function index(req, res) {
  try {
    const jobs = await Job.findAll({})
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  index,
  
}