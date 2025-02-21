# React useEffect Cleanup Function Issue

This repository demonstrates a common issue encountered when using the `useEffect` hook in React: the cleanup function not running as expected.

## Problem

The provided `bug.js` file contains a React component that uses `useEffect` to log messages to the console.  The cleanup function is intended to log a message before the component unmounts or before the next render. However, in this particular implementation, the cleanup function may not be called as intended.

## Solution

The `bugSolution.js` file provides a corrected version of the component. The issue is resolved by adding an empty dependency array (`[]`) to the `useEffect` hook. This ensures that the effect runs only once after the initial render. This will fix the uncalled cleanup function issue. The key to remember is that the empty dependency array is crucial here. 

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs and see that the cleanup function is not called as intended in the initial `bug.js` file while working correctly in the `bugSolution.js` file.