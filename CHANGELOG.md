# Change history for ui-receiving

## (IN PROGRESS)

## [1.4.0](https://github.com/folio-org/ui-receiving/tree/v1.4.0) (2021-06-17)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.3.4...v1.4.0)

* Also support `circulation` `11.0`. Refs UIPCIR-21.
* Receiving: Add filters for Expected receipt date and Received date. Refs UIREC-120.
* Implement Keyboard shortcuts modal. Refs UIREC-134.
* Compile Translation Files into AST Format. Refs UIREC-125.
* Display requester from POL when there is one. Refs UIREC-114.
* "Expected receipt date" in Title POL accordion showing wrong date. Refs UIREC-137.
* Resizable Panes - Persistence | Use PersistedPaneset smart component. Refs UIREC-127.
* Receiving app | Apply baseline keyboard shortcuts. Refs UIREC-117.

## [1.3.4](https://github.com/folio-org/ui-receiving/tree/v1.3.4) (2021-06-17)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.3.3...v1.3.4)

* CANNOT receive pieces against package POL. Refs UIREC-143.
* Receiving search: 'No records found' when location is removed. Refs UIREC-142.

## [1.3.3](https://github.com/folio-org/ui-receiving/tree/v1.3.3) (2021-04-21)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.3.2...v1.3.3)

* Permissions for select instance plugin. Refs UIREC-130.
* Add missed permissions. Refs UIREC-129.

## [1.3.2](https://github.com/folio-org/ui-receiving/tree/v1.3.2) (2021-04-13)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.3.1...v1.3.2)

* Add option to search by Vendor reference number. Refs UIREC-119.

## [1.3.1](https://github.com/folio-org/ui-receiving/tree/v1.3.1) (2021-04-06)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.3.0...v1.3.1)

* Calendar widget cutoff by modal when editing pieces. Refs UIREC-118.

## [1.3.0](https://github.com/folio-org/ui-receiving/tree/v1.3.0) (2021-03-15)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.2.1...v1.3.0)

* Upgrade to stripes v6.
* Fix receiving transaction results in unexpected error message. Refs UIREC-112.
* No longer have delete option for Piece. Refs UIREC-113.
* Add personal data disclosure form. Refs UIREC-110.

## [1.2.1](https://github.com/folio-org/ui-receiving/tree/v1.2.1) (2020-11-10)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.2.0...v1.2.1)

* Fix Piece displays as connected to an item when connected item record has been deleted. Refs UIREC-102
* Orders and receiving - want to see that an order is closed in search result list. Refs UIOR-620
* Display warning modal when user trying to receive against a closed Order. Refs UIREC-100.

## [1.2.0](https://github.com/folio-org/ui-receiving/tree/v1.2.0) (2020-10-09)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.1.0...v1.2.0)

* Update view pane to display null as hyphen - Receving. Refs UIREC-98
* Update subheading of the Receiving landing page Search results pane. Refs UIREC-96

