

# ARCHIVED - NO LONGER MAINTAINED

**Note:** This repository is no longer actively maintained. 

Thank you for your interest in this project. While the repository remains accessible for reference and use, please be aware that no further updates, bug fixes, or support will be provided at this time.

---

# faker-cli.

[![Build Status](https://travis-ci.org/lestoni/faker-cli.svg?branch=master)](https://travis-ci.org/lestoni/faker-cli)

[![NPM](https://nodei.co/npm/faker-cli.png?downloads=true&stars=true)](https://nodei.co/npm/faker-cli/)

A command-line wrapper for [faker](https://github.com/faker-js/faker)

# Install.

```
$ npm install -g faker-cli
```

# Examples.

```
$ faker-cli --helpers userCard

$ faker-cli -n findName
```

# Usage.

```
 Usage: faker-cli [option]

  A cli wrapper for fakerjs

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -a, --address [value]   street address
    -c, --company [value]   company info
    -d, --date    [value]   date options
    -f  --finance [value]   finance field
    -i  --internet [value]  internet goodies
    -l  --lorem    [value]   lorem ipsum goodnes
    -n  --names    [value]  person name(s)
    -s  --system   [value]   System Info'
    -C  --commerce [value]  Commerce related info
    -p  --phone   [value]   phone number options
    -r  --random  [value]   randomness
    -L, --locale  [value]   set locale, defaults to en
    -x, --hacker  [value]   hackers stuff
    -H, --helpers [value]   detailed contextual data
    -I, --image   [value]   image data
    --locales           list available locales

  faker-cli <cmd> help    list options available for <cmd>

  Examples

        $ faker-cli --helpers userCard
        $ faker-cli --random uuid
        $ faker-cli --locale de --helpers userCard
```

# License.

MIT.
