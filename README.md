# `Timd` ⏰

`Timd`: A Simple wrapper tool to display the time taken to perform script tasks & unix commands 

# `Usage` ✅
### `Package.json scripts`
1. Install the package as dev dependency
2. Wrap the `scripts` with `timd` command

**Example Usage** 
```
  package.json

  "scripts": {
    "bundle": "timd node index.js"
  }

```
Run ⇒ "npm start"

**Sample output**
```
> start
> timd node index.js

Executing: node index.js
Execution time: 0.031 seconds
cmd execution exited with code 0
```

### `Unix Commands`
1. Install the package globally using `npm install -g timd`
2. Wrap any unix commands with timd

**Example Usage** 
```
>> timd ls -l
Executing: ls -l
total 1
rw-r--r--@   1 root  root  5 Nov 25 12:00 helloworld.txt
Execution time: 0.01 seconds
cmd execution exited with code 0
```

