(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(91)),c={id:"ex3",title:"Day 3 In-class Exercise"},r={unversionedId:"exercises/ex3",id:"exercises/ex3",isDocsHomePage:!1,title:"Day 3 In-class Exercise",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, but you need not hand it in unless specified. You are encouraged to work at home to complete what you do not get through today.",source:"@site/docs\\exercises\\ex3.md",slug:"/exercises/ex3",permalink:"/cs220-summer21/docs/exercises/ex3",version:"current"},l=[{value:"Learning Objectives",id:"learning-objectives",children:[{value:"Part 0 - Get the starter codes",id:"part-0---get-the-starter-codes",children:[]},{value:"Part 1 - Setup alais commands in bashrc",id:"part-1---setup-alais-commands-in-bashrc",children:[]},{value:"Part 2 - More C control flow (DNA reverse complement)",id:"part-2---more-c-control-flow-dna-reverse-complement",children:[]},{value:"Part 3 - ASCII values (Counting characters in C-string)",id:"part-3---ascii-values-counting-characters-in-c-string",children:[]},{value:"Part 4 - More ASCII values (Most frequently-occurring characters)",id:"part-4---more-ascii-values-most-frequently-occurring-characters",children:[]},{value:"Part 5 - File I/O and Math functions (Calculating compound interests)",id:"part-5---file-io-and-math-functions-calculating-compound-interests",children:[]},{value:"Part 6 - Gradescope submission",id:"part-6---gradescope-submission",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, but you need not hand it in unless specified. You are encouraged to work at home to complete what you do not get through today."))),Object(o.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(o.b)("div",{className:"admonition admonition-success alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Objectives")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This exercise will help you gain additional familiarity with:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Conditionals and loops"),Object(o.b)("li",{parentName:"ul"},"Arrays and strings"),Object(o.b)("li",{parentName:"ul"},"Characters and ASCII table"),Object(o.b)("li",{parentName:"ul"},"File I/O (fopen, fclose, fprintf, fscanf, ferror)"),Object(o.b)("li",{parentName:"ul"},"Math functions (pow & exp)"),Object(o.b)("li",{parentName:"ul"},"emacs, git, gcc, zip")))),Object(o.b)("h3",{id:"part-0---get-the-starter-codes"},"Part 0 - Get the starter codes"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Remember in previous exercises, we renamed your copy of the course repository and your personal repository to ",Object(o.b)("inlineCode",{parentName:"p"},"cs220-public")," and ",Object(o.b)("inlineCode",{parentName:"p"},"cs220")," for brevity. If this is not the case, ask for assistance. You may need to redo steps from earlier exercises."))),Object(o.b)("p",null,"To get the start codes, you should:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"ssh to an ugrad server."),Object(o.b)("li",{parentName:"ol"},"Navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"cs220-public"),"."),Object(o.b)("li",{parentName:"ol"},"Type ",Object(o.b)("inlineCode",{parentName:"li"},"git status"),' and confirm you have not modified any files or accidentally committed to the course repository. That is, you should not see any files categorized as "Changes to be committed", "Changes not staged for commit" or "Untracked."  You should also ',Object(o.b)("em",{parentName:"li"},"not")," see the message \"Your branch is ahead of 'origin/master' by X commit(s).\" (If you do, please speak with an instructor or CA for a fix.)"),Object(o.b)("li",{parentName:"ol"},"Type ",Object(o.b)("inlineCode",{parentName:"li"},"git pull")," to synchronize ",Object(o.b)("inlineCode",{parentName:"li"},"cs220-public")," with the remote repo."),Object(o.b)("li",{parentName:"ol"},"Confirm that you can see the starter codes for today\u2019s exercise by typing ",Object(o.b)("inlineCode",{parentName:"li"},"ls exercises/ex3")," -- you should see files listed below:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"~/cs220-public/exercises\n\u2514\u2500\u2500 /ex3\n    \u251c\u2500\u2500 compound.c\n    \u251c\u2500\u2500 count1.c\n    \u251c\u2500\u2500 count2.c\n    \u251c\u2500\u2500 count3.c\n    \u251c\u2500\u2500 inputBad1.txt\n    \u251c\u2500\u2500 inputBad2.txt\n    \u251c\u2500\u2500 input.txt\n    \u2514\u2500\u2500 outputGood.txt\n"))),Object(o.b)("li",{parentName:"ol"},"Now, navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"cs220/exercises"),". (The exercises directory that you have created in previous exercises)"),Object(o.b)("li",{parentName:"ol"},"Make a new directory for today's exercise. e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"mkdir ex3"),"."),Object(o.b)("li",{parentName:"ol"},"Copy the starter codes for today's exercise from ",Object(o.b)("inlineCode",{parentName:"li"},"cs220-public")," to the directory you just created. e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"cp ~/cs220-public/exercises/ex3/* ~/cs220/exercises/ex3/"),"."),Object(o.b)("li",{parentName:"ol"},"Navigate to this new directory and verify all the starter codes are there."),Object(o.b)("li",{parentName:"ol"},'Add and commit the changes to your local repository with the message "Added Ex3 starter codes". e.g. ',Object(o.b)("inlineCode",{parentName:"li"},"git add ."),", then ",Object(o.b)("inlineCode",{parentName:"li"},'git commit -m "Added Ex3 starter codes"'),"."),Object(o.b)("li",{parentName:"ol"},"Push changes to the remote repository. You should always pull it to confirm that your local repository is up-to-dated before pushing changes. e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"git pull"),", then ",Object(o.b)("inlineCode",{parentName:"li"},"git push"),". If you encounter difficulties, do not hesitate to ask for assistance.")),Object(o.b)("h4",{id:"checkpoints"},"Checkpoints"),Object(o.b)("p",null,"These steps will become a routine before you start doing in-class exercises. You should make sure you know what to do for:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Getting the starter codes. (i.e. which directory you should navigate to and use ",Object(o.b)("inlineCode",{parentName:"li"},"git pull")," to get the starter codes.)"),Object(o.b)("li",{parentName:"ol"},"Copying the start codes from ",Object(o.b)("inlineCode",{parentName:"li"},"cs220-public")," to ",Object(o.b)("inlineCode",{parentName:"li"},"cs220"),"."),Object(o.b)("li",{parentName:"ol"},"Pushing changes to your personal repository. (Remember all changes should be made in ",Object(o.b)("inlineCode",{parentName:"li"},"cs220"),", but not ",Object(o.b)("inlineCode",{parentName:"li"},"cs220-public"),".)")),Object(o.b)("h3",{id:"part-1---setup-alais-commands-in-bashrc"},"Part 1 - Setup alais commands in bashrc"),Object(o.b)("p",null,"So far you have learned how to compile a C program from source files using this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"gcc -std=c99 -pedantic -Wall -Wextra <source files>\n")),Object(o.b)("p",null,"It's a bit inconvenient to type this long command again and again for compiling different source files. To speed up, you can create alias commands."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"We created a ",Object(o.b)("inlineCode",{parentName:"p"},".bashrc")," unix shell file that contains several alias and environment settings that will make your ugrad server lives better. Along with this, we have a ",Object(o.b)("inlineCode",{parentName:"p"},".bash_profile")," configuration file which will get the ",Object(o.b)("inlineCode",{parentName:"p"},".bashrc")," settings into place when you log in remotely. While you are still in the ",Object(o.b)("em",{parentName:"p"},"cs220-public")," directory, type ",Object(o.b)("inlineCode",{parentName:"p"},"ls -a")," to see this (hidden) file, along with the usual suspects.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Assuming you do not already have a customized ",Object(o.b)("inlineCode",{parentName:"p"},".bashrc")," file in your home directory (ask for help if you already have one!), type ",Object(o.b)("inlineCode",{parentName:"p"},"cp .bashrc ~")," to copy our version of the file to your home directory. Next, type ",Object(o.b)("inlineCode",{parentName:"p"},"cp .bash_profile ~")," to copy the other file to your home directory. Then type ",Object(o.b)("inlineCode",{parentName:"p"},"source ~/.bashrc")," to run it. Normally this configuration file will automatically run every time you log into a ugrad unix server, but for now we want it to take effect in this session.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Type ",Object(o.b)("inlineCode",{parentName:"p"},"cat ~/.bashrc")," to see the contents of that file. It sets your default ",Object(o.b)("em",{parentName:"p"},"EDITOR")," to be ",Object(o.b)("em",{parentName:"p"},"emacs")," (feel free to change it to ",Object(o.b)("em",{parentName:"p"},"vim")," if you prefer, then re-type the ",Object(o.b)("inlineCode",{parentName:"p"},"source")," command above), and it defines two aliases we can use as shortcuts when compiling our programs. The first one, ",Object(o.b)("inlineCode",{parentName:"p"},"gccc")," (note the extra 'c'!) is our standard ",Object(o.b)("inlineCode",{parentName:"p"},"gcc")," command with all the required flags already included. To use it, just type ",Object(o.b)("inlineCode",{parentName:"p"},"gccc myfile.c")," to compile a file, which is equivalent to (an alias of) ",Object(o.b)("inlineCode",{parentName:"p"},"gcc -std=c99 -pedantic -Wall -Wextra myfile.c"),". The lines beginning with a hashtag are comments in this unix shell scripting language.  The second alias will be useful when we start using C++."))),Object(o.b)("h4",{id:"checkpoints-1"},"Checkpoints"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What does ",Object(o.b)("inlineCode",{parentName:"li"},"gccc")," mean? "),Object(o.b)("li",{parentName:"ol"},"Which one do you prefer to type, ",Object(o.b)("inlineCode",{parentName:"li"},"gccc <source files>")," or ",Object(o.b)("inlineCode",{parentName:"li"},"gcc -std=c99 -pedantic -Wall -Wextra <source files>"),"?"),Object(o.b)("li",{parentName:"ol"},"Try to define alias of your own in ",Object(o.b)("inlineCode",{parentName:"li"},"~/.bashrc"),". Have you created some useful alias commands that help speeding up your typesetting? e.g. Do you think this alias ",Object(o.b)("inlineCode",{parentName:"li"},"alias update_public='cd ~/cs220-public; git pull; cd ~'")," is helpful?")),Object(o.b)("h3",{id:"part-2---more-c-control-flow-dna-reverse-complement"},"Part 2 - More C control flow (DNA reverse complement)"),Object(o.b)("h4",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"In this part, you should work on ",Object(o.b)("inlineCode",{parentName:"p"},"count1.cpp"),". You will practice how to read a C string char by char and modify its value. Your goal is to apply the reverse complement on a DNA string. You should pay attention to the null-terminator of a C-string."),Object(o.b)("h4",{id:"instructions"},"Instructions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the file for editing using ",Object(o.b)("inlineCode",{parentName:"li"},"emacs count1.c")," or ",Object(o.b)("inlineCode",{parentName:"li"},"vim count1.c"),"."),Object(o.b)("li",{parentName:"ol"},"Read the source code and the comments.  Your instructions are in the comments."),Object(o.b)("li",{parentName:"ol"},"Modify the source file and test by:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Compiling with `",Object(o.b)("inlineCode",{parentName:"li"},"gccc count1.c -o count1")," (use the new alias!) The extra ",Object(o.b)("inlineCode",{parentName:"li"},"-o count1")," portion at the end of the line is asking for the executable created by ",Object(o.b)("inlineCode",{parentName:"li"},"gcc")," to be named ",Object(o.b)("inlineCode",{parentName:"li"},"count1")," instead of the usual ",Object(o.b)("inlineCode",{parentName:"li"},"a.out"),"."),Object(o.b)("li",{parentName:"ul"},"Running with ",Object(o.b)("inlineCode",{parentName:"li"},"./count1"),"."),Object(o.b)("li",{parentName:"ul"},"The results should be printed to the console for you to compare.")))),Object(o.b)("h4",{id:"checkpoints-2"},"Checkpoints"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Why does ",Object(o.b)("inlineCode",{parentName:"li"},"rev_comp")," have size ",Object(o.b)("inlineCode",{parentName:"li"},"dna_len + 1"),", but not ",Object(o.b)("inlineCode",{parentName:"li"},"dna_len"),"?"),Object(o.b)("li",{parentName:"ol"},"Have you handled the null-terminator correctly?"),Object(o.b)("li",{parentName:"ol"},"Which loop have you used? ",Object(o.b)("inlineCode",{parentName:"li"},"while")," loop, ",Object(o.b)("inlineCode",{parentName:"li"},"do while")," loop, ",Object(o.b)("inlineCode",{parentName:"li"},"for")," loop? Can you find a way to convert one to the other? How do you terminate your loop?"),Object(o.b)("li",{parentName:"ol"},"Have you used ",Object(o.b)("inlineCode",{parentName:"li"},"if-else")," statement or ",Object(o.b)("inlineCode",{parentName:"li"},"switch-case")," statement?  Can you convert it from one to the other?")),Object(o.b)("h3",{id:"part-3---ascii-values-counting-characters-in-c-string"},"Part 3 - ASCII values (Counting characters in C-string)"),Object(o.b)("h4",{id:"introduction-1"},"Introduction"),Object(o.b)("p",null,"In this part, you will work on ",Object(o.b)("inlineCode",{parentName:"p"},"count2.cpp"),". You are given a C-string, and you want to count how many alphabetic, digit, and whitespace characters in it. While you can use ",Object(o.b)("inlineCode",{parentName:"p"},"isalpha"),", ",Object(o.b)("inlineCode",{parentName:"p"},"isdigit")," and ",Object(o.b)("inlineCode",{parentName:"p"},"isspace")," functions for the checking, you should challenge yourself to use the ASCII value for the comparison."),Object(o.b)("h4",{id:"instructions-1"},"Instructions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the file for editing using ",Object(o.b)("inlineCode",{parentName:"li"},"emacs count2.c")," or ",Object(o.b)("inlineCode",{parentName:"li"},"vim count2.c"),"."),Object(o.b)("li",{parentName:"ol"},"Read the source code and the comments.  Your instructions are in the comments."),Object(o.b)("li",{parentName:"ol"},"Modify the source file and test by:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Compiling with `",Object(o.b)("inlineCode",{parentName:"li"},"gccc count2.c -o count2"),"."),Object(o.b)("li",{parentName:"ul"},"Running with ",Object(o.b)("inlineCode",{parentName:"li"},"./count2"),"."),Object(o.b)("li",{parentName:"ul"},"The results should be printed to the console for you to check.")))),Object(o.b)("h4",{id:"checkpoints-3"},"Checkpoints"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What are ASCII values?"),Object(o.b)("li",{parentName:"ol"},"Is there a difference between ",Object(o.b)("inlineCode",{parentName:"li"},"char a = '1';")," and ",Object(o.b)("inlineCode",{parentName:"li"},"char a = 1;"),"?"),Object(o.b)("li",{parentName:"ol"},"Can you convert an upper-case letter to a lower-case letter using the ASCII values?")),Object(o.b)("h3",{id:"part-4---more-ascii-values-most-frequently-occurring-characters"},"Part 4 - More ASCII values (Most frequently-occurring characters)"),Object(o.b)("h4",{id:"introduction-2"},"Introduction"),Object(o.b)("p",null,"Now, you should work on ",Object(o.b)("inlineCode",{parentName:"p"},"count3.cpp"),". This time, you are asked to find the two most frequently-occurring characters in a C-string. Because you now know that characters in C are represetned by 256 ASCII values, you are going to count the frequency using an array of 256 integers, and then use the counting result to find the two most frequently-occurring characters."),Object(o.b)("h4",{id:"instructions-2"},"Instructions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the file for editing using ",Object(o.b)("inlineCode",{parentName:"li"},"emacs count3.c")," or ",Object(o.b)("inlineCode",{parentName:"li"},"vim count3.c"),"."),Object(o.b)("li",{parentName:"ol"},"Read the source code and the comments.  Your instructions are in the comments."),Object(o.b)("li",{parentName:"ol"},"Modify the source file and test by:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Compiling with `",Object(o.b)("inlineCode",{parentName:"li"},"gccc count3.c -o count3"),"."),Object(o.b)("li",{parentName:"ul"},"Running with ",Object(o.b)("inlineCode",{parentName:"li"},"./count3"),"."),Object(o.b)("li",{parentName:"ul"},"The results should be printed to the console for you to check.")))),Object(o.b)("h4",{id:"checkpoints-4"},"Checkpoints"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Justify why you can use an array of 256 integers for the counting."),Object(o.b)("li",{parentName:"ol"},"How do you get the most frequently-occurring character using the array?"),Object(o.b)("li",{parentName:"ol"},"How do you get the second most frequently-occurring character using the array?")),Object(o.b)("h3",{id:"part-5---file-io-and-math-functions-calculating-compound-interests"},"Part 5 - File I/O and Math functions (Calculating compound interests)"),Object(o.b)("h4",{id:"introduction-3"},"Introduction"),Object(o.b)("p",null,"This is the last part of today's exercise. You are going to practice file I/O in C and use the math functions to implement different compund interest formula. You should work on ",Object(o.b)("inlineCode",{parentName:"p"},"compund.c")," and use ",Object(o.b)("inlineCode",{parentName:"p"},"input.txt")," as your file input."),Object(o.b)("h4",{id:"instructions-3"},"Instructions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the file for editing using ",Object(o.b)("inlineCode",{parentName:"p"},"emacs compound.c")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"vim compound.c"),", if you use ",Object(o.b)("inlineCode",{parentName:"p"},"vim"),".)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Read the source code and the comments.  Your instructions are in the comments. You will find it handy to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php"}),"this website")," for looking up formulas to solve the problem.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Modify the source files and test by:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Compiling with ",Object(o.b)("inlineCode",{parentName:"li"},"gcc -Wall -Wextra -std=c99 -pedantic -lm compound.c -o compound")," or if you prefer to take advantage of the alias: ",Object(o.b)("inlineCode",{parentName:"li"},"gccc -lm compound.c -o compound"),"."),Object(o.b)("li",{parentName:"ul"},"Running with ",Object(o.b)("inlineCode",{parentName:"li"},"./compound input.txt")," (change up to test with ",Object(o.b)("strong",{parentName:"li"},"inputBad1.txt")," and ",Object(o.b)("strong",{parentName:"li"},"inputBad2.txt")," also.)")),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"gcc")," command we are using today includes the extra argument ",Object(o.b)("inlineCode",{parentName:"p"},"-lm")," which tells ",Object(o.b)("inlineCode",{parentName:"p"},"gcc")," to include the ",Object(o.b)("inlineCode",{parentName:"p"},"m")," (math) library when linking. Later this week, we will talk more about the relationship between header (",Object(o.b)("inlineCode",{parentName:"p"},".h"),") files, libraries, the compiler, and the linker."),Object(o.b)("p",{parentName:"div"},"The interest rates in the ",Object(o.b)("strong",{parentName:"p"},"input.txt")," file are expressed as fractions, not percents. So 0.3 means 30%, not 0.3%."))),Object(o.b)("p",{parentName:"li"},"When the ",Object(o.b)("inlineCode",{parentName:"p"},"compound")," program runs successfully, it places its output in a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"output.txt"),". You will not see the output at the terminal. (You might see output at the terminal if your program fails, but you should not see any if it succeeds.)  To check the contents of the file ",Object(o.b)("inlineCode",{parentName:"p"},"output.txt"),", use a command like ",Object(o.b)("inlineCode",{parentName:"p"},"cat output.txt")," or ",Object(o.b)("inlineCode",{parentName:"p"},"more output.txt"),". For your reference, in the instructors\u2019 solution, the first two lines of ",Object(o.b)("inlineCode",{parentName:"p"},"output.txt")," are: "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"107.00 107.23 107.25\n580.25 582.74 582.98\n")),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Unix Tip of the day")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We gave you expected output file ",Object(o.b)("inlineCode",{parentName:"p"},"outputGood.txt"),", which is what your program should output when run with ",Object(o.b)("inlineCode",{parentName:"p"},"input.txt")," as input. Once you've run your code successfully, you can use the unix ",Object(o.b)("inlineCode",{parentName:"p"},"diff")," command to see if your results in ",Object(o.b)("inlineCode",{parentName:"p"},"output.txt")," match the expected results in ",Object(o.b)("inlineCode",{parentName:"p"},"outputGood.txt")," as follows: ",Object(o.b)("inlineCode",{parentName:"p"},"diff  output.txt  outputGood.txt"),"."))),Object(o.b)("p",{parentName:"li"},"No output from running this command means they are exactly the same. Otherwise, you will see lines with < or > at the start, indicating which lines differ, and how they appear in one file or the other. Another way to compare them is to open both in ",Object(o.b)("inlineCode",{parentName:"p"},"emacs")," - either in side by side terminal windows, or within emacs using the ",Object(o.b)("inlineCode",{parentName:"p"},"ctrl-x 4 f")," command (type 2nd filename when prompted). Use ",Object(o.b)("inlineCode",{parentName:"p"},"ctrl-x o")," (other) to toggle between the file buffers. Use ",Object(o.b)("inlineCode",{parentName:"p"},"ctrl-x 1")," with the cursor in the window you want to keep when done looking at both."))),Object(o.b)("h4",{id:"checkpoints-5"},"Checkpoints"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Why do we need ",Object(o.b)("inlineCode",{parentName:"li"},"-lm")," in our ",Object(o.b)("inlineCode",{parentName:"li"},"gcc"),"/",Object(o.b)("inlineCode",{parentName:"li"},"gccc")," command?"),Object(o.b)("li",{parentName:"ol"},"How do you open a file to read in C?"),Object(o.b)("li",{parentName:"ol"},"How do you open a file to write in C?"),Object(o.b)("li",{parentName:"ol"},"How do you close a file in C?"),Object(o.b)("li",{parentName:"ol"},"How do you check if there is a file error in C?"),Object(o.b)("li",{parentName:"ol"},"How do you parse the file content and assign the valeus to variables in C?"),Object(o.b)("li",{parentName:"ol"},"What is an assertion in C? When should you use it?"),Object(o.b)("li",{parentName:"ol"},"What is the return value of ",Object(o.b)("inlineCode",{parentName:"li"},"fscanf"),"?")),Object(o.b)("h3",{id:"part-6---gradescope-submission"},"Part 6 - Gradescope submission"),Object(o.b)("p",null,"Create a ",Object(o.b)("em",{parentName:"p"},"zip")," file called ",Object(o.b)("inlineCode",{parentName:"p"},"ex3.zip"),", which contains ",Object(o.b)("inlineCode",{parentName:"p"},"count1.c"),", ",Object(o.b)("inlineCode",{parentName:"p"},"count2.c"),", ",Object(o.b)("inlineCode",{parentName:"p"},"count3.c"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"compound.c")," with your implementation.  Submit the zip file as Day 3 In-class Exercise on Gradescope. Make sure your program passes all the autograder tests in order to get full credit. It is due before next class.  However, late submission is allowed until our last class.  Even so, we highly recommend you to keep up the schedule, finish each in-class exercise, and submit it on Gradescope before next class."))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(m,r(r({ref:t},s),{},{components:n})):i.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var s=2;s<o;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);