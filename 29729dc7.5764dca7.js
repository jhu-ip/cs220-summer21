(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,s(s({ref:t},b),{},{components:n})):i.a.createElement(u,s({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(100)),o=["components"],s={id:"ex5",title:"Day 5 In-class Exercise"},c={unversionedId:"exercises/ex5",id:"exercises/ex5",isDocsHomePage:!1,title:"Day 5 In-class Exercise",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, and try to finish on your own before our next class meeting. Remember to submit on Gradescope once or more, checking the autograder results. For credit, you must submit by the end of the semester.",source:"@site/docs\\exercises\\ex5.md",slug:"/exercises/ex5",permalink:"/cs220-summer21/docs/exercises/ex5",version:"current"},b=[{value:"Learning Objectives",id:"learning-objectives",children:[{value:"Part 0 - Get the starter codes",id:"part-0---get-the-starter-codes",children:[]},{value:"Part 1 - Debugging using <em>gdb</em>",id:"part-1---debugging-using-gdb",children:[]},{value:"Part 2 - Passing by pointers",id:"part-2---passing-by-pointers",children:[]},{value:"Part 3 - Diagnosing memory problems using <em>valgrind</em>",id:"part-3---diagnosing-memory-problems-using-valgrind",children:[]},{value:"Part 4 - Pseudo-random integers",id:"part-4---pseudo-random-integers",children:[]},{value:"Part 5 - Gradescope submission",id:"part-5---gradescope-submission",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, and try to finish on your own before our next class meeting. Remember to submit on Gradescope once or more, checking the autograder results. For credit, you must submit by the end of the semester. "))),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This exercise will help you gain additional familiarity with:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("em",{parentName:"li"},"gdb")," for debugging code"),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("em",{parentName:"li"},"gdb")," to analyze the code and correct the code so that it performs correctly"),Object(r.b)("li",{parentName:"ul"},"Use 2-dimensional arrays"),Object(r.b)("li",{parentName:"ul"},"Declare and initialize pointer variables"),Object(r.b)("li",{parentName:"ul"},"Use pointers to pass by reference"),Object(r.b)("li",{parentName:"ul"},"Dynamic memory allocation"),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("em",{parentName:"li"},"valgrind")," to analyze the memory usage of existing code and identify and remove errors in the code"),Object(r.b)("li",{parentName:"ul"},"Pseudo-random integers")))),Object(r.b)("h3",{id:"part-0---get-the-starter-codes"},"Part 0 - Get the starter codes"),Object(r.b)("p",null,"Get the starter codes from ",Object(r.b)("inlineCode",{parentName:"p"},"cs220-public"),", copy them over to ",Object(r.b)("inlineCode",{parentName:"p"},"cs220")," (remember to create a new directory ",Object(r.b)("inlineCode",{parentName:"p"},"ex5")," for that), and create an initial commit with the copied starter codes. You should see the following files: ",Object(r.b)("inlineCode",{parentName:"p"},"transpose.c"),", ",Object(r.b)("inlineCode",{parentName:"p"},"passing.c"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you don't remember how to get the starter codes, go back and check previous exercises for instructions."))),Object(r.b)("h3",{id:"part-1---debugging-using-gdb"},"Part 1 - Debugging using ",Object(r.b)("em",{parentName:"h3"},"gdb")),Object(r.b)("h4",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"In the starter code, there is a function called ",Object(r.b)("inlineCode",{parentName:"p"},"transpose")," in ",Object(r.b)("inlineCode",{parentName:"p"},"transpose.c"),". It should transpose the input array (i.e. reflecting it along the diagonal). In this part, you will compile the code and use gdb to debug why it is not working as expected."),Object(r.b)("h4",{id:"instructions"},"Instructions"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Compile the ",Object(r.b)("strong",{parentName:"p"},"transpose.c")," file by typing this command: ",Object(r.b)("inlineCode",{parentName:"p"},"gcc -std=c99 -Wall -Wextra -pedantic transpose.c -g -o transpose")," (or use our alias ",Object(r.b)("inlineCode",{parentName:"p"},"gccc transpose.c -g -o transpose")," if you like). Note the use of ",Object(r.b)("inlineCode",{parentName:"p"},"-g"),", which enables debugging symbols for ",Object(r.b)("em",{parentName:"p"},"gdb")," to trace the variables, function stacks, etc., and the use of ",Object(r.b)("inlineCode",{parentName:"p"},"-o")," to designate the name of the output (executable) file.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run the program using ",Object(r.b)("em",{parentName:"p"},"gdb"),": ",Object(r.b)("inlineCode",{parentName:"p"},"gdb ./transpose"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("em",{parentName:"p"},"gdb")," to step through the code (placing breakpoints as necessary), and print out the variable values to determine why the code is not printing all of the second table, or transposing correctly.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Given what you discovered using ",Object(r.b)("em",{parentName:"p"},"gdb"),", fix the code so that it behaves correctly."))),Object(r.b)("h4",{id:"checkpoints"},"Checkpoints"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"How do you set a breakpoint?"),Object(r.b)("li",{parentName:"ol"},"How do you track a variable's value?"),Object(r.b)("li",{parentName:"ol"},"How do you check the function call stack?"),Object(r.b)("li",{parentName:"ol"},"What is the bug that you found in this program?")),Object(r.b)("h3",{id:"part-2---passing-by-pointers"},"Part 2 - Passing by pointers"),Object(r.b)("h4",{id:"introduction-1"},"Introduction"),Object(r.b)("p",null,"In this part, you will be working on ",Object(r.b)("strong",{parentName:"p"},"passing.c"),". You are going to implement a ",Object(r.b)("inlineCode",{parentName:"p"},"getDate")," function that prompts for and collects input that is a date in MM/DD/YYYY format. You will practice how to pass variables by pointers and learn when you should pass by pointers instead of by values."),Object(r.b)("h4",{id:"instructions-1"},"Instructions"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open ",Object(r.b)("strong",{parentName:"p"},"passing.c")," with a text editor and add a declaration and definition for a function called ",Object(r.b)("inlineCode",{parentName:"p"},"getDate"),". The function should use three parameters to pass the input values back to the main calling function as integers, storing them in the provided variables. It should also ",Object(r.b)("inlineCode",{parentName:"p"},"return")," the number of values that were successfully read by the function. Your main job in this exercise is to figure out how to declare and use the parameters for this function, and how to call it from main. (",Object(r.b)("inlineCode",{parentName:"p"},"TODO")," comments indicate where to add the declaration and definition.)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After you have implemented the ",Object(r.b)("inlineCode",{parentName:"p"},"getDate")," function, you should complete the code in the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function. You will need to declare and initialize an array of month names, called ",Object(r.b)("inlineCode",{parentName:"p"},"months"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Next, fix the code at the point of the ",Object(r.b)("inlineCode",{parentName:"p"},"TODO")," comment in the while loop control so that it calls the ",Object(r.b)("inlineCode",{parentName:"p"},"getDate")," function, using the provided variables ",Object(r.b)("inlineCode",{parentName:"p"},"mon"),", ",Object(r.b)("inlineCode",{parentName:"p"},"day")," and ",Object(r.b)("inlineCode",{parentName:"p"},"yr"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once you've completed the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function, you should be able to run the program. You should run it with at least three test cases for successful date conversions and three test cases for unsuccessful inputs.  Make sure that all of your tests pass."))),Object(r.b)("h4",{id:"checkpoints-1"},"Checkpoints"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Why do we need the flag ",Object(r.b)("inlineCode",{parentName:"li"},"-g"),"?"),Object(r.b)("li",{parentName:"ol"},"What is a pointer?"),Object(r.b)("li",{parentName:"ol"},"How does pass-by-pointers allow us to modify variables that are not in the local scope?"),Object(r.b)("li",{parentName:"ol"},"When should you use pass-by-pointers?"),Object(r.b)("li",{parentName:"ol"},"Is passing an array the same as passing a pointer?"),Object(r.b)("li",{parentName:"ol"},'Is passing pointers a kind of "pass-by-value"?')),Object(r.b)("h3",{id:"part-3---diagnosing-memory-problems-using-valgrind"},"Part 3 - Diagnosing memory problems using ",Object(r.b)("em",{parentName:"h3"},"valgrind")),Object(r.b)("h4",{id:"introduction-2"},"Introduction"),Object(r.b)("p",null,"In this part, you will practice how to use ",Object(r.b)("em",{parentName:"p"},"valgrind")," to identify memory problems in a program. You should work on ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c")," and ",Object(r.b)("inlineCode",{parentName:"p"},"prime.c"),"."),Object(r.b)("h4",{id:"instructions-2"},"Instructions"),Object(r.b)("h5",{id:"pairwise_sumc"},Object(r.b)("inlineCode",{parentName:"h5"},"pairwise_sum.c")),Object(r.b)("p",null,"Open ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c")," with a text editor. To compile the code, use this command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"gcc -std=c99 -pedantic -Wall -Wextra pairwise_sum.c -o pairwise_sum  -g\n")),Object(r.b)("p",null,"Note the use of ",Object(r.b)("inlineCode",{parentName:"p"},"-g"),", which enables debugging.  To run the program using valgrind:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"valgrind  --leak-check=full  ./pairwise_sum\n")),Object(r.b)("p",null,"Read the ",Object(r.b)("em",{parentName:"p"},"valgrind")," output and try to determine what is causing the errors that are reported. Modify ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c")," so that it still performs the desired task (described in comments at the top) but without any memory leaks or invalid reads or writes."),Object(r.b)("h5",{id:"primesc"},Object(r.b)("inlineCode",{parentName:"h5"},"primes.c")),Object(r.b)("p",null,"Do the same thing you did above, but for ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c"),".  Since ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c")," requires the math library, you will have to add the ",Object(r.b)("inlineCode",{parentName:"p"},"-lm")," flag to the compile command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"gcc -std=c99 -pedantic -Wall -Wextra primes.c -o primes -lm -g\n")),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"valgrind")," command is essentially the same:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"valgrind  --leak-check=full  ./primes\n")),Object(r.b)("p",null,"Read the ",Object(r.b)("em",{parentName:"p"},"valgrind")," output and try to determine what is causing the errors that are reported. Modify ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c")," so that it still performs the desired task (described in comments at the top) but without any memory leaks or invalid reads or writes."),Object(r.b)("h4",{id:"checkpoints-2"},"Checkpoints"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"To use ",Object(r.b)("em",{parentName:"li"},"valgrind"),", do we need the program to be compiled with ",Object(r.b)("inlineCode",{parentName:"li"},"-g"),"?"),Object(r.b)("li",{parentName:"ol"},"What memory problems can be found using ",Object(r.b)("em",{parentName:"li"},"valgrind"),"?"),Object(r.b)("li",{parentName:"ol"},"When should you use ",Object(r.b)("em",{parentName:"li"},"valgrind")," to check for memory problems? Before the submission? Before each commit to git?")),Object(r.b)("h3",{id:"part-4---pseudo-random-integers"},"Part 4 - Pseudo-random integers"),Object(r.b)("h4",{id:"introduction-3"},"Introduction"),Object(r.b)("p",null,"In this part, you are going to use the ",Object(r.b)("inlineCode",{parentName:"p"},"rand")," function to generate ",Object(r.b)("em",{parentName:"p"},"uniform")," and ",Object(r.b)("em",{parentName:"p"},"normal")," distributions.  Follow the instructions below and the comments in ",Object(r.b)("inlineCode",{parentName:"p"},"random.c")," to complete the task."),Object(r.b)("h4",{id:"instructions-3"},"Instructions"),Object(r.b)("h5",{id:"uniform-distribution"},Object(r.b)("em",{parentName:"h5"},"uniform")," distribution"),Object(r.b)("p",null,"One important property of the ",Object(r.b)("inlineCode",{parentName:"p"},"rand")," function is that it generates\na ",Object(r.b)("em",{parentName:"p"},"uniform")," distribution of pseudo-random integer values."),Object(r.b)("p",null,"In the source file ",Object(r.b)("inlineCode",{parentName:"p"},"random.c"),", add a definition for the\n",Object(r.b)("inlineCode",{parentName:"p"},"uniform_rand")," function as indicated by the ",Object(r.b)("inlineCode",{parentName:"p"},"TODO (1)")," comment.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"uniform_rand")," function should return pseudo-random integers in\nthe range 0 to ",Object(r.b)("inlineCode",{parentName:"p"},"NUM_BUCKETS"),"-1, inclusive, uniformly distributed."),Object(r.b)("p",null,"Next, as indicated by the ",Object(r.b)("inlineCode",{parentName:"p"},"TODO (2)")," comment in the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function,\nadd code to generate 500 uniformly-generated pseudo-random integers\nand increment the elements of the ",Object(r.b)("inlineCode",{parentName:"p"},"hist")," array accordingly.  (Each\ngenerated pseudo-random integer should be used to increment the ",Object(r.b)("inlineCode",{parentName:"p"},"hist"),"\narray element with the same index as the generated pseudo-random integer.)"),Object(r.b)("p",null,"Next, add a definition for the ",Object(r.b)("inlineCode",{parentName:"p"},"print_hist")," function, as indicated by\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"TODO (3)")," comment.  It should print a bar graph of the contents\nof its array parameter, as described by the comment."),Object(r.b)("p",null,"Then, add a call to the ",Object(r.b)("inlineCode",{parentName:"p"},"print_hist")," function to print a bar graph\nof the data in the ",Object(r.b)("inlineCode",{parentName:"p"},"hist")," array, as indicated by the ",Object(r.b)("inlineCode",{parentName:"p"},"TODO (4)")," comment."),Object(r.b)("p",null,"Compile the program:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"gcc -g -o random -Wall -Wextra -pedantic -std=c99 random.c\n")),Object(r.b)("p",null,"Run the program using the command ",Object(r.b)("inlineCode",{parentName:"p"},"./random"),".  The output should look something\nlike the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Uniform distribution:\n 0: ****************\n 1: ****************\n 2: ******************\n 3: *****************\n 4: ************\n 5: ***************\n 6: *****************\n 7: ************\n 8: ***********************\n 9: **********************\n10: ****************\n11: *************\n12: ******************\n13: *******************\n14: *****************************\n15: *************\n16: ********************\n17: *****************\n18: ********************\n19: **************\n20: *******************\n21: **************\n22: ***************\n23: ***********\n24: ***********\n25: **************\n26: *****************\n27: ***************\n28: ***********\n29: **************************\n")),Object(r.b)("p",null,"The output of ",Object(r.b)("inlineCode",{parentName:"p"},"print_hist")," should show that each element of the ",Object(r.b)("inlineCode",{parentName:"p"},"hist")," array\nvalues that are similar to each other.  This is what we expect from a uniform\ndistribution."),Object(r.b)("h5",{id:"normal-distribution"},Object(r.b)("em",{parentName:"h5"},"normal")," distribution"),Object(r.b)("p",null,"A ",Object(r.b)("em",{parentName:"p"},"normal")," distribution of pseudo-random integers can be generated by\nsumming multiple uniformly-distributed pseudo-random integer values."),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"random.c")," add a definition for the ",Object(r.b)("inlineCode",{parentName:"p"},"normal_rand")," function, as indicated\nby the ",Object(r.b)("inlineCode",{parentName:"p"},"TODO (5)")," comment.  This function should return a normal distribution\nof integers (refer to the comment for details).\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"normal_rand")," function should return pseudo-random integers in\nthe range 0 to ",Object(r.b)("inlineCode",{parentName:"p"},"NUM_BUCKETS"),"-1, inclusive, normally distributed."),Object(r.b)("p",null,"Then, as indicated by the ",Object(r.b)("inlineCode",{parentName:"p"},"TODO (6)")," comment in the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function,\nadd code to generate 500 normally-generated pseudo-random integers and\nincrement the elements of the ",Object(r.b)("inlineCode",{parentName:"p"},"hist")," array accordingly.  (Each generated\npseudo-random integer should be used to increment the ",Object(r.b)("inlineCode",{parentName:"p"},"hist")," array\nelement with the same index as the generated pseudo-random integer.)"),Object(r.b)("p",null,"Next, add a call to the ",Object(r.b)("inlineCode",{parentName:"p"},"print_hist")," function to print a bar graph\nof the data in the ",Object(r.b)("inlineCode",{parentName:"p"},"hist")," array as indicated by the ",Object(r.b)("inlineCode",{parentName:"p"},"TODO (7)")," comment."),Object(r.b)("p",null,"Compile and run the program.  The output should look something like\nthe following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Normal distribution:\n 0: \n 1: *\n 2: \n 3: *\n 4: *\n 5: \n 6: *\n 7: *********\n 8: ********************\n 9: **********************\n10: ********************\n11: ********************************\n12: *************************************\n13: *********************************\n14: *********************************************\n15: ***********************************************\n16: ***********************************************\n17: ************************************************\n18: ****************************************\n19: ******************************\n20: ***************\n21: ****************\n22: *************\n23: ***********\n24: *****\n25: *\n26: ***\n27: **\n28: \n29: \n")),Object(r.b)("p",null,"Your program's output doesn't need to look exactly like the output shown above,\nbut it should show a \"bell curve\" centered at approximately the middle of the\narray of counts."),Object(r.b)("p",null,"You may need to experiment a bit to find a good way to generate a more-or-less\nnormal distribution."),Object(r.b)("h4",{id:"checkpoints-3"},"Checkpoints"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"What is the range of ",Object(r.b)("inlineCode",{parentName:"li"},"rand()"),"? What is the biggest integer it can generate?"),Object(r.b)("li",{parentName:"ol"},"What does ",Object(r.b)("inlineCode",{parentName:"li"},"srand()")," do? Is there a way to fix the sequence of pseudo-random integers?"),Object(r.b)("li",{parentName:"ol"},"How do you generate random floating numbers between ",Object(r.b)("inlineCode",{parentName:"li"},"0")," and ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"?")),Object(r.b)("h3",{id:"part-5---gradescope-submission"},"Part 5 - Gradescope submission"),Object(r.b)("p",null,"Create a ",Object(r.b)("em",{parentName:"p"},"zip")," file called ",Object(r.b)("inlineCode",{parentName:"p"},"ex5.zip"),", which contains ",Object(r.b)("inlineCode",{parentName:"p"},"transpose.c"),", ",Object(r.b)("inlineCode",{parentName:"p"},"passing.c"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c"),", ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"random.c")," with your implementation and fixes.  Submit the zip file as ",Object(r.b)("a",{parentName:"p",href:"https://www.gradescope.com/courses/266485/assignments/1339724"},"Day 5 In-class Exercise")," on Gradescope. Make sure your program passes all the autograder tests in order to get full credit. It is due before the next class.  However, late submission is allowed until our last class.  Even so, we highly recommend you to keep up the schedule, finish each in-class exercise, and submit it on Gradescope before the next class."))}p.isMDXComponent=!0}}]);