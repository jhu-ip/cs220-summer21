(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),r=(n(0),n(97)),o=["components"],c={id:"ex7",title:"Day 7 In-class Exercise"},s={unversionedId:"exercises/ex7",id:"exercises/ex7",isDocsHomePage:!1,title:"Day 7 In-class Exercise",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, and try to finish on your own before our next class meeting. Remember to submit on Gradescope once or more, checking the autograder results. For credit, you must submit by the end of the semester.",source:"@site/docs\\exercises\\ex7.md",slug:"/exercises/ex7",permalink:"/cs220-summer21/docs/exercises/ex7",version:"current"},b=[{value:"Learning Objectives",id:"learning-objectives",children:[{value:"Part 0 - Get the starter codes",id:"part-0---get-the-starter-codes",children:[]},{value:"Part 1 - Simple encryption using bitwise operators",id:"part-1---simple-encryption-using-bitwise-operators",children:[]},{value:"Part 2 - Integer representation - Two&#39;s complement",id:"part-2---integer-representation---twos-complement",children:[]},{value:"Part 3 - Integer representation - Endianness",id:"part-3---integer-representation---endianness",children:[]},{value:"Part 4 - Gradescope submission",id:"part-4---gradescope-submission",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, and try to finish on your own before our next class meeting. Remember to submit on Gradescope once or more, checking the autograder results. For credit, you must submit by the end of the semester. "))),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This exercise will help you gain additional familiarity with:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"arrays & strings"),Object(r.b)("li",{parentName:"ul"},"function writing"),Object(r.b)("li",{parentName:"ul"},"bit operations (AND, OR, XOR, SHIFT)"),Object(r.b)("li",{parentName:"ul"},"integer representation (two\u2019s complement, endianness)")))),Object(r.b)("h3",{id:"part-0---get-the-starter-codes"},"Part 0 - Get the starter codes"),Object(r.b)("p",null,"Get the starter codes from ",Object(r.b)("inlineCode",{parentName:"p"},"cs220-public"),", copy them over to ",Object(r.b)("inlineCode",{parentName:"p"},"cs220")," (remember to create a new directory named ",Object(r.b)("inlineCode",{parentName:"p"},"ex7")," for that), and create an initial commit with the copied starter codes.  You should see the following files: ",Object(r.b)("inlineCode",{parentName:"p"},"encrypt.c"),", ",Object(r.b)("inlineCode",{parentName:"p"},"intrep.c"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"endian.c"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you don't remember how to get the starter codes, go back and check previous exercises for instructions."))),Object(r.b)("h3",{id:"part-1---simple-encryption-using-bitwise-operators"},"Part 1 - Simple encryption using bitwise operators"),Object(r.b)("h4",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Sam and Chloe are friends. They want to encrypt their conversation messages so that they can keep their communications confidential. Your job is to help them implement the encryption mechanism they have in mind: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Every message is represented in binary; that is each and every message only includes 0s and 1s and is no longer than 32 bits long. Then it is written down ",Object(r.b)("inlineCode",{parentName:"li"},"n")," times, shifted to the left by ",Object(r.b)("inlineCode",{parentName:"li"},"0, 1, 2, ..., n\u20101")," bits for each copy. Finally, the columns are XORed together to produce the final encrypted message.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example"),": Let us say the plain message is 1001011 and n = 4. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"      1 0 0 1 0 1 1    shift 0 (plain message)\n    1 0 0 1 0 1 1 0    shift 1\n  1 0 0 1 0 1 1 0 0    shift 2\n1 0 0 1 0 1 1 0 0 0    shift 3 \n------------------------------\n1 1 1 0 1 0 1 0 0 1 \u2190 final encoded message (XORed) \n")),Object(r.b)("p",null,"Write a C program to perform this encryption. If the entered message contains anything other than 0s/1s and/or n<=0, your program should print a sensible message and exit with code 1."),Object(r.b)("h4",{id:"instructions"},"Instructions"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open ",Object(r.b)("inlineCode",{parentName:"p"},"encrypt.c")," for editing using ",Object(r.b)("inlineCode",{parentName:"p"},"emacs")," or ",Object(r.b)("inlineCode",{parentName:"p"},"vim"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Read the source code and the comments.  Your instructions are in the comments.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Modify the source files and test by:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Compiling with ",Object(r.b)("inlineCode",{parentName:"li"},"gcc -Wall -Wextra -std=c99 -pedantic encrypt.c -o encrypt")," or using your alias: ",Object(r.b)("inlineCode",{parentName:"li"},"gccc encrypt.c -o encrypt"),"."),Object(r.b)("li",{parentName:"ul"},"Execute ",Object(r.b)("strong",{parentName:"li"},"./encrypt")," and test your code.")))),Object(r.b)("h4",{id:"checkpoints"},"Checkpoints"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"What does the bitwise operator ",Object(r.b)("inlineCode",{parentName:"li"},">>")," do?  Can it be applied to ",Object(r.b)("inlineCode",{parentName:"li"},"float")," variables?"),Object(r.b)("li",{parentName:"ol"},"Given an 8-bit value (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"10011101"),"), how can you obtain the four high bits (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"1001")," in this example)?"),Object(r.b)("li",{parentName:"ol"},"What is the difference between ",Object(r.b)("inlineCode",{parentName:"li"},"^")," and ",Object(r.b)("inlineCode",{parentName:"li"},"|"),"?")),Object(r.b)("h3",{id:"part-2---integer-representation---twos-complement"},"Part 2 - Integer representation - Two's complement"),Object(r.b)("h4",{id:"introduction-1"},"Introduction"),Object(r.b)("p",null,"In this part, you will utilize bitwise operators to interpret 32-bit data using two's complement."),Object(r.b)("h4",{id:"instructions-1"},"Instructions"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the source file ",Object(r.b)("inlineCode",{parentName:"p"},"intrep.c"),", implement the ",Object(r.b)("inlineCode",{parentName:"p"},"int_magnitude")," function. It receives an ",Object(r.b)("inlineCode",{parentName:"p"},"unsigned int")," value as an argument, which it should interpret as being a 32-bit two's complement signed integer value.  It should return an ",Object(r.b)("inlineCode",{parentName:"p"},"unsigned int")," value representing the ",Object(r.b)("em",{parentName:"p"},"magnitude")," of the argument value. A trivial implementation of the ",Object(r.b)("inlineCode",{parentName:"p"},"magnitude")," function would look like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-c"},"unsigned int magnitude(unsigned int val) {\n  int signed_val = (int) val;\n  if (signed_val < 0) {\n    val = -signed_val;\n  }\n  return val;\n}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Using your knowledge of two's complement representation and bitwise operators, implement the ",Object(r.b)("inlineCode",{parentName:"p"},"magnitude")," function without using any signed values. In other words, don't use any values belonging to the ",Object(r.b)("inlineCode",{parentName:"p"},"int")," data type, or any other signed data type. Here is a suggested approach:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the highest bit of ",Object(r.b)("inlineCode",{parentName:"li"},"val")," is not set to 1, then just return the value as-is"),Object(r.b)("li",{parentName:"ul"},"If the highest bit of ",Object(r.b)("inlineCode",{parentName:"li"},"val")," is set to 1, then it's magnitude can be found by subtracting the value of the bits other than the highest bit from the ",Object(r.b)("inlineCode",{parentName:"li"},"unsigned int")," value numerically equal to ",Object(r.b)("inlineCode",{parentName:"li"},"INT_MAX")," plus 1"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Compile the program using the command: ",Object(r.b)("inlineCode",{parentName:"p"},"gcc -g -o intrep -Wall -Wextra -pedantic -std=c99 intrep.c")," or ",Object(r.b)("inlineCode",{parentName:"p"},"gccc -o intrep -g intrep.c"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run the program using the command  ",Object(r.b)("inlineCode",{parentName:"p"},"./intrep"),". You will know if your implementation is correct if you can run the program, and all of the ",Object(r.b)("inlineCode",{parentName:"p"},"assert")," statements in the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function succeed."))),Object(r.b)("h4",{id:"checkpoints-1"},"Checkpoints"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"What is two's complement?"),Object(r.b)("li",{parentName:"ol"},"What is integer overflow and underflow?"),Object(r.b)("li",{parentName:"ol"},"Is signed integer overflow an undefined behavior?"),Object(r.b)("li",{parentName:"ol"},"Is unsigned integer overflow an undefined behavior?")),Object(r.b)("h3",{id:"part-3---integer-representation---endianness"},"Part 3 - Integer representation - Endianness"),Object(r.b)("h4",{id:"introduction-2"},"Introduction"),Object(r.b)("p",null,"In this part, you will explore the endianness of multi-byte data representation."),Object(r.b)("h4",{id:"instructions-2"},"Instructions"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Compile and run the ",Object(r.b)("inlineCode",{parentName:"p"},"endian.c")," program using the following commands: ",Object(r.b)("inlineCode",{parentName:"p"},"gcc -g -o endian -Wall -Wextra -pedantic -std=c99 endian.c")," or ",Object(r.b)("inlineCode",{parentName:"p"},"gccc -o endian -g endian.c"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In its initial form, this program will print the size in bytes of several integer data types.  You can interpret the size of each data type as being the number of bytes required to store one value belonging to the data type. For example, if ",Object(r.b)("inlineCode",{parentName:"p"},"sizeof(int)")," is 4, that means that 4 bytes are needed to store one instance of the ",Object(r.b)("inlineCode",{parentName:"p"},"int")," data type.  This makes a lot of sense if one byte stores 8 bits, and ",Object(r.b)("inlineCode",{parentName:"p"},"int")," is a 32-bit type.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Now that we know that instances of the various integer data types require multiple bytes of memory to represent, an important question to ask is: "how are the bytes of an integer value stored in memory"?  Two typical approaches are called ',Object(r.b)("em",{parentName:"p"},"little endian")," and ",Object(r.b)("em",{parentName:"p"},"big endian"),".  On a ",Object(r.b)("em",{parentName:"p"},"big endian")," computer, the most significant byte of a multi-byte data value is stored in memory before the less-significant bytes.  In contrast, on a ",Object(r.b)("em",{parentName:"p"},"little endian")," computer, the least significant byte of a multi-byte data value is stored in memory before the more-significant bytes.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Uncomment the code labeled as "uncomment this part".  The variable called ',Object(r.b)("inlineCode",{parentName:"p"},"val")," contains the value 950238851, which in hexadecimal is ",Object(r.b)("inlineCode",{parentName:"p"},"38A37E83"),". That means that the bytes making up this value, from most significant to least significant, are"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"38 A3 7E 83 \n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Recompile the program, then run it in ",Object(r.b)("inlineCode",{parentName:"p"},"gdb")," using the command: ",Object(r.b)("inlineCode",{parentName:"p"},"gdb endian"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set a breakpoint at the beginning of the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function using the command ",Object(r.b)("inlineCode",{parentName:"p"},"break main"),".  Run the program in ",Object(r.b)("inlineCode",{parentName:"p"},"gdb")," using the ",Object(r.b)("inlineCode",{parentName:"p"},"run")," command.  Use the ",Object(r.b)("inlineCode",{parentName:"p"},"next")," command until ",Object(r.b)("inlineCode",{parentName:"p"},"gdb")," is at the final ",Object(r.b)("inlineCode",{parentName:"p"},"printf")," command of the program.  The pointer ",Object(r.b)("inlineCode",{parentName:"p"},"p")," points to the memory location which stores the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"val")," variable. Run the following commands in ",Object(r.b)("inlineCode",{parentName:"p"},"gdb"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"print/x ((unsigned char *)p)[0]\nprint/x ((unsigned char *)p)[1]\nprint/x ((unsigned char *)p)[2]\nprint/x ((unsigned char *)p)[3]\n")),Object(r.b)("p",{parentName:"li"},"These ",Object(r.b)("inlineCode",{parentName:"p"},"gdb")," commands"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"type cast the pointer to ",Object(r.b)("inlineCode",{parentName:"li"},"p"),' to the type "pointer to ',Object(r.b)("inlineCode",{parentName:"li"},"unsigned char"),'"'),Object(r.b)("li",{parentName:"ul"},"access the 4 byte values in memory starting at the address that ",Object(r.b)("inlineCode",{parentName:"li"},"p")," points to"),Object(r.b)("li",{parentName:"ul"},'prints each byte value in hexadecimal ("',Object(r.b)("inlineCode",{parentName:"li"},"print/x"),'" means "print in hexadecimal")')),Object(r.b)("p",{parentName:"li"},"These ",Object(r.b)("inlineCode",{parentName:"p"},"gdb")," commands are a good illustration of how ",Object(r.b)("inlineCode",{parentName:"p"},"gdb")," can inspect arbitrary memory locations as your program runs, and let you know exactly what is stored at those locations.  ",Object(r.b)("inlineCode",{parentName:"p"},"gdb")," is extremely cool!"))),Object(r.b)("h4",{id:"checkpoints-2"},"Checkpoints"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Based on your investigation, is the computer you are running the ",Object(r.b)("inlineCode",{parentName:"li"},"endian")," program on big endian or little endian?"),Object(r.b)("li",{parentName:"ol"},"If some data are saved in binary format on a big endian machine, can it be read on a little endian machine?  If not, why?  If so, how?")),Object(r.b)("h3",{id:"part-4---gradescope-submission"},"Part 4 - Gradescope submission"),Object(r.b)("p",null,"Create a ",Object(r.b)("em",{parentName:"p"},"zip")," file called ",Object(r.b)("inlineCode",{parentName:"p"},"ex7.zip"),", which contains ",Object(r.b)("inlineCode",{parentName:"p"},"encrypt.c")," and ",Object(r.b)("inlineCode",{parentName:"p"},"intrep.c")," with your implementation and fixes (note that ",Object(r.b)("inlineCode",{parentName:"p"},"endian.c")," is not required).  Submit the zip file as ",Object(r.b)("a",{parentName:"p",href:"https://www.gradescope.com/courses/266485/assignments/1348166"},"Day 7 In-class Exercise")," on Gradescope. Make sure your program passes all the autograder tests in order to get full credit. It is due before the next class.  However, late submission is allowed until our last class.  Even so, we highly recommend you to keep up the schedule, finish each in-class exercise, and submit it on Gradescope before the next class."))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return n?a.a.createElement(u,c(c({ref:t},b),{},{components:n})):a.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var b=2;b<r;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);