// For Further reading:
// * https://robots.thoughtbot.com/vim-macros-and-you
// * http://blog.sanctum.geek.nz/advanced-vim-macros/

// To record a macro, press q followed by a letter for storage
// We'll use 'qq' to store it in the 'q' buffer
var a = 1;

// 'd' to cut it
// 'i' to insert 'function () {\n\n}'
// move inside there
// paste the code with 'p'
// select all text inside the brackets with 'vi{'
// indent it with >>
//
// Try it again here:
var b = 2;
