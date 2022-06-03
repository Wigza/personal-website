
/**
 * @roxi/routify 2.18.3
 * File generated Sat Jun 04 2022 09:14:08 GMT+1000 (Australian Eastern Standard Time)
 */

export const __version = "2.18.3"
export const __timestamp = "2022-06-03T23:14:08.713Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "about.svelte",
      "filepath": "/about.svelte",
      "name": "about",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/about.svelte",
      "importPath": "../src/pages/about.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/about",
      "id": "_about",
      "component": () => import('../src/pages/about.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "work",
      "filepath": "/work",
      "name": "work",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "designsystems",
          "filepath": "/work/designsystems",
          "name": "designsystems",
          "ext": "",
          "badExt": false,
          "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work/designsystems",
          "children": [
            {
              "isFile": false,
              "isDir": true,
              "file": "assembler",
              "filepath": "/work/designsystems/assembler",
              "name": "assembler",
              "ext": "",
              "badExt": false,
              "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work/designsystems/assembler",
              "children": [
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "combinations.svelte",
                  "filepath": "/work/designsystems/assembler/combinations.svelte",
                  "name": "combinations",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work/designsystems/assembler/combinations.svelte",
                  "importPath": "../src/pages/work/designsystems/assembler/combinations.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/work/designsystems/assembler/combinations",
                  "id": "_work_designsystems_assembler_combinations",
                  "component": () => import('../src/pages/work/designsystems/assembler/combinations.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "components.svelte",
                  "filepath": "/work/designsystems/assembler/components.svelte",
                  "name": "components",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work/designsystems/assembler/components.svelte",
                  "importPath": "../src/pages/work/designsystems/assembler/components.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/work/designsystems/assembler/components",
                  "id": "_work_designsystems_assembler_components",
                  "component": () => import('../src/pages/work/designsystems/assembler/components.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "foundations.svelte",
                  "filepath": "/work/designsystems/assembler/foundations.svelte",
                  "name": "foundations",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work/designsystems/assembler/foundations.svelte",
                  "importPath": "../src/pages/work/designsystems/assembler/foundations.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/work/designsystems/assembler/foundations",
                  "id": "_work_designsystems_assembler_foundations",
                  "component": () => import('../src/pages/work/designsystems/assembler/foundations.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/work/designsystems/assembler/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work/designsystems/assembler/index.svelte",
                  "importPath": "../src/pages/work/designsystems/assembler/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/work/designsystems/assembler/index",
                  "id": "_work_designsystems_assembler_index",
                  "component": () => import('../src/pages/work/designsystems/assembler/index.svelte').then(m => m.default)
                }
              ],
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/work/designsystems/assembler"
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/work/designsystems/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work/designsystems/index.svelte",
              "importPath": "../src/pages/work/designsystems/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/work/designsystems/index",
              "id": "_work_designsystems_index",
              "component": () => import('../src/pages/work/designsystems/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/work/designsystems"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/work/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/tim.phillips/Documents/GitHub/personal-website/src/pages/work/index.svelte",
          "importPath": "../src/pages/work/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/work/index",
          "id": "_work_index",
          "component": () => import('../src/pages/work/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/work"
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

