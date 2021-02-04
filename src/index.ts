import { CloudBuildClient } from "@google-cloud/cloudbuild";
import { Request, Response } from "express";

const PROJECT_ID = "YOUR_PROJECT_ID";
const TRIGGER_ID = "YOUR_CLOUD_BUILD_TRIGGER_ID";
const BRANCH_NAME = "BRANCH_NAME"; // e.g. "main"

export const triggerCloudBuild = async (_req: Request, res: Response) => {
  const cb = new CloudBuildClient();

  try {
    // Starts a build against the branch provided.
    await cb.runBuildTrigger({
      projectId: PROJECT_ID,
      triggerId: TRIGGER_ID,
      source: {
        projectId: PROJECT_ID,
        dir: "./",
        branchName: BRANCH_NAME,
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }

  res.status(200).send("triggered cloud build!");
};
