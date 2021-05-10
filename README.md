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

- [x] [hello-world](./exercises/hello-world)
- [x] [two-fer](./exercises/two-fer)
- [x] [leap](./exercises/leap)
- [x] [rna-transcription](./exercises/rna-transcription)
- [x] [space-age](./exercises/space-age)
- [x] [pangram](./exercises/pangram)
- [x] [bob](./exercises/bob)
- [x] [matrix](./exercises/matrix)
- [x] [robot-name](./exercises/robot-name)
- [x] [grade-school](./exercises/grade-school)
- [x] [clock](./exercises/clock)
- [x] [secret-handshake](./exercises/secret-handshake)
- [ ] [binary-search](./exercises/binary-search)
- [ ] [linked-list](./exercises/linked-list)
- [ ] [rational-numbers](./exercises/rational-numbers)
- [x] [atbash-cipher](./exercises/atbash-cipher)
- [x] [simple-cipher](./exercises/simple-cipher)
- [ ] [wordy](./exercises/wordy)
- [ ] [list-ops](./exercises/list-ops)
- [ ] [word-count](./exercises/word-count)
- [ ] [difference-of-squares](./exercises/difference-of-squares)
- [ ] [gigasecond](./exercises/gigasecond)
- [ ] [reverse-string](./exercises/reverse-string)
- [ ] [triangle](./exercises/triangle)
- [ ] [collatz-conjecture](./exercises/collatz-conjecture)
- [ ] [etl](./exercises/etl)
- [ ] [protein-translation](./exercises/protein-translation)
- [ ] [raindrops](./exercises/raindrops)
- [ ] [hamming](./exercises/hamming)
- [ ] [nucleotide-count](./exercises/nucleotide-count)
- [ ] [scrabble-score](./exercises/scrabble-score)
- [ ] [allergies](./exercises/allergies)
- [ ] [perfect-numbers](./exercises/perfect-numbers)
- [ ] [complex-numbers](./exercises/complex-numbers)
- [x] [luhn](./exercises/luhn)
- [ ] [grains](./exercises/grains)
- [ ] [pythagorean-triplet](./exercises/pythagorean-triplet)
- [ ] [sum-of-multiples](./exercises/sum-of-multiples)
- [ ] [acronym](./exercises/acronym)
- [ ] [anagram](./exercises/anagram)
- [ ] [isogram](./exercises/isogram)
- [ ] [roman-numerals](./exercises/roman-numerals)
- [ ] [series](./exercises/series)
- [ ] [phone-number](./exercises/phone-number)
- [ ] [two-bucket](./exercises/two-bucket)
- [ ] [variable-length-quantity](./exercises/variable-length-quantity)
- [ ] [largest-series-product](./exercises/largest-series-product)
- [ ] [food-chain](./exercises/food-chain)
- [ ] [house](./exercises/house)
- [ ] [isbn-verifier](./exercises/isbn-verifier)
- [ ] [pig-latin](./exercises/pig-latin)
- [ ] [proverb](./exercises/proverb)
- [ ] [twelve-days](./exercises/twelve-days)
- [ ] [beer-song](./exercises/beer-song)
- [ ] [say](./exercises/say)
- [ ] [rectangles](./exercises/rectangles)
- [ ] [saddle-points](./exercises/saddle-points)
- [ ] [spiral-matrix](./exercises/spiral-matrix)
- [ ] [transpose](./exercises/transpose)
- [ ] [ocr-numbers](./exercises/ocr-numbers)
- [ ] [nth-prime](./exercises/nth-prime)
- [ ] [alphametics](./exercises/alphametics)
- [ ] [connect](./exercises/connect)
- [ ] [bowling](./exercises/bowling)
- [ ] [prime-factors](./exercises/prime-factors)
- [ ] [diamond](./exercises/diamond)
- [ ] [pascals-triangle](./exercises/pascals-triangle)
- [ ] [binary-search-tree](./exercises/binary-search-tree)
- [ ] [sublist](./exercises/sublist)
- [ ] [custom-set](./exercises/custom-set)
- [ ] [circular-buffer](./exercises/circular-buffer)
- [ ] [sieve](./exercises/sieve)
- [ ] [palindrome-products](./exercises/palindrome-products)
- [ ] [diffie-hellman](./exercises/diffie-hellman)
- [ ] [crypto-square](./exercises/crypto-square)
- [ ] [robot-simulator](./exercises/robot-simulator)
- [ ] [kindergarten-garden](./exercises/kindergarten-garden)
- [ ] [armstrong-numbers](./exercises/armstrong-numbers)
- [ ] [run-length-encoding](./exercises/run-length-encoding)
- [ ] [rotational-cipher](./exercises/rotational-cipher)
- [ ] [strain](./exercises/strain)
- [ ] [accumulate](./exercises/accumulate)
- [ ] [all-your-base](./exercises/all-your-base)
- [ ] [matching-brackets](./exercises/matching-brackets)
- [ ] [flatten-array](./exercises/flatten-array)
- [ ] [minesweeper](./exercises/minesweeper)
- [ ] [queen-attack](./exercises/queen-attack)
