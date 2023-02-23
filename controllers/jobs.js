const { Job } = require('../models')

async function create(req, res) {
  try{
    const job = await Job.create(req.body)
    res.status(200).json(job)
  }catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const jobs = await Job.findAll({})
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
  index,
}