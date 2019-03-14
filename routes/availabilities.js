'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const Availability = require('../models/availability');

router.post('/:scheduleId/users/:userId/candidates/:candidateId', authenticationEnsurer, (req, res, next) => {
//:は値を受け取れる。　何らかの数値とかが入ってくる↑　URLね。ルールは自分で決めていい。
  const scheduleId = req.params.scheduleId;
  const userId = req.params.userId;
  const candidateId = req.params.candidateId;
  let availability = req.body.availability;
  availability = availability ? parseInt(availability) : 0;
//上のパスでその人のスケジュールID、ユーザーIDによってデータを取ってくる処理が↓　ここはサーバーでの処理というイメージ。
  Availability.upsert({
    scheduleId: scheduleId,
    userId: userId,
    candidateId: candidateId,
    availability: availability
  }).then(() => {
    res.json({ status: 'OK', availability: availability });
  });
});

module.exports = router;