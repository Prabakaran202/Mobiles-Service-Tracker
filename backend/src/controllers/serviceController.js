let records = [];

export const saveRecord = (req, res) => {
  const data = req.body;

  const newRecord = {
    ...data,
    id: records.length + 1,
  };

  records.push(newRecord);

  res.json({
    success: true,
    record: newRecord,
  });
};

export const getRecords = (req, res) => {
  res.json(records);
};
