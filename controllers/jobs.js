const { Job } = require('../models')

async function create(req, res) {
  try{
    console.log('req.body:', req.body);
    req.body.profileId = req.user.profile.id
    const job = await Job.create(req.body)
    console.log('job:', job);
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

async function update(req, res) {
  try {
    const job = await Job.findByPk(req.params.id)
    job.set({stillHiring: false})
    job.save()
    res.status(200).json(job)
  }catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteJob(req, res) {
  try {
    const job = await Job.findByPk(req.params.id)
    await job.destroy()
    res.status(200).json(job)
  }catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteJob,
}