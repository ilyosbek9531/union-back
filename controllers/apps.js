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
  console.log("req", req.body);
  try {
    const { name, tab_name, icon } = req.body;
    const user = new Apps({ name, tab_name, icon });
    await user.save();
    res.status(201).json(user);
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

async function patchApp(req, res) {
  try {
    const appId = req.params.id;
    const { name, tab_name, icon } = req.body;

    const app = await User.findById(appId);

    if (!app) {
      return res.status(404).json({ message: "App not found" });
    }

    if (name) {
      user.name = name;
    }

    if (tab_name) {
      user.tab_name = tab_name;
    }

    if (icon) {
      user.icon = icon;
    }

    await app.save();
    res.status(200).json(app);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteApp(req, res) {
  try {
    const appId = req.params.id;

    const app = await Apps.findById(appId);

    if (!app) {
      return res.status(404).json({ message: "App not found" });
    }

    await app.remove();
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
  patchApp,
  deleteApp,
};
