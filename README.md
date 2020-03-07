
# Simply Crossword

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
See the [full documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) 
for the most recent version of the Create React App guide. 

## Overview
A functional crossword implementation using React.js.

### Featuring

- React (UI Framework)
The crossword UI renders new crosswords from a JSON formatted source.

## Usage
Try the [Live Demo](https://kundanj.github.io/simply-crossword/)
The live app is powered by an algorithm on a nodejs server that serves out new crosswords by category - said node.js project being
part of another git repository.

## Installation

You can download and run the repo as:

`git clone https://github.com/kundanj/simply-crossword.git`

`npm install`

`npm start`

## How To Build For Deployment

`npm run build`

## Known issues/To do's

- State change for crossword grid currently uses non-serializable ES15 Map and mutable state operations. Change it to Object and immutable setState for workingMap.
- Consider Context API to reduce prop drill.

## Contributing

Pull requests are welcome. Feel free to contribute back especially to refine the aesthetics of the UI.

## Acknowledgements
CSS for the HTML select element in Crossword theme has been derived from
https://css-tricks.com/styling-a-select-like-its-2019/
.

### Copyright and license

The MIT License (MIT). Please see [License File](./LICENSE)  for more information.
