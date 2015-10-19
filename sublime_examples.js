// See also:
//  * http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_osx.html
//  * http://www.andrewsouthpaw.com/2014/12/14/shortcuts-snippets-and-macros-boosting-your-productivity-in-sublime/

// Cmd + Shift + Space - Select enclosing scope
function test () {
  var something = 1;

  console.log(something);
}

// Ctrl + Shift + U/D - vertical cursor
var somethingLong = 1,
    foo = 2,
    bar = 3,
    baz = 4;

// Cmd + D - Select next instance of word as well
function badlyNamed () {
  var somethingBadlyNamed = 5;
}

// Ctrl + Cmd + G - Select ALL instances of word, for when Cmd + D gets old fast
console.log(badlyNamed, badlyNamed, badlyNamed, badlyNamed)

// Cmd + Shift + V - pastes with proper indentation
function myOtherFunction () {
  // Drop badlyNamed here
}

// Sublime Snippets: Jasmine Describe / It / Expect
