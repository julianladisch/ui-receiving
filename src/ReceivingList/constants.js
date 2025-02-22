import {
  ORDER_FORMATS,
} from '@folio/stripes-acq-components';

export const FILTERS = {
  ORDER_STATUS: 'purchaseOrder.workflowStatus',
  ORDER_ORGANIZATION: 'purchaseOrder.vendor',
  POL_TAGS: 'poLine.tags.tagList',
  ORDER_TYPE: 'purchaseOrder.orderType',
  ORDER_FORMAT: 'poLine.orderFormat',
  LOCATION: 'poLine.locations',
  MATERIAL_TYPE: 'materialType',
  ACQUISITIONS_UNIT: 'purchaseOrder.acqUnitIds',
  RECEIVING_STATUS: 'pieces.receivingStatus',
  RECEIVED_DATE: 'pieces.receivedDate',
  EXPECTED_RECEIPT_DATE: 'pieces.receiptDate',
  RECEIPT_DUE: 'poLine.physical.receiptDue',
};

export const ORDER_FORMAT_MATERIAL_TYPE_MAP = {
  [ORDER_FORMATS.electronicResource]: ['poLine.eresource.materialType'],
  [ORDER_FORMATS.physicalResource]: ['poLine.physical.materialType'],
  [ORDER_FORMATS.PEMix]: ['poLine.eresource.materialType', 'poLine.physical.materialType'],
  [ORDER_FORMATS.other]: ['poLine.physical.materialType'],
};
