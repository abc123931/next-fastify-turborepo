module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/docs/",
        "apps/web/",
        "packages/ui/",
        "packages/schemas/",
        "packages/config/",
        "packages/tsconfig/",
      ],
    },
  },
};