### Stories
* [UIREC-95](https://issues.folio.org/browse/UIREC-95) Display 'Vendor', 'Material supplier', 'Access provider' and 'Order type' in title view pane
* [UISACQCOMP-3](https://issues.folio.org/browse/UISACQCOMP-3) Handle import of stripes-acq-components to modules and platform

### Bugs
* [UIREC-73](https://issues.folio.org/browse/UIREC-73) Accessibility Error: Form elements must have labels

## [1.1.0](https://github.com/folio-org/ui-receiving/tree/v1.1.0) (2020-06-12)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.0.4...v1.1.0)

### Stories
* [UIREC-90](https://issues.folio.org/browse/UIREC-90) Update select location workflow for Piece creation/edit
* [UIREC-91](https://issues.folio.org/browse/UIREC-91) Update Create Item workflow for Piece creation/edit
* [UIREC-83](https://issues.folio.org/browse/UIREC-83) Suppot back-end changes in related story
* [UIREC-80](https://issues.folio.org/browse/UIREC-80) Receiving app: Update to Stripes v4
* [UIREC-47](https://issues.folio.org/browse/UIREC-47) Create/lookup instance from receiving Title when not using instance lookup
* [UIREC-42](https://issues.folio.org/browse/UIREC-42) Filter Titles by piece status and Acq unit
* [UIREC-70](https://issues.folio.org/browse/UIREC-70) Display receiving note in multi-piece receiving view
* [UINV-138](https://issues.folio.org/browse/UINV-138) Align actions icons in table to right hand side of view pane(s)

### Bug fixes
* [UIREC-49](https://issues.folio.org/browse/UIREC-49) Save & close button should be disabled until all required fields have values entered
* [UIREC-46](https://issues.folio.org/browse/UIREC-46) Action buttons are not aligning to the right and are displaying states incorrectly
* [UIREC-94](https://issues.folio.org/browse/UIREC-94) Ability to edit unreceived pieces
* [UIREC-92](https://issues.folio.org/browse/UIREC-92) Add Piece modal keeps values from previously edited piece
* [UIORGS-151](https://issues.folio.org/browse/UIORGS-151) Organizations is not using the same Expand/Collapse as implemented in Q4 2019

## [1.0.4](https://github.com/folio-org/ui-receiving/tree/v1.0.4) (2020-05-27)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.0.3...v1.0.4)

### Bug fixes
* [UIREC-93](https://issues.folio.org/browse/UIREC-93) Only see 10 pieces per POL in Receiving

## [1.0.3](https://github.com/folio-org/ui-receiving/tree/v1.0.3) (2020-04-25)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.0.2...v1.0.3)

### Bug fixes
* [UIREC-78](https://issues.folio.org/browse/UIREC-78) Fill PO Line id on create Item request from Add Item modal

## [1.0.2](https://github.com/folio-org/ui-receiving/tree/v1.0.2) (2020-04-06)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.0.1...v1.0.2)

### Bug fixes
* [UIOR-537](https://issues.folio.org/browse/UIOR-537) add missed Location lookup permissions

## [1.0.1](https://github.com/folio-org/ui-receiving/tree/v1.0.1) (2020-03-27)
[Full Changelog](https://github.com/folio-org/ui-receiving/compare/v1.0.0...v1.0.1)

### Bug fixes
* [UIREC-66](https://issues.folio.org/browse/UIREC-66) POL details displaying under Title information accordion
* [UIREC-67](https://issues.folio.org/browse/UIREC-67) Edit piece modal: Incorrect button label
* [UIREC-65](https://issues.folio.org/browse/UIREC-65) Must acknowledge receiving note modal not popping up when clicking "receive"
* [UIREC-62](https://issues.folio.org/browse/UIREC-62) Hotlink POL number in receiving to POL in orders
* [UIREC-59](https://issues.folio.org/browse/UIREC-59) Improve Select location dropdown to use only select Location plugin
* [UIREC-61](https://issues.folio.org/browse/UIREC-61) Caption not displayed when receiving or undeceiving pieces

## [1.0.0](https://github.com/folio-org/ui-receiving/tree/v1.0.0) (2020-03-13)

### Stories
* [UIREC-56](https://issues.folio.org/browse/UIREC-56) Edit piece from clicking table row
* [UIREC-54](https://issues.folio.org/browse/UIREC-54) Update "Unreceive" piece to full screen
* [UIREC-53](https://issues.folio.org/browse/UIREC-53) Update "receive" piece Modal to full screen
* [UIREC-52](https://issues.folio.org/browse/UIREC-52) Update title record Expected and Received accordion columns
* [UIREC-48](https://issues.folio.org/browse/UIREC-48) Select any location for piece when receiving
* [UIREC-45](https://issues.folio.org/browse/UIREC-45) Update receiving icon to new version
* [UIREC-35](https://issues.folio.org/browse/UIREC-35) Edit or receive piece from title view
* [UIREC-36](https://issues.folio.org/browse/UIREC-36) Unreceive piece for a given Title
* [UIREC-29](https://issues.folio.org/browse/UIREC-29) Receiving: filter titles
* [UIREC-33](https://issues.folio.org/browse/UIREC-33) Update app icon
* [UIREC-32](https://issues.folio.org/browse/UIREC-32) Add piece for a title
* [UIREC-39](https://issues.folio.org/browse/UIREC-39) Receiving: search for titles - Column headers
* [UIREC-31](https://issues.folio.org/browse/UIREC-31) Receiving: search for titles
* [UIREC-34](https://issues.folio.org/browse/UIREC-34) Add success message for create title
* [UIREC-28](https://issues.folio.org/browse/UIREC-28) Add Title for receiving/check-in
* [UIREC-27](https://issues.folio.org/browse/UIREC-27) View title in receiving area
* [UIREC-26](https://issues.folio.org/browse/UIREC-26) Create three pane layout for receiving
* New app created with stripes-cli

### Bug fixes
* [UIREC-43](https://issues.folio.org/browse/UIREC-43) Add piece button showing for Titles that are not "Manually add pieces for receiving"
