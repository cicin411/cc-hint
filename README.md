# cc-hint

> cc-hint is a VS Code extension to get all UI-libraries' intelligent hints now for vue , may easily extented to react/others by users... Get tips from api-jsons of "quasar/antdv/devui/...", also you could easily diy by offering the json as the templates.

## Features

All-hints in one for vue-based ui-libraries, or even react/others....

## Thanks

This Extension bases on the andv helper and was aimed largely for more or even every vue/react ui libraries. So Big Big Big Thanks to andv helper.

## Document And Usage

-   You could diy your own json hint for vue/react/... ui by changing the vsc-set : "name" and "jsonpath", offering the style-like json as the template.
-   If no need for one ui hint just delete the vs-set of it.

## Support Json Templates With 3-kind-style

```json
    // template-style-1 ——"props" in level 3
    {
        "tag-name":{
            "attr-name":{
                "props":{  // this name === "props"
                    "prop-a":{},
                    "prop-b":{}
                }
            }
        }
    }
    // template-style-2 —— "props" in level 2
    {
        "attr-name":{
            "props":{   // this name === "props"
                "prop-a":{},
                "prop-b":{}
            }
        }
    }
    // template-style-2 —— prop-names directly
    // with filename like a-component.json or AComponent.json
    // then filenames  ➔ tags
    {
        "prop-a":{},
        "prop-b":{}
        ...
    }

```

## For Developpers

-   Extensino uses tsup , so after F5, the terminator will hang waiting for your Ctrl_C then enter "n" to continue debug.

## Contribution

You are welcome for pulling any request, that will make cc-hint better.

## source code

https://github.com/cicin411/cc-hint

## LICENSE

MIT
