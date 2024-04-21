const captureCriminal = (req, res) => {
  const selectedCopsData = req.body;
  const isSuccess = Math.random() < 0.5;

  if (isSuccess && selectedCopsData.length > 0) {
    const randomIndex = Math.floor(Math.random() * selectedCopsData.length);
    const randomRecord = selectedCopsData[randomIndex];
    
    const delay = Math.floor(Math.random() * (6000 - 2000) + 2000);
    
    setTimeout(() => {
      res.status(200).json({ status: 'Successful capture the criminal', data: randomRecord });
    }, delay);
  } else {
    setTimeout(() => {
      res.status(200).json({ status: 'Unsuccessful criminal not found!!', data: null });
    }, 2000);
  }
};

module.exports = { captureCriminal };
