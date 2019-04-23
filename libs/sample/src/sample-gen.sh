#!/bin/bash

rm index.ts

for i in {1..200}
do
    printf "export class SampleClass${i} {\n\tpublic foo: string;\n\tpublic bar: number;\n}" > "lib/classes/sample-class$i.ts"
    printf "export * from './lib/classes/sample-class${i}';\n" >> index.ts

done