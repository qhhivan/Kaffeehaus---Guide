const asyncHandler = require('express-async-handler');
const kaffeehaus = require('../model/kaffeehaus');

const getEvents = asyncHandler(async (req, res) => {
  // Der Code und die Daten von getEvents werden hier abgespeichert
  const { code, data } = await kaffeehaus.getEvents();
  res.status(code).json(data);
});

module.exports = { getEvents };
