/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    "overview",
    "getting-started",
    "avatars",
    "3d-models",
    {
      type: "category",
      label: "SDK",
      items: [
        "sdk/migration-2.0",
        "sdk/overview",
        "sdk/quick-start",
        "sdk/structure",
        "sdk/react",
        "sdk/sync-state",
        "sdk/web3",
        "sdk/uploading",
        {
          type: "category",
          label: "API Reference",
          items: [
            "sdk/ref/app",
            "sdk/ref/audio",
            "sdk/ref/background",
            "sdk/ref/billboard",
            "sdk/ref/box",
            "sdk/ref/boxes",
            "sdk/ref/climbing",
            "sdk/ref/flying",
            "sdk/ref/gliding",
            "sdk/ref/global",
            "sdk/ref/hdr",
            "sdk/ref/image",
            "sdk/ref/model",
            "sdk/ref/place",
            "sdk/ref/rigidbody",
            "sdk/ref/skysphere",
            "sdk/ref/spawn",
            "sdk/ref/sphere",
            "sdk/ref/spheres",
            "sdk/ref/text",
            "sdk/ref/tonemapping",
            "sdk/ref/trigger",
            "sdk/ref/video",
            "sdk/ref/deg2rad",
            "sdk/ref/rad2deg",
            "sdk/ref/avatar-ref",
            "sdk/ref/euler",
            "sdk/ref/event",
            "sdk/ref/matrix4",
            "sdk/ref/quaternion",
            "sdk/ref/vector3",
            "sdk/ref/app",
            "sdk/ref/randomInt",
            "sdk/ref/seed",
            "sdk/ref/use-world",
            "sdk/ref/use-eth",
            "sdk/ref/use-editing",
            "sdk/ref/use-entity-uid",
            "sdk/ref/use-sync-state",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
