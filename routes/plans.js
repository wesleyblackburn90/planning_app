import express from 'express'
import {Plan} from '../models/plan.js'

const router = express.Router()

router.get('/', (req,res) => {
  Plan.find()
    .then(plans => res.json(plans))
      .catch(err=> res.status(422).json(err))
})

router.post('/', (req,res) => {
  debugger
    const newPlan = new Plan({
      start: req.body.start,
      end: req.body.end,
      city: req.body.city,
      itinerary: req.body.itinerary
    })

    newPlan.save().then(plan => res.json(plan))
      .catch(err => res.status(422).json(err))
})

export const plans = router;
