# cc-hint

> cc-hint is a extension to get all UI-libraries' intelligent hints now for vue , also can easily be extented to react/others by users... It get tips from api-jsons of "quasar/antdv/devui/...", and the api-jsons could diy all by yourself so easily.

## Features

All-hints in one for vue-based ui-libraries, or even react/others....

## Thanks

This Extension bases on the andv helper and was aimed largely for more vue/react/others ui libraries. So Big Big Big Thanks to andv helper.

## Document And Usage

-   You could diy your own hint-json for vue/react/... ui by changing the vscode-setting : "name" and "jsonpath", offering the style-like json as the extension's template.
-   If no need for one ui hint just delete the vsode-setting of it.

## Support Json Templates With 3-kind-style

```json
    // template-style-1 ——extentions suggest this kind
    {
        "tag-name":{
            "props":{  // ensure this name === "props"
                "prop-a":{},
                "prop-b":{}
                }
            },
            "events":{      // ensure this name==="events"
                "event-a":{},
                "event-b":{}
            }
        }
    }
    // template-style-2 —— extension auto convert it to style-1 
    {
            "props":{  // ensure this name === "props"
                "prop-a":{},
                "prop-b":{}
                }
            },
            "events":{      // ensure this name==="events"
                "event-a":{},
                "event-b":{}
            }
    }
    // template-style-3 —— extension auto convert it to style-1 
    // with filename like a-component.json or AComponent.json
    // then filenames  ➔ tags
    {
        "prop-a":{},
        "prop-b":{}
        ...
    }

```

## For Developpers

-   Extensino uses tsup to bundle.
-   Easily generator the json-hint of your own ui-library.

## Contribution

You are welcome for pulling any request, that will make cc-hint better.

## source code

https://github.com/cicin411/cc-hint https://github.com/cicin411/cc-hint

## LICENSE

MIT
