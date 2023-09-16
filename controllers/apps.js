const Apps = require("../models/apps");

async function getApps(req, res) {
  try {
    const apps = await Apps.find();
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function postApp(req, res) {
  try {
    const app = new Apps(req.body);
    await app.save();
    res.status(201).json(app);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getSingleApp(req, res) {
  try {
    const appId = req.params.id;
    const app = await Apps.findById(appId);

    if (!app) {
      return res.status(404).json({ message: "App not found" });
    }

    res.status(200).json(app);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function putApp(req, res) {
  try {
    const appId = req.params.id;

    await Apps.updateOne({ _id: appId }, { $set: req.body });

    const app = await Apps.findById(appId);

    res.status(200).json(app);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteApp(req, res) {
  try {
    const appId = req.params.id;

    const app = await Apps.findByIdAndRemove(appId);
    if (!app) {
      return res.status(404).json({ message: "App not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getApps,
  postApp,
  getSingleApp,
  putApp,
  deleteApp,
};
