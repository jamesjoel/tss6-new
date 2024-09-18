let toExcel = require("to-excel").toExcel

let data = [
  { id: 1, value: 'Item 1', status: { item: 'Product 1' } },
  { id: 2, value: 'Item 2', status: { item: 'Product 2' } },
  { id: 3, value: 'Item 3', status: { item: 'Enabled' } },
  { id: 4, value: 'Item 4', status: { item: 'ignored field' } },
  { id: 1, value: 'Item 1', status: { item: 'Product 1' } },
  { id: 2, value: 'Item 2', status: { item: 'Product 2' } },
  { id: 3, value: 'Item 3', status: { item: 'Enabled' } },
  { id: 4, value: 'Item 4', status: { item: 'ignored field' } },
  { id: 1, value: 'Item 1', status: { item: 'Product 1' } },
  { id: 2, value: 'Item 2', status: { item: 'Product 2' } },
  { id: 3, value: 'Item 3', status: { item: 'Enabled' } },
  { id: 4, value: 'Item 4', status: { item: 'ignored field' } },
];

let headers = [
  { label: 'Identificator', field: 'id' },
  { label: 'Description', field: 'value' },
  { label: 'Status', field: 'status.item' }
]

let content = toExcel.exportXLS(headers, data, 'excelFileThroughNpm');
require('fs').writeFileSync('excelFileThroughNpm.xls', content);