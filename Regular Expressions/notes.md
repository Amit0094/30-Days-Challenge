## In regular expressions, characters are categorized as either literal characters or special characters:

### Literal Characters:
```Literal characters match exactly what they represent. They are the simplest form of characters in a regex and have no special meaning beyond their literal value```

#### Examples of Literal Characters:

~~~ 
Letters: 'a', 'b', 'c'

--> /a/ matches the character "a".

Digits: '1','2','3'

--> /2/ matches the character "2".

Whitespace: ''(space)

'/ /' matches a space.

~~~ 

```js
let str = "cat";
let regex = /cat/;
console.log(regex.test(str));  // true
```

```In this example, the regex /cat/ will match the string "cat" exactly as it is.```


### Special Characters:

```Special characters (also known as metacharacters) have a special meaning in regex and are used to define patterns for more complex matches. To match these characters literally, they need to be escaped with a backslash ('\').```