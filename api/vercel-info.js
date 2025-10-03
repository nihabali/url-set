// api/vercel-info.js
export default function handler(req, res) {
  // Vercel environment variables
  const gitInfo = {
    gitRepoOwner: process.env.VERCEL_GIT_REPO_OWNER,
    gitRepoSlug: process.env.VERCEL_GIT_REPO_SLUG,
    gitCommitRef: process.env.VERCEL_GIT_COMMIT_REF,
    gitCommitSha: process.env.VERCEL_GIT_COMMIT_SHA,
    gitCommitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE,
    gitCommitAuthorName: process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME,
    gitCommitAuthorLogin: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN,
  };

  res.status(200).json(gitInfo);
}
