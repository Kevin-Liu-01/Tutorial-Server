const ClientModelSchema = require("../schemas/client-schema.js");

/* Create */
ClientModelSchema.Displayall = function (req, res) {
  console.log("Function Displayall called");

  ClientModelSchema.find({})
    .exec()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};
/* Retrieve */
ClientModelSchema.Create = async function (req, res) {
  console.log("Function Create called");

  const myObj = new ClientModelSchema({
    name: req.body.name,
    mon_status: req.body.mon_status,
    tues_status: req.body.tues_status,
    weds_status: req.body.weds_status,
    thurs_status: req.body.thurs_status,
    fri_status: req.body.fri_status,
    sat_status: req.body.sat_status,
    sun_status: req.body.sun_status,
    morn_status: req.body.morn_status,
    noon_status: req.body.noon_status,
    evening_status: req.body.evening_status,
    subj_status: req.body.subj_status,
    virt_status: req.body.virt_status,
    description: req.body.desc,
    rate: req.body.rate,
    email: req.body.email,
    zip: req.body.zip,
  });

  try {
    let result = await myObj.save();

    console.log("Time");

    // await new Promise(resolve => setTimeout(resolve, 5000));

    return res.json(result);
  } catch (err) {
    return res.json(error);
  }
};

ClientModelSchema.Update = function (req, res) {
  console.log("Function Update called");

  return ClientModelSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        mon_status: req.body.monday_status,
        tues_status: req.body.tuesday_status,
        weds_status: req.body.wedenesday_status,
        thurs_status: req.body.thursday_status,
        fri_status: req.body.friday_status,
        sat_status: req.body.sat_status,
        sun_status: req.body.sun_status,
        morn_status: req.body.morn_status,
        noon_status: req.body.afternoon_status,
        evening_status: req.body.evening_status,
        subj_status: req.body.subject_status,
        virt_status: req.body.virtual_status,
        description: req.body.description,
        rate: req.body.rate,
        email: req.body.email,
        zip: req.body.zip,
      },
    }
  )
    .exec()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};

ClientModelSchema.DisplayOne = (req, res) => {
  console.log("returning");
  return ClientModelSchema.findById(req.params.id)
    .then((result) => {
      return console.log(res.json(result));
    })
    .catch((error) => {
      return res.json(error);
    });
};

ClientModelSchema.GetQuestion = (req, res) => {
  // const id = req.params.id;
  // console.log("/:id is called with id=" + id)
  // let db_connect = dbo.getDb("employees");
  // var myquery = { id: req.body.id };
  // db_connect.collection("records").findOne(myquery, function (err, obj) {
  //   if (err) {
  //   console.log("get failed" + err);
  //   throw err;
  // }
  // console.log("obj : " + obj)
  //   // res.json(obj);
  //   console.log("/:id was called with id=" + id)
  //   return res.json(obj);
  // });
};

ClientModelSchema.DeleteQuestion = (req, res) => {
  console.log("Document deleting: " + req.params.id);
  return ClientModelSchema.findByIdAndRemove(req.params.id)
    .exec()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};

module.exports = ClientModelSchema;
