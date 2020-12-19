# Mysterious Organisims
> CodeCademy Mysterious Organisims Javascript Project

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
> This project was a CodeCademy project in the JavaScript Syntax, Part II section of the Full-Stack Engineer Course.

> Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive.

## Technologies
* JavaScript - version ES6
* node - version 12.18.0

## Setup
Clone respository from https://github.com/manovak24/mysterious_organisims.git

To start your server, run `npm install` and then `node main.js`.

## Code Examples

```js
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
```

## Features
List of features ready and TODOs for future development
* Creates an objectc containing a random DNA strand
* Factory function `pAequorFactory` returns P. aequor object that contains two properties - Specimen Number and DNA strand
* `pAequorFactory.mutate()` simulates P. aequor's high rate of mutation by randomly selecting a base(index) in the object, changing the randomly selected base and returning a new objects's DNA
* `pAequorFactory.compareDna()` compares DNA sequences of different P. aequors and returns a string stating the calculated percentage of DNA bases that are identical and at the same index
* `pAequorFactory.willLikelySurvive()` returns `true` if P. aequors DNA contains at least 60& 'C' or 'G' bases
* `pool` creates 30 instances of P. Aequor that will survive in the environment (when `pAequorFactory.willLikelySurvive()` return `true`)

To-do list:
* Create `.complementStrand()` method

## Status
Project is: _finished_

## Inspiration
CodeCademy project

## Contact
Created by [@manovak24](https://github.com/manovak24) - feel free to contact me!