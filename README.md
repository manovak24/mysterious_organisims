# Mysterious Organisims
> CodeCademy Mysterious Organisims Javascript Project

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
> This project was a CodeCademy project in the JavaScript Syntax, Part II section of the Full-Engineer Course

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
* Factory function `pAequorFactory` returns object that contains two properties - Specimen Number and DNA strand
* `pAequorFactory.mutate()` simulates P. aequor's high rate of mutation by randomly selecting a base(index) in the object, changing the randomly selected base and returning a new objects's DNA.

To-do list:
* Wow improvement to be done 1
* Wow improvement to be done 2

## Status
Project is: _in progress_, _finished_, _no longer continue_ and why?

## Inspiration
Add here credits. Project inspired by..., based on...

## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!