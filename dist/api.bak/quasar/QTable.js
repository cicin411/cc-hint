// src/api/quasar/QTable.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/table"
};
var props = {
  fullscreen: {
    type: "Boolean",
    sync: true,
    desc: "Fullscreen mode",
    examples: [
      'v-model:fullscreen="isFullscreen"'
    ],
    category: "behavior",
    syncable: true
  },
  "no-route-fullscreen-exit": {
    type: "Boolean",
    desc: "Changing route app won't exit fullscreen",
    category: "behavior"
  },
  rows: {
    type: "Array",
    desc: "Rows of data to display",
    examples: [
      ':rows="myData"'
    ],
    category: "general"
  },
  "row-key": {
    type: [
      "String",
      "Function"
    ],
    desc: "Property of each row that defines the unique key of each row (the result must be a primitive, not Object, Array, etc); The value of property must be string or a function taking a row and returning the desired (nested) key in the row; If supplying a function then for best performance, reference it from your scope and do not define it inline",
    default: "id",
    params: {
      row: {
        type: "Object",
        desc: "The current row being processed",
        examples: [
          "{ name: 'Lorem Ipsum', price: 19 }"
        ]
      }
    },
    returns: {
      type: "Any",
      desc: "Current row's key",
      examples: [
        "'34f39dda-6206-4071-a9df-4393aabe49ac'",
        "34"
      ]
    },
    examples: [
      'row-key="name"',
      ':row-key="row => row.name"'
    ],
    category: "general",
    required: false
  },
  "virtual-scroll": {
    type: "Boolean",
    desc: "Display data using QVirtualScroll (for non-grid mode only)",
    category: "virtual-scroll"
  },
  "virtual-scroll-target": {
    type: [
      "Element",
      "String"
    ],
    desc: "CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one",
    examples: [
      ':scroll-target="$refs.scrollTarget"',
      'scroll-target=".scroll-target-class"',
      'scroll-target="#scroll-target-id"',
      'scroll-target="body"'
    ],
    category: "behavior"
  },
  "virtual-scroll-slice-size": {
    type: [
      "Number",
      "String"
    ],
    desc: "Minimum number of rows to render in the virtual list",
    default: 30,
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-slice-ratio-before": {
    type: [
      "Number",
      "String"
    ],
    desc: "Ratio of number of rows in visible zone to render before it",
    default: 1,
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-slice-ratio-after": {
    type: [
      "Number",
      "String"
    ],
    desc: "Ratio of number of rows in visible zone to render after it",
    default: 1,
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-item-size": {
    type: [
      "Number",
      "String"
    ],
    desc: "Default size in pixels of a row; This value is used for rendering the initial table; Try to use a value close to the minimum size of a row",
    default: "48 (24 if dense)",
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-sticky-size-start": {
    type: [
      "Number",
      "String"
    ],
    desc: "Size in pixels of the sticky header (if using one); A correct value will improve scroll precision; Will be also used for non-virtual-scroll tables for fixing top alignment when using scrollTo method",
    default: "0",
    category: "virtual-scroll|behavior",
    required: false
  },
  "virtual-scroll-sticky-size-end": {
    type: [
      "Number",
      "String"
    ],
    desc: "Size in pixels of the sticky footer part (if using one); A correct value will improve scroll precision",
    default: "0",
    category: "virtual-scroll",
    required: false
  },
  "table-colspan": {
    type: [
      "Number",
      "String"
    ],
    desc: "The number of columns in the table (you need this if you use table-layout: fixed)",
    category: "virtual-scroll|content"
  },
  color: {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    default: "grey-8",
    required: false
  },
  "icon-first-page": {
    type: "String",
    desc: "Icon name following Quasar convention for stepping to first page; Make sure you have the icon library installed unless you are using 'img:' prefix",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "content"
  },
  "icon-prev-page": {
    type: "String",
    desc: "Icon name following Quasar convention for stepping to previous page; Make sure you have the icon library installed unless you are using 'img:' prefix",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "content"
  },
  "icon-next-page": {
    type: "String",
    desc: "Icon name following Quasar convention for stepping to next page; Make sure you have the icon library installed unless you are using 'img:' prefix",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "content"
  },
  "icon-last-page": {
    type: "String",
    desc: "Icon name following Quasar convention for stepping to last page; Make sure you have the icon library installed unless you are using 'img:' prefix",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "content"
  },
  grid: {
    type: "Boolean",
    desc: "Display data as a grid instead of the default table",
    category: "behavior"
  },
  "grid-header": {
    type: "Boolean",
    desc: "Display header for grid-mode also",
    category: "behavior|content"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; Connect with $q.screen for responsive behavior",
    category: "style"
  },
  columns: {
    type: "Array",
    desc: "The column definitions (Array of Objects)",
    examples: [
      ':columns="tableColumns"'
    ],
    category: "column",
    definition: {
      name: {
        type: "String",
        required: true,
        desc: "Unique id, identifies column, (used by pagination.sortBy, 'body-cell-[name]' slot, ...)",
        examples: [
          "desc"
        ]
      },
      label: {
        type: "String",
        required: true,
        desc: "Label for header",
        examples: [
          "Dessert (100g serving)"
        ]
      },
      field: {
        type: [
          "String",
          "Function"
        ],
        required: true,
        desc: "Row Object property to determine value for this column or function which maps to the required property",
        params: {
          row: {
            type: "Object",
            required: true,
            desc: "The current row being processed",
            examples: [
              "{ name: 'Lorem Ipsum', prices: { active: 19, old: 25, list: 29 } }"
            ]
          }
        },
        returns: {
          type: "Any",
          desc: "Value for this column",
          examples: [
            "19"
          ]
        },
        examples: [
          "name",
          "row => row.prices.active"
        ]
      },
      required: {
        type: "Boolean",
        desc: "If we use visible-columns, this col will always be visible"
      },
      align: {
        type: "String",
        desc: "Horizontal alignment of cells in this column",
        values: [
          "left",
          "right",
          "center"
        ],
        default: "right",
        required: false
      },
      sortable: {
        type: "Boolean",
        desc: "Tell QTable you want this column sortable",
        default: false,
        required: false
      },
      sort: {
        type: "Function",
        desc: "Compare function if you have some custom data or want a specific way to compare two rows",
        examples: [
          "(a, b, rowA, rowB) => parseInt(a, 10) - parseInt(b, 10)"
        ],
        params: {
          a: {
            type: "Any",
            required: true,
            desc: "Value of the first comparison term",
            examples: [
              123,
              "abc"
            ]
          },
          b: {
            type: "Any",
            required: true,
            desc: "Value of the second comparison term",
            examples: [
              123,
              "abc"
            ]
          },
          rowA: {
            type: "Object",
            required: true,
            desc: "Full Row object in which is contained the first term",
            examples: [
              "{ name: 'Potassium', value: 'K' }"
            ]
          },
          rowB: {
            type: "Object",
            required: true,
            desc: "Full Row object in which is contained the second term",
            examples: [
              "{ name: 'Fluorine', value: 'F' }"
            ]
          }
        },
        returns: {
          type: "Number",
          desc: "Comparison result of term 'a' with term 'b'. Less than 0 when 'a' should come first; greater than 0 if 'b' should come first; equal to 0 if their position must not be changed with respect to each other",
          examples: [
            "-1",
            "0",
            "1"
          ]
        }
      },
      sortOrder: {
        type: "String",
        desc: "Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); Overrides the 'column-sort-order' prop",
        values: [
          "ad",
          "da"
        ],
        default: "ad",
        required: false
      },
      format: {
        type: "Function",
        desc: "Function you can apply to format your data",
        examples: [
          "(val, row) => `${val}%`",
          "val => val ? /* Unicode checkmark checked */ '\u2611' : /* Unicode checkmark unchecked */ '\u2610'"
        ],
        params: {
          val: {
            type: "Any",
            required: true,
            desc: "Value of the cell",
            examples: [
              123,
              "abc"
            ]
          },
          row: {
            type: "Object",
            required: true,
            desc: "Full Row object in which the cell is contained",
            examples: [
              "{ name: 'Potassium', value: 'K' }"
            ]
          }
        },
        returns: {
          type: "Any",
          desc: "The resulting formatted value",
          examples: [
            "20%"
          ]
        }
      },
      style: {
        type: [
          "String",
          "Function"
        ],
        desc: "Style to apply on normal cells of the column",
        params: {
          row: {
            type: "Object",
            required: true,
            desc: "The current row being processed",
            examples: [
              "{ name: 'Frozen Yogurt', calories: 159 }"
            ]
          }
        },
        returns: {
          type: "String"
        },
        examples: [
          "'width: 500px'",
          "row => (row.calories % 2 === 0 ? 'width: 10px' : 'font-size: 2em; font-weight: bold')"
        ]
      },
      classes: {
        type: [
          "String",
          "Function"
        ],
        desc: "Classes to add on normal cells of the column",
        params: {
          row: {
            type: "Object",
            required: true,
            desc: "The current row being processed",
            examples: [
              "{ name: 'Frozen Yogurt', calories: 159 }"
            ]
          }
        },
        returns: {
          type: "String"
        },
        examples: [
          "'my-special-class bg-primary'",
          "row => (row.calories % 2 === 0 ? 'bg-green text-white' : 'bg-yellow')"
        ]
      },
      headerStyle: {
        type: "String",
        desc: "Style to apply on header cells of the column",
        examples: [
          "width: 500px"
        ]
      },
      headerClasses: {
        type: "String",
        desc: "Classes to add on header cells of the column",
        examples: [
          "my-special-class"
        ]
      }
    }
  },
  "visible-columns": {
    type: "Array",
    desc: "Array of Strings defining column names ('name' property of each column from 'columns' prop definitions); Columns marked as 'required' are not affected by this property",
    examples: [
      ':visible-columns="myCols"',
      "[ 'desc', 'carbs', 'protein' ]"
    ],
    category: "column"
  },
  loading: {
    type: "Boolean",
    desc: "Put Table into 'loading' state; Notify the user something is happening behind the scenes",
    category: "behavior|content"
  },
  title: {
    type: "String",
    desc: "Table title",
    examples: [
      "Device list"
    ],
    category: "content"
  },
  "hide-header": {
    type: "Boolean",
    desc: "Hide table header layer",
    category: "content"
  },
  "hide-bottom": {
    type: "Boolean",
    desc: "Hide table bottom layer regardless of what it has to display",
    category: "content"
  },
  "hide-selected-banner": {
    type: "Boolean",
    desc: "Hide the selected rows banner (if any)",
    category: "content"
  },
  "hide-no-data": {
    type: "Boolean",
    desc: "Hide the default no data bottom layer",
    category: "content"
  },
  "hide-pagination": {
    type: "Boolean",
    desc: "Hide the pagination controls at the bottom",
    category: "content"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  flat: {
    type: "Boolean",
    desc: "Applies a 'flat' design (no default shadow)",
    category: "style"
  },
  bordered: {
    type: "Boolean",
    desc: "Applies a default border to the component",
    category: "style"
  },
  square: {
    type: "Boolean",
    desc: "Removes border-radius so borders are squared",
    category: "style"
  },
  separator: {
    type: "String",
    desc: "Use a separator/border between rows, columns or all cells",
    default: "horizontal",
    values: [
      "horizontal",
      "vertical",
      "cell",
      "none"
    ],
    category: "content",
    required: false
  },
  "wrap-cells": {
    type: "Boolean",
    desc: "Wrap text within table cells",
    category: "content"
  },
  "binary-state-sort": {
    type: "Boolean",
    desc: "Skip the third state (unsorted) when user toggles column sort direction",
    category: "sorting"
  },
  "column-sort-order": {
    type: "String",
    desc: "Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); It gets applied to all columns unless a column has its own sortOrder specified in the 'columns' definition prop",
    values: [
      "ad",
      "da"
    ],
    default: "ad",
    category: "sorting",
    required: false
  },
  "no-data-label": {
    type: "String",
    desc: "Override default text to display when no data is available",
    examples: [
      "No devices available"
    ],
    category: "content"
  },
  "no-results-label": {
    type: "String",
    desc: "Override default text to display when user filters the table and no matched results are found",
    examples: [
      "No matched records"
    ],
    category: "content"
  },
  "loading-label": {
    type: "String",
    desc: "Override default text to display when table is in loading state (see 'loading' prop)",
    examples: [
      "Loading devices..."
    ],
    category: "content"
  },
  "selected-rows-label": {
    type: "Function",
    desc: "Text to display when user selected at least one row; For best performance, reference it from your scope and do not define it inline",
    params: {
      numberOfRows: {
        type: "Number",
        desc: "Number of rows available"
      }
    },
    returns: {
      type: "String",
      desc: "Label to display",
      examples: [
        "5 rows are selected"
      ]
    },
    examples: [
      ':selected-rows-label="getSelectedString"'
    ],
    category: "selection"
  },
  "rows-per-page-label": {
    type: "String",
    desc: "Text to override default rows per page label at bottom of table",
    examples: [
      "Records per page:"
    ],
    category: "pagination"
  },
  "pagination-label": {
    type: "Function",
    desc: "Text to override default pagination label at bottom of table (unless 'pagination' scoped slot is used); For best performance, reference it from your scope and do not define it inline",
    params: {
      firstRowIndex: {
        type: "Number",
        desc: "Index of first displayed row"
      },
      endRowIndex: {
        type: "Number",
        desc: "Index of last displayed row"
      },
      totalRowsNumber: {
        type: "Number",
        desc: "Number of total rows available in data"
      }
    },
    returns: {
      type: "String",
      desc: "Label to display",
      examples: [
        "1-10 of 132"
      ]
    },
    examples: [
      ':pagination-label="getPaginationLabel"'
    ],
    category: "pagination"
  },
  "table-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "CSS style to apply to native HTML <table> element's wrapper (which is a DIV)",
    examples: [
      "background-color: #ff0000",
      `:table-style="{ backgroundColor: '#ff0000' }"`
    ],
    category: "style"
  },
  "table-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "CSS classes to apply to native HTML <table> element's wrapper (which is a DIV)",
    examples: [
      "my-special-class",
      `:table-class="{ 'my-special-class': [Boolean condition] }"`
    ],
    category: "style"
  },
  "table-header-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "CSS style to apply to header of native HTML <table> (which is a TR)",
    examples: [
      "background-color: #ff0000",
      `:table-header-style="{ backgroundColor: '#ff0000' }"`
    ],
    category: "style"
  },
  "table-header-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "CSS classes to apply to header of native HTML <table> (which is a TR)",
    examples: [
      "my-special-class",
      `:table-header-class="{ 'my-special-class': [Boolean condition] }"`
    ],
    category: "style"
  },
  "card-container-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "CSS style to apply to the cards container (when in grid mode)",
    examples: [
      "background-color: #ff0000",
      `:card-container-style="{ backgroundColor: '#ff0000' }"`
    ],
    category: "style"
  },
  "card-container-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "CSS classes to apply to the cards container (when in grid mode)",
    examples: [
      "my-special-class",
      "justify-center",
      `:card-container-class="{ 'my-special-class': [Boolean condition] }"`
    ],
    category: "style"
  },
  "card-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "CSS style to apply to the card (when in grid mode) or container card (when not in grid mode)",
    examples: [
      "background-color: #ff0000",
      `:card-style="{ backgroundColor: '#ff0000' }"`
    ],
    category: "style"
  },
  "card-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "CSS classes to apply to the card (when in grid mode) or container card (when not in grid mode)",
    examples: [
      "my-special-class",
      `:card-class="{ 'my-special-class': [Boolean condition] }"`
    ],
    category: "style"
  },
  "title-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "CSS classes to apply to the title (if using 'title' prop)",
    examples: [
      "my-special-class",
      "text-h1",
      `:title-class="{ 'text-h1': [Boolean condition] }"`
    ],
    category: "style"
  },
  filter: {
    type: [
      "String",
      "Object"
    ],
    desc: "String/Object to filter table with; When using an Object it requires 'filter-method' to also be specified since it will be a custom filtering",
    examples: [
      ':filter="myFilterInput"'
    ],
    category: "filter"
  },
  "filter-method": {
    type: "Function",
    desc: "The actual filtering mechanism; For best performance, reference it from your scope and do not define it inline",
    params: {
      rows: {
        type: "Array",
        desc: "Array of rows"
      },
      terms: {
        type: [
          "String",
          "Object"
        ],
        desc: "Terms to filter with (is essentially the 'filter' prop value)"
      },
      cols: {
        type: "Array",
        desc: "Column definitions"
      },
      getCellValue: {
        type: "Function",
        desc: "Optional function to get a cell value",
        params: {
          col: {
            type: "Object",
            required: true,
            desc: "Column name from column definitions"
          },
          row: {
            type: "Object",
            required: true,
            desc: "The row object"
          }
        },
        returns: {
          type: "Any",
          desc: "Parsed/Processed cell value",
          examples: [
            "Ice Cream Sandwich"
          ]
        }
      }
    },
    returns: {
      type: "Array",
      desc: "Filtered rows"
    },
    default: "(see source code)",
    examples: [
      "(see source code)"
    ],
    category: "filter",
    required: false
  },
  pagination: {
    type: "Object",
    desc: "Pagination object; You can also use the 'v-model:pagination' for synching; When not synching it simply initializes the pagination on first render",
    definition: {
      sortBy: {
        type: "String",
        desc: "Column name (from column definition)",
        examples: [
          "calories"
        ]
      },
      descending: {
        type: "Boolean",
        desc: "Is sorting in descending order?"
      },
      page: {
        type: "Number",
        desc: "Page number (1-based)"
      },
      rowsPerPage: {
        type: "Number",
        desc: "How many rows per page? 0 means Infinite"
      },
      rowsNumber: {
        type: "Number",
        desc: "For server-side fetching only. How many total database rows are there to be added to the table. If set, causes the QTable to emit @request when data is required."
      }
    },
    syncable: true,
    examples: [
      ':pagination="myInitialPagination"',
      'v-model:pagination="myPagination"'
    ],
    category: "pagination"
  },
  "rows-per-page-options": {
    type: "Array",
    desc: "Options for user to pick (Numbers); Number 0 means 'Show all rows in one page'",
    default: "[ 3, 5, 7, 10, 15, 20, 25, 50, 0 ]",
    examples: [
      ':rows-per-page-options="[10, 20]"'
    ],
    category: "pagination",
    required: false
  },
  selection: {
    type: "String",
    desc: "Selection type",
    default: "none",
    values: [
      "single",
      "multiple",
      "none"
    ],
    category: "selection",
    required: false
  },
  selected: {
    type: "Array",
    desc: "Keeps the user selection array",
    default: "[]",
    syncable: true,
    examples: [
      'v-model:selected="selection"'
    ],
    category: "selection",
    required: false
  },
  expanded: {
    type: "Array",
    desc: "Keeps the array with expanded rows keys",
    default: "[]",
    syncable: true,
    examples: [
      'v-model:expanded="expanded"'
    ],
    category: "expansion",
    required: false
  },
  "sort-method": {
    type: "Function",
    desc: "The actual sort mechanism. Function (rows, sortBy, descending) => sorted rows; For best performance, reference it from your scope and do not define it inline",
    params: {
      rows: {
        type: "Array",
        desc: "Array with rows"
      },
      sortBy: {
        type: "String",
        desc: "Column name (from column definition)",
        examples: [
          "calories"
        ]
      },
      descending: {
        type: "Boolean",
        desc: "Is sorting in descending order?"
      }
    },
    returns: {
      type: "Array",
      desc: "Sorted rows"
    },
    default: "(see source code)",
    examples: [
      "(see source code)"
    ],
    category: "sorting",
    required: false
  }
};
var slots = {
  loading: {
    desc: "Override default effect when table is in loading state; Suggestion: QInnerLoading"
  },
  item: {
    desc: "Slot to use for defining an item when in 'grid' mode; Suggestion: QCard",
    scope: {
      key: {
        type: "Any",
        desc: "Row/Item's key"
      },
      row: {
        type: "Object",
        desc: "Row/Item object"
      },
      rowIndex: {
        type: "Number",
        desc: "Row/Item's index (0 based) in the filtered and sorted table"
      },
      pageIndex: {
        type: "Number",
        desc: "Row/Item's index (0 based) in the current page of the filtered and sorted table"
      },
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row/item selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row/item expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      }
    }
  },
  body: {
    desc: "Slot to define how a body row looks like; Suggestion: QTr + Td",
    scope: {
      key: {
        type: "Any",
        desc: "Row's key"
      },
      row: {
        type: "Object",
        desc: "Row object"
      },
      rowIndex: {
        type: "Number",
        desc: "Row's index (0 based) in the filtered and sorted table"
      },
      pageIndex: {
        type: "Number",
        desc: "Row's index (0 based) in the current page of the filtered and sorted table"
      },
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      },
      __trClass: {
        type: "String",
        desc: "Internal prop passed down to QTr (if used)"
      }
    }
  },
  "body-cell": {
    desc: "Slot to define how all body cells look like; Suggestion: QTd",
    scope: {
      col: {
        type: "Object",
        desc: "Column definition for column associated with table cell"
      },
      value: {
        type: "Any",
        desc: "Parsed/Formatted value of table cell"
      },
      key: {
        type: "Any",
        desc: "Row's key"
      },
      row: {
        type: "Object",
        desc: "Row object"
      },
      rowIndex: {
        type: "Number",
        desc: "Row's index (0 based) in the filtered and sorted table"
      },
      pageIndex: {
        type: "Number",
        desc: "Row's index (0 based) in the current page of the filtered and sorted table"
      },
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      }
    }
  },
  "body-cell-[name]": {
    desc: "Slot to define how a specific column cell looks like; replace '[name]' with column name (from columns definition object)",
    scope: {
      col: {
        type: "Object",
        desc: "Column definition for column associated with table cell"
      },
      value: {
        type: "Any",
        desc: "Parsed/Formatted value of table cell"
      },
      key: {
        type: "Any",
        desc: "Row's key"
      },
      row: {
        type: "Object",
        desc: "Row object"
      },
      rowIndex: {
        type: "Number",
        desc: "Row's index (0 based) in the filtered and sorted table"
      },
      pageIndex: {
        type: "Number",
        desc: "Row's index (0 based) in the current page of the filtered and sorted table"
      },
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      }
    }
  },
  header: {
    desc: "Slot to define how header looks like; Suggestion: QTr + QTh",
    scope: {
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      },
      __trClass: {
        type: "String",
        desc: "Internal prop passed down to QTr (if used)"
      },
      header: {
        type: "Boolean",
        desc: "Internal prop passed down to QTh (if used); Always 'true'"
      }
    }
  },
  "header-cell": {
    desc: "Slot to define how each header cell looks like; Suggestion: QTh",
    scope: {
      col: {
        type: "Object",
        desc: "Column definition associated to header cell"
      },
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      }
    }
  },
  "header-cell-[name]": {
    desc: "Slot to define how a specific header cell looks like; replace '[name]' with column name (from columns definition object)",
    scope: {
      col: {
        type: "Object",
        desc: "Column definition associated to header cell"
      },
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      }
    }
  },
  "body-selection": {
    desc: "Slot to define how body selection column looks like; Suggestion: QCheckbox",
    scope: {
      key: {
        type: "Any",
        desc: "Row's key"
      },
      row: {
        type: "Object",
        desc: "Row object"
      },
      rowIndex: {
        type: "Number",
        desc: "Row's index (0 based) in the filtered and sorted table"
      },
      pageIndex: {
        type: "Number",
        desc: "Row's index (0 based) in the current page of the filtered and sorted table"
      },
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      }
    }
  },
  "header-selection": {
    desc: "Slot to define how header selection column looks like (available only for multiple selection mode); Suggestion: QCheckbox",
    scope: {
      cols: {
        type: "Object",
        desc: "Column definitions"
      },
      colsMap: {
        type: "Object",
        desc: "Column mapping (key is column name, value is column object)"
      },
      sort: {
        type: "Function",
        desc: "Trigger a table sort",
        params: {
          col: {
            type: [
              "String",
              "Object"
            ],
            required: true,
            desc: "Column name or column definition object",
            examples: [
              "calories"
            ]
          }
        },
        returns: null
      },
      selected: {
        type: "Boolean",
        desc: "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
        reactive: true
      },
      expand: {
        type: "Boolean",
        desc: "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      color: {
        type: "String",
        desc: "Color name for component from the Quasar Color Palette",
        examples: [
          "primary",
          "teal-10"
        ],
        category: "style"
      },
      dark: {
        type: "Boolean",
        desc: "Notify the component that the background is a dark color",
        category: "style"
      },
      dense: {
        type: "Boolean",
        desc: "Dense mode; occupies less space",
        category: "style"
      }
    }
  },
  "top-row": {
    desc: "Slot to define how top extra row looks like",
    scope: {
      cols: {
        type: "Object",
        desc: "Column definitions"
      }
    }
  },
  "bottom-row": {
    desc: "Slot to define how bottom extra row looks like",
    scope: {
      cols: {
        type: "Object",
        desc: "Column definitions"
      }
    }
  },
  top: {
    desc: "Slot to define how table top looks like",
    scope: {
      pagination: {
        type: "Object",
        desc: "Pagination object",
        definition: {
          sortBy: {
            type: "String",
            required: true,
            desc: "Column name (from column definition)",
            examples: [
              "calories"
            ]
          },
          descending: {
            type: "Boolean",
            required: true,
            desc: "Is sorting in descending order?"
          },
          page: {
            type: "Number",
            required: true,
            desc: "Page number (1-based)"
          },
          rowsPerPage: {
            type: "Number",
            required: true,
            desc: "How many rows per page? 0 means Infinite"
          }
        }
      },
      pagesNumber: {
        type: "Number",
        desc: "Number of pages available"
      },
      isFirstPage: {
        type: "Boolean",
        desc: "Are we on first page?"
      },
      isLastPage: {
        type: "Boolean",
        desc: "Are we on last page?"
      },
      firstPage: {
        type: "Function",
        desc: "Navigates to first page",
        params: null,
        returns: null
      },
      prevPage: {
        type: "Function",
        desc: "Navigates to previous page, if available",
        params: null,
        returns: null
      },
      nextPage: {
        type: "Function",
        desc: "Navigates to next page, if available",
        params: null,
        returns: null
      },
      lastPage: {
        type: "Function",
        desc: "Navigates to last page",
        params: null,
        returns: null
      },
      inFullscreen: {
        type: "Boolean",
        desc: "Is table in fullscreen mode?"
      },
      toggleFullscreen: {
        type: "Function",
        desc: "Toggles fullscreen mode",
        params: null,
        returns: null
      }
    }
  },
  bottom: {
    desc: "Slot to define how table bottom looks like",
    scope: {
      pagination: {
        type: "Object",
        desc: "Pagination object",
        definition: {
          sortBy: {
            type: "String",
            required: true,
            desc: "Column name (from column definition)",
            examples: [
              "calories"
            ]
          },
          descending: {
            type: "Boolean",
            required: true,
            desc: "Is sorting in descending order?"
          },
          page: {
            type: "Number",
            required: true,
            desc: "Page number (1-based)"
          },
          rowsPerPage: {
            type: "Number",
            required: true,
            desc: "How many rows per page? 0 means Infinite"
          }
        }
      },
      pagesNumber: {
        type: "Number",
        desc: "Number of pages available"
      },
      isFirstPage: {
        type: "Boolean",
        desc: "Are we on first page?"
      },
      isLastPage: {
        type: "Boolean",
        desc: "Are we on last page?"
      },
      firstPage: {
        type: "Function",
        desc: "Navigates to first page",
        params: null,
        returns: null
      },
      prevPage: {
        type: "Function",
        desc: "Navigates to previous page, if available",
        params: null,
        returns: null
      },
      nextPage: {
        type: "Function",
        desc: "Navigates to next page, if available",
        params: null,
        returns: null
      },
      lastPage: {
        type: "Function",
        desc: "Navigates to last page",
        params: null,
        returns: null
      },
      inFullscreen: {
        type: "Boolean",
        desc: "Is table in fullscreen mode?"
      },
      toggleFullscreen: {
        type: "Function",
        desc: "Toggles fullscreen mode",
        params: null,
        returns: null
      }
    }
  },
  pagination: {
    desc: "Slot to override default pagination label and buttons",
    scope: {
      pagination: {
        type: "Object",
        desc: "Pagination object",
        definition: {
          sortBy: {
            type: "String",
            required: true,
            desc: "Column name (from column definition)",
            examples: [
              "calories"
            ]
          },
          descending: {
            type: "Boolean",
            required: true,
            desc: "Is sorting in descending order?"
          },
          page: {
            type: "Number",
            required: true,
            desc: "Page number (1-based)"
          },
          rowsPerPage: {
            type: "Number",
            required: true,
            desc: "How many rows per page? 0 means Infinite"
          }
        }
      },
      pagesNumber: {
        type: "Number",
        desc: "Number of pages available"
      },
      isFirstPage: {
        type: "Boolean",
        desc: "Are we on first page?"
      },
      isLastPage: {
        type: "Boolean",
        desc: "Are we on last page?"
      },
      firstPage: {
        type: "Function",
        desc: "Navigates to first page",
        params: null,
        returns: null
      },
      prevPage: {
        type: "Function",
        desc: "Navigates to previous page, if available",
        params: null,
        returns: null
      },
      nextPage: {
        type: "Function",
        desc: "Navigates to next page, if available",
        params: null,
        returns: null
      },
      lastPage: {
        type: "Function",
        desc: "Navigates to last page",
        params: null,
        returns: null
      },
      inFullscreen: {
        type: "Boolean",
        desc: "Is table in fullscreen mode?"
      },
      toggleFullscreen: {
        type: "Function",
        desc: "Toggles fullscreen mode",
        params: null,
        returns: null
      }
    }
  },
  "top-left": {
    desc: "Slot to define how left part of the table top looks like",
    scope: {
      pagination: {
        type: "Object",
        desc: "Pagination object",
        definition: {
          sortBy: {
            type: "String",
            required: true,
            desc: "Column name (from column definition)",
            examples: [
              "calories"
            ]
          },
          descending: {
            type: "Boolean",
            required: true,
            desc: "Is sorting in descending order?"
          },
          page: {
            type: "Number",
            required: true,
            desc: "Page number (1-based)"
          },
          rowsPerPage: {
            type: "Number",
            required: true,
            desc: "How many rows per page? 0 means Infinite"
          }
        }
      },
      pagesNumber: {
        type: "Number",
        desc: "Number of pages available"
      },
      isFirstPage: {
        type: "Boolean",
        desc: "Are we on first page?"
      },
      isLastPage: {
        type: "Boolean",
        desc: "Are we on last page?"
      },
      firstPage: {
        type: "Function",
        desc: "Navigates to first page",
        params: null,
        returns: null
      },
      prevPage: {
        type: "Function",
        desc: "Navigates to previous page, if available",
        params: null,
        returns: null
      },
      nextPage: {
        type: "Function",
        desc: "Navigates to next page, if available",
        params: null,
        returns: null
      },
      lastPage: {
        type: "Function",
        desc: "Navigates to last page",
        params: null,
        returns: null
      },
      inFullscreen: {
        type: "Boolean",
        desc: "Is table in fullscreen mode?"
      },
      toggleFullscreen: {
        type: "Function",
        desc: "Toggles fullscreen mode",
        params: null,
        returns: null
      }
    }
  },
  "top-right": {
    desc: "Slot to define how right part of the table top looks like",
    scope: {
      pagination: {
        type: "Object",
        desc: "Pagination object",
        definition: {
          sortBy: {
            type: "String",
            required: true,
            desc: "Column name (from column definition)",
            examples: [
              "calories"
            ]
          },
          descending: {
            type: "Boolean",
            required: true,
            desc: "Is sorting in descending order?"
          },
          page: {
            type: "Number",
            required: true,
            desc: "Page number (1-based)"
          },
          rowsPerPage: {
            type: "Number",
            required: true,
            desc: "How many rows per page? 0 means Infinite"
          }
        }
      },
      pagesNumber: {
        type: "Number",
        desc: "Number of pages available"
      },
      isFirstPage: {
        type: "Boolean",
        desc: "Are we on first page?"
      },
      isLastPage: {
        type: "Boolean",
        desc: "Are we on last page?"
      },
      firstPage: {
        type: "Function",
        desc: "Navigates to first page",
        params: null,
        returns: null
      },
      prevPage: {
        type: "Function",
        desc: "Navigates to previous page, if available",
        params: null,
        returns: null
      },
      nextPage: {
        type: "Function",
        desc: "Navigates to next page, if available",
        params: null,
        returns: null
      },
      lastPage: {
        type: "Function",
        desc: "Navigates to last page",
        params: null,
        returns: null
      },
      inFullscreen: {
        type: "Boolean",
        desc: "Is table in fullscreen mode?"
      },
      toggleFullscreen: {
        type: "Function",
        desc: "Toggles fullscreen mode",
        params: null,
        returns: null
      }
    }
  },
  "top-selection": {
    desc: "Slot to define how top table section looks like when user has selected at least one row",
    scope: {
      pagination: {
        type: "Object",
        desc: "Pagination object",
        definition: {
          sortBy: {
            type: "String",
            required: true,
            desc: "Column name (from column definition)",
            examples: [
              "calories"
            ]
          },
          descending: {
            type: "Boolean",
            required: true,
            desc: "Is sorting in descending order?"
          },
          page: {
            type: "Number",
            required: true,
            desc: "Page number (1-based)"
          },
          rowsPerPage: {
            type: "Number",
            required: true,
            desc: "How many rows per page? 0 means Infinite"
          }
        }
      },
      pagesNumber: {
        type: "Number",
        desc: "Number of pages available"
      },
      isFirstPage: {
        type: "Boolean",
        desc: "Are we on first page?"
      },
      isLastPage: {
        type: "Boolean",
        desc: "Are we on last page?"
      },
      firstPage: {
        type: "Function",
        desc: "Navigates to first page",
        params: null,
        returns: null
      },
      prevPage: {
        type: "Function",
        desc: "Navigates to previous page, if available",
        params: null,
        returns: null
      },
      nextPage: {
        type: "Function",
        desc: "Navigates to next page, if available",
        params: null,
        returns: null
      },
      lastPage: {
        type: "Function",
        desc: "Navigates to last page",
        params: null,
        returns: null
      },
      inFullscreen: {
        type: "Boolean",
        desc: "Is table in fullscreen mode?"
      },
      toggleFullscreen: {
        type: "Function",
        desc: "Toggles fullscreen mode",
        params: null,
        returns: null
      }
    }
  },
  "no-data": {
    desc: "Slot to define how the bottom will look like when is nothing to display",
    scope: {
      message: {
        type: "String",
        desc: "The suggested message",
        examples: [
          "No data available"
        ]
      },
      icon: {
        type: "String",
        desc: "The suggested icon name (following Quasar convention)",
        examples: [
          "warning"
        ]
      }
    }
  }
};
var events = {
  "row-click": {
    desc: "Emitted when user clicks/taps on a row; Is not emitted when using body/row/item scoped slots",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      },
      row: {
        type: "Object",
        desc: "The row upon which user has clicked/tapped"
      },
      index: {
        type: "Number",
        desc: "Index of the row in the current page"
      }
    }
  },
  "row-dblclick": {
    desc: "Emitted when user quickly double clicks/taps on a row; Is not emitted when using body/row/item scoped slots; Please check JS dblclick event support before using",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      },
      row: {
        type: "Object",
        desc: "The row upon which user has double clicked/tapped"
      },
      index: {
        type: "Number",
        desc: "Index of the row in the current page"
      }
    }
  },
  "row-contextmenu": {
    desc: "Emitted when user right clicks/long taps on a row; Is not emitted when using body/row/item scoped slots",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      },
      row: {
        type: "Object",
        desc: "The row upon which user has right clicked/long tapped"
      },
      index: {
        type: "Number",
        desc: "Index of the row in the current page"
      }
    }
  },
  request: {
    desc: "Emitted when a server request is triggered",
    params: {
      requestProp: {
        type: "Object",
        desc: "Props of the request",
        definition: {
          pagination: {
            type: "Object",
            required: true,
            desc: "Pagination object",
            definition: {
              sortBy: {
                type: "String",
                required: true,
                desc: "Column name (from column definition)",
                examples: [
                  "calories"
                ]
              },
              descending: {
                type: "Boolean",
                required: true,
                desc: "Is sorting in descending order?"
              },
              page: {
                type: "Number",
                required: true,
                desc: "Page number (1-based)"
              },
              rowsPerPage: {
                type: "Number",
                required: true,
                desc: "How many rows per page? 0 means Infinite"
              }
            }
          },
          filter: {
            type: [
              "String",
              "Object"
            ],
            desc: "String/Object to filter table with (the 'filter' prop)"
          },
          getCellValue: {
            type: "Function",
            required: true,
            desc: "Function to get a cell value",
            params: {
              col: {
                type: "Object",
                required: true,
                desc: "Column name from column definitions"
              },
              row: {
                type: "Object",
                required: true,
                desc: "The row object"
              }
            },
            returns: {
              type: "Any",
              desc: "Parsed/Processed cell value",
              examples: [
                "Ice Cream Sandwich"
              ]
            }
          }
        }
      }
    }
  },
  selection: {
    desc: "Emitted when user selects/unselects row(s)",
    params: {
      details: {
        type: "Object",
        desc: "Selection details",
        definition: {
          rows: {
            type: "Array",
            required: true,
            desc: "Array of row objects that were selected/unselected"
          },
          keys: {
            type: "Array",
            required: true,
            desc: "Array of the keys of rows that were selected/unselected"
          },
          added: {
            type: "Boolean",
            required: true,
            desc: "Were the rows added to selection (true) or removed from selection (false)"
          },
          evt: {
            type: "Event",
            desc: "JS event object",
            required: true
          }
        }
      }
    }
  },
  "update:pagination": {
    desc: "Used by Vue on 'v-model:pagination' for updating its value",
    params: {
      newPagination: {
        type: "Object",
        desc: "The updated pagination object",
        definition: {
          sortBy: {
            type: "String",
            required: true,
            desc: "Column name (from column definition)",
            examples: [
              "calories"
            ]
          },
          descending: {
            type: "Boolean",
            required: true,
            desc: "Is sorting in descending order?"
          },
          page: {
            type: "Number",
            required: true,
            desc: "Page number (1-based)"
          },
          rowsPerPage: {
            type: "Number",
            required: true,
            desc: "How many rows per page? 0 means Infinite"
          },
          rowsNumber: {
            type: "Number",
            required: false,
            desc: "For server-side fetching only. How many total database rows are there to be added to the table."
          }
        }
      }
    }
  },
  "update:selected": {
    desc: "Used by Vue on 'v-model:selected' prop for updating its value",
    params: {
      newSelected: {
        type: "Array",
        desc: "The updated selected array",
        examples: [
          "[ { name: 'Frozen Yogurt', calories: 159, fat: 6 } ]"
        ]
      }
    }
  },
  "update:expanded": {
    desc: "Used by Vue on 'v-model:expanded' prop for updating its value",
    params: {
      newExpanded: {
        type: "Array",
        desc: "The updated expanded array",
        examples: [
          "[ 'row-a', 'row-b' ]"
        ]
      }
    }
  },
  "virtual-scroll": {
    desc: "Emitted when the virtual scroll occurs, if using virtual scroll",
    params: {
      details: {
        type: "Object",
        desc: "Object of properties on the new scroll position",
        definition: {
          index: {
            type: "Number",
            required: true,
            desc: "Index of the list item that was scrolled into view (0 based)"
          },
          from: {
            type: "Number",
            required: true,
            desc: "The index of the first list item that is rendered (0 based)"
          },
          to: {
            type: "Number",
            required: true,
            desc: "The index of the last list item that is rendered (0 based)"
          },
          direction: {
            type: "String",
            required: true,
            desc: "Direction of change",
            values: [
              "increase",
              "decrease"
            ]
          }
        }
      }
    }
  }
};
var methods = {
  toggleFullscreen: {
    desc: "Toggles fullscreen mode"
  },
  setFullscreen: {
    desc: "Enter the fullscreen view"
  },
  exitFullscreen: {
    desc: "Leave the fullscreen view"
  },
  requestServerInteraction: {
    desc: "Trigger a server request (emits 'request' event)",
    params: {
      props: {
        type: "Object",
        required: false,
        desc: "Request details",
        definition: {
          pagination: {
            type: "Object",
            required: false,
            desc: "Optional pagination object",
            definition: {
              sortBy: {
                type: "String",
                desc: "Column name (from column definition)",
                examples: [
                  "calories"
                ]
              },
              descending: {
                type: "Boolean",
                desc: "Is sorting in descending order?"
              },
              page: {
                type: "Number",
                desc: "Page number (1-based)"
              },
              rowsPerPage: {
                type: "Number",
                desc: "How many rows per page? 0 means Infinite"
              },
              rowsNumber: {
                type: "Number",
                desc: "For server-side fetching only. How many total database rows are there to be added to the table."
              }
            }
          },
          filter: {
            type: "Function",
            desc: "Filtering method (the 'filter-method' prop)",
            params: {
              rows: {
                type: "Array",
                required: true,
                desc: "Array of rows"
              },
              terms: {
                type: [
                  "String",
                  "Object"
                ],
                required: true,
                desc: "Terms to filter with (is essentially the 'filter' prop value)"
              },
              cols: {
                type: "Array",
                desc: "Optional column definitions"
              },
              getCellValue: {
                type: "Function",
                desc: "Optional function to get a cell value",
                params: {
                  col: {
                    type: "Object",
                    desc: "Column name from column definitions"
                  },
                  row: {
                    type: "Object",
                    desc: "The row object"
                  }
                },
                returns: {
                  type: "Any",
                  desc: "Parsed/Processed cell value",
                  examples: [
                    "Ice Cream Sandwich"
                  ]
                }
              }
            },
            returns: {
              type: "Array",
              desc: "Filtered rows"
            }
          }
        }
      }
    }
  },
  setPagination: {
    desc: "Unless using an external pagination Object (through 'v-model:pagination' prop), you can use this method and force the internal pagination to change",
    params: {
      pagination: {
        type: "Object",
        required: true,
        desc: "Pagination object",
        definition: {
          sortBy: {
            type: "String",
            desc: "Column name (from column definition)",
            examples: [
              "calories"
            ]
          },
          descending: {
            type: "Boolean",
            desc: "Is sorting in descending order?"
          },
          page: {
            type: "Number",
            desc: "Page number (1-based)"
          },
          rowsPerPage: {
            type: "Number",
            desc: "How many rows per page? 0 means Infinite"
          }
        }
      },
      forceServerRequest: {
        type: "Boolean",
        desc: "Also force a server request"
      }
    }
  },
  firstPage: {
    desc: "Navigates to first page"
  },
  prevPage: {
    desc: "Navigates to previous page, if available"
  },
  nextPage: {
    desc: "Navigates to next page, if available"
  },
  lastPage: {
    desc: "Navigates to last page"
  },
  isRowSelected: {
    desc: "Determine if a row has been selected by user",
    params: {
      key: {
        type: "Any",
        required: true,
        desc: "Row key value",
        examples: [
          "calories"
        ]
      }
    },
    returns: {
      type: "Boolean",
      desc: "Is row selected or not?"
    }
  },
  clearSelection: {
    desc: "Clears user selection (emits 'update:selected' with empty array)"
  },
  isRowExpanded: {
    desc: "Determine if a row is expanded or not",
    params: {
      key: {
        type: "Any",
        required: true,
        desc: "Row key value",
        examples: [
          "calories"
        ]
      }
    },
    returns: {
      type: "Boolean",
      desc: "Is row expanded or not?"
    }
  },
  setExpanded: {
    desc: "Sets the expanded rows keys array; Especially useful if not using an external 'expanded' state otherwise just emits 'update:expanded' with the value",
    params: {
      expanded: {
        type: "Array",
        required: true,
        desc: "Array containing keys of the expanded rows",
        examples: [
          "[ 'row-a', 'row-b' ]"
        ]
      }
    }
  },
  sort: {
    desc: "Trigger a table sort",
    params: {
      col: {
        type: [
          "String",
          "Object"
        ],
        required: true,
        desc: "Column name or column definition object",
        examples: [
          "calories"
        ]
      }
    }
  },
  resetVirtualScroll: {
    desc: "Resets the virtual scroll (if using it) computations; Needed for custom edge-cases"
  },
  scrollTo: {
    desc: "Scroll the table to the row with the specified index in page (0 based)",
    params: {
      index: {
        type: [
          "String",
          "Number"
        ],
        required: true,
        desc: "The index of the row in page (0 based)"
      },
      edge: {
        type: "String",
        desc: "Only for virtual scroll - the edge to align to if the row is not visible already; If the '-force' version is used then it always aligns",
        values: [
          "start",
          "center",
          "end",
          "start-force",
          "center-force",
          "end-force"
        ],
        default: "end (if scrolling towards the end) / start (if scrolling towards the start)",
        required: false
      }
    }
  }
};
var computedProps = {
  filteredSortedRows: {
    desc: "The filtered and sorted rows (same as the rows prop if using server-side fetching)",
    type: "Array",
    examples: [
      "[ { name: 'Ice Cream Sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, sodium: 129, calcium: 8, iron: 1 }, ... ]"
    ]
  },
  computedRows: {
    desc: "Paginated, filtered, and sorted rows (same as the rows prop if using server-side fetching)",
    type: "Array",
    examples: [
      "[ { name: 'Ice Cream Sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, sodium: 129, calcium: 8, iron: 1 }, ... ]"
    ]
  },
  computedRowsNumber: {
    desc: "The number of computed rows",
    type: "Number"
  }
};
var QTable_default = {
  type,
  meta,
  props,
  slots,
  events,
  methods,
  computedProps
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  computedProps,
  events,
  meta,
  methods,
  props,
  slots,
  type
});
