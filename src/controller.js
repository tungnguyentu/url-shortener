const service = require("../service");

const get = async (req, res, next) => {
  try {
    const longUrl = await service.get(req.params.shortUrl);

    if (longUrl === undefined) {
      const err = new Error("long url not found");
      err.statusCode = 404;
      throw err;
    }
    res.json({ data: longUrl });
  } catch (error) {
    next(error);
  }
};


const save = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};



module.exports = {
 get,
 save
};