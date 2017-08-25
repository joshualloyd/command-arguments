#!/usr/bin/env node

if (!process.argv[2]) {
    console.log(0);
} else {
    let args = process.argv.slice(2);
    
    const sum = args.filter((arg) => {return !isNaN(arg)}).map((arg) => {return Number(arg)}).reduce((a, b) => {
        return a + b;
    });
    
    console.log(sum);
}

