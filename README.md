# TypeScript [![Build Status](https://travis-ci.org/exercism/typescript.svg?branch=master)](https://travis-ci.org/exercism/typescript)

Exercism exercises in TypeScript

## Running Unit Test Suite

[Yarn](https://yarnpkg.com/en/docs/install) must be installed.  
If you have [node](https://nodejs.org) installed, you can install yarn via `npm`

    % npm install --global yarn

Then, `make` commands will install other dependencies as needed.

### All Assignments

    % make test

### Single Assignment

    % make test-assignment ASSIGNMENT=palindrome-products

## Shared Code

Please keep the `common` folder files synced across all the sub folders. These files should be the same across all problems.

- package.json
- tsconfig.json
- tslint.json
- yarn.lock

There are some utility methods in the `Makefile` to help with development. The below will move the contents of the `common` to all the subfolders.

    % make replacePackageFilesFromCommonToSubFolders

## Progress

- [x] [hello-world](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/hello-world)
- [x] [two-fer](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/two-fer)
- [x] [leap](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/leap)
- [x] [rna-transcription](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/rna-transcription)
- [x] [space-age](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/space-age)
- [x] [pangram](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/pangram)
- [x] [bob](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/bob)
- [x] [matrix](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/matrix)
- [x] [robot-name](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/robot-name)
- [x] [grade-school](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/grade-school)
- [x] [clock](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/clock)
- [ ] [secret-handshake](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/secret-handshake)
- [ ] [binary-search](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/binary-search)
- [ ] [linked-list](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/linked-list)
- [ ] [rational-numbers](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/rational-numbers)
- [ ] [atbash-cipher](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/atbash-cipher)
- [ ] [simple-cipher](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/simple-cipher)
- [ ] [wordy](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/wordy)
- [ ] [list-ops](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/list-ops)
- [ ] [word-count](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/word-count)
- [ ] [difference-of-squares](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/difference-of-squares)
- [ ] [gigasecond](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/gigasecond)
- [ ] [reverse-string](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/reverse-string)
- [ ] [triangle](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/triangle)
- [ ] [collatz-conjecture](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/collatz-conjecture)
- [ ] [etl](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/etl)
- [ ] [protein-translation](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/protein-translation)
- [ ] [raindrops](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/raindrops)
- [ ] [hamming](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/hamming)
- [ ] [nucleotide-count](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/nucleotide-count)
- [ ] [scrabble-score](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/scrabble-score)
- [ ] [allergies](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/allergies)
- [ ] [perfect-numbers](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/perfect-numbers)
- [ ] [complex-numbers](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/complex-numbers)
- [ ] [luhn](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/luhn)
- [ ] [grains](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/grains)
- [ ] [pythagorean-triplet](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/pythagorean-triplet)
- [ ] [sum-of-multiples](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/sum-of-multiples)
- [ ] [acronym](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/acronym)
- [ ] [anagram](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/anagram)
- [ ] [isogram](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/isogram)
- [ ] [roman-numerals](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/roman-numerals)
- [ ] [series](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/series)
- [ ] [phone-number](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/phone-number)
- [ ] [two-bucket](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/two-bucket)
- [ ] [variable-length-quantity](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/variable-length-quantity)
- [ ] [largest-series-product](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/largest-series-product)
- [ ] [food-chain](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/food-chain)
- [ ] [house](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/house)
- [ ] [isbn-verifier](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/isbn-verifier)
- [ ] [pig-latin](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/pig-latin)
- [ ] [proverb](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/proverb)
- [ ] [twelve-days](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/twelve-days)
- [ ] [beer-song](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/beer-song)
- [ ] [say](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/say)
- [ ] [rectangles](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/rectangles)
- [ ] [saddle-points](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/saddle-points)
- [ ] [spiral-matrix](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/spiral-matrix)
- [ ] [transpose](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/transpose)
- [ ] [ocr-numbers](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/ocr-numbers)
- [ ] [nth-prime](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/nth-prime)
- [ ] [alphametics](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/alphametics)
- [ ] [connect](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/connect)
- [ ] [bowling](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/bowling)
- [ ] [prime-factors](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/prime-factors)
- [ ] [diamond](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/diamond)
- [ ] [pascals-triangle](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/pascals-triangle)
- [ ] [binary-search-tree](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/binary-search-tree)
- [ ] [sublist](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/sublist)
- [ ] [custom-set](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/custom-set)
- [ ] [circular-buffer](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/circular-buffer)
- [ ] [sieve](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/sieve)
- [ ] [palindrome-products](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/palindrome-products)
- [ ] [diffie-hellman](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/diffie-hellman)
- [ ] [crypto-square](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/crypto-square)
- [ ] [robot-simulator](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/robot-simulator)
- [ ] [kindergarten-garden](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/kindergarten-garden)
- [ ] [armstrong-numbers](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/armstrong-numbers)
- [ ] [run-length-encoding](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/run-length-encoding)
- [ ] [rotational-cipher](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/rotational-cipher)
- [ ] [strain](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/strain)
- [ ] [accumulate](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/accumulate)
- [ ] [all-your-base](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/all-your-base)
- [ ] [matching-brackets](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/matching-brackets)
- [ ] [flatten-array](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/flatten-array)
- [ ] [minesweeper](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/minesweeper)
- [ ] [queen-attack](https://github.com/Samuel-Lewis/typescript/tree/master/exercises/queen-attack)
