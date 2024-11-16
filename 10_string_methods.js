let str = "hello I'm saurabh       ";
console.log(str);

// 1 length of string
console.log(str.length);

// 2 slice
console.log(str.slice(0,5));   // hello
console.log(str.slice(2,8));   // llo I'm
console.log(str.slice(-1, -7));  // ''
console.log(str.slice(-2, -7));  // ''
console.log(str.slice(-5, -2));  // ura

// 3 substring
console.log(str.substring(0,5));   // hello
console.log(str.substring(0));    // hello I'm saurabh
console.log(str.substring(-1, 9));  // hello I'm

// 4 toUppercase()
console.log(str.toUpperCase());

// 5 toLowercase()
console.log(str.toLowerCase());

// 6 trim()
console.log(str.trim());

// 7 trimStart()
console.log(str.trimStart());

// 8 trimEnd()
console.log(str.trimEnd());

// 9 indexof()
console.log(str.indexOf('e'));
console.log(str.indexOf('he'));
console.log(str.indexOf('el'));
console.log(str.indexOf('a', 12));

// 10 lastIndexof()
console.log(str.lastIndexOf('a'));
console.log(str.lastIndexOf('a',12));

// 11 repeat()
console.log(str.repeat(3));

// 12 includes()
console.log(str.includes('hello'));
console.log(str.includes('i'));

// 13 replace()
console.log(str.replace('hello', 'hey'));

// 14 replaceAll()
console.log(str.replaceAll('a', 'o'));

// 15 charAt()
console.log(str.charAt(6));
console.log(str.charAt(14));
console.log(str.charAt(0));

// 16 charCodeAt()
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(4));

// 17 split()
console.log(str.split());
console.log(str.split(''));
console.log(str.split(' '));