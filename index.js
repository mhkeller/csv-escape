import { readFileSync, writeFileSync } from 'fs';
import { csvFormatRow } from 'd3-dsv'

const test = readFileSync('test.txt', 'utf-8');
const test2 = readFileSync('test-2.txt', 'utf-8');

const row = { name: 'foo', age: 4, other: 'contains "quotes and, stuff'}

row.test = test;
row.test2 = test2;

writeFileSync('out.csv', csvFormatRow(Object.values(row)), 'utf-8')
