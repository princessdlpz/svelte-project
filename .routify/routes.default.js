

export default {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default__layout_svelte",
      "name": "+layout",
      "file": {
        "path": "src/routes/+layout.svelte",
        "dir": "src/routes",
        "base": "+layout.svelte",
        "ext": ".svelte",
        "name": "+layout"
      },
      "asyncModule": () => import('../src/routes/+layout.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default__page_svelte",
      "name": "+page",
      "file": {
        "path": "src/routes/+page.svelte",
        "dir": "src/routes",
        "base": "+page.svelte",
        "ext": ".svelte",
        "name": "+page"
      },
      "asyncModule": () => import('../src/routes/+page.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_api",
      "name": "api",
      "module": false,
      "file": {
        "path": "src/routes/api",
        "dir": "src/routes",
        "base": "api",
        "ext": "",
        "name": "api"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_api_auth",
          "name": "auth",
          "module": false,
          "file": {
            "path": "src/routes/api/auth",
            "dir": "src/routes/api",
            "base": "auth",
            "ext": "",
            "name": "auth"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_api_auth_callback",
              "name": "callback",
              "module": false,
              "file": {
                "path": "src/routes/api/auth/callback",
                "dir": "src/routes/api/auth",
                "base": "callback",
                "ext": "",
                "name": "callback"
              },
              "children": []
            },
            {
              "meta": {},
              "id": "_default_api_auth_login",
              "name": "login",
              "module": false,
              "file": {
                "path": "src/routes/api/auth/login",
                "dir": "src/routes/api/auth",
                "base": "login",
                "ext": "",
                "name": "login"
              },
              "children": []
            },
            {
              "meta": {},
              "id": "_default_api_auth_logout",
              "name": "logout",
              "module": false,
              "file": {
                "path": "src/routes/api/auth/logout",
                "dir": "src/routes/api/auth",
                "base": "logout",
                "ext": "",
                "name": "logout"
              },
              "children": []
            },
            {
              "meta": {},
              "id": "_default_api_auth_refresh",
              "name": "refresh",
              "module": false,
              "file": {
                "path": "src/routes/api/auth/refresh",
                "dir": "src/routes/api/auth",
                "base": "refresh",
                "ext": "",
                "name": "refresh"
              },
              "children": []
            }
          ]
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_login",
      "name": "login",
      "module": false,
      "file": {
        "path": "src/routes/login",
        "dir": "src/routes",
        "base": "login",
        "ext": "",
        "name": "login"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_login__page_svelte",
          "name": "+page",
          "file": {
            "path": "src/routes/login/+page.svelte",
            "dir": "src/routes/login",
            "base": "+page.svelte",
            "ext": ".svelte",
            "name": "+page"
          },
          "asyncModule": () => import('../src/routes/login/+page.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false,
        "inline": false
      },
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}