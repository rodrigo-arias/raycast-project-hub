/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Max Recent Projects - Maximum number of recent projects to show (default: 3) */
  "maxRecentProjects": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `manage-projects` command */
  export type ManageProjects = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `manage-projects` command */
  export type ManageProjects = {}
}

