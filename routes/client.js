const express = require("express");

var ClientModelMethods = require("../Models/client.model");

// questionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const clientRoutes = express.Router();

//This will help us connect to the database

// This section will help you get a list of all the records.
clientRoutes.route("/client").get(ClientModelMethods.Displayall);

// This section will help you create a new record.
clientRoutes.route("/client/add").post(ClientModelMethods.Create);

// This section will help you update a record by id.
clientRoutes.route("/update/:id").post(ClientModelMethods.Update);

// This section will make a request
clientRoutes.route("/tutor/:id").get(ClientModelMethods.DisplayOne);

// This section will make a request
clientRoutes.route("/:id").get(ClientModelMethods.GetQuestion);

// This section will help you delete a record
clientRoutes.route("/:id").delete(ClientModelMethods.DeleteQuestion);

clientRoutes.route("/delete/:id").post(ClientModelMethods.DeleteQuestion);

module.exports = clientRoutes;
