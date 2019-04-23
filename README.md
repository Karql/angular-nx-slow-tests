Sample project to demonstrate performance issue with ts-jest (>=23.10.0) on windows
Looks like problem with resolver?

`yarn`
`yarn fast-test` - test without imports (5.82s)
`yarn slow-test` - test with imports (29.61s)

Normal script with imports works fast
`yarn normal-script-is-fast`

Previous versions of ts-jest works better.
Try to change branch to ts-jest-23.1.4 and repeat above steps (it's better 4.78s vs 10.9s)

On Linux more or less nothing changed
23.1.4: 3.6s vs +-9s
24.0.2: 4.7s vs +-9s

Profiling:
`node --prof node_modules/\@angular/cli/bin/ng test sample --test-file slow-test.spec.ts`
`node --prof-process isolate-*-v8.log`