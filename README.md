# Unit testing training

## What unit testing is?
<b>Unit testing</b> is a software development process in which the smallest testable parts of an application, called units, are individually and independently examined for proper operation. Unit describes a part of your application.

Unit testing involves breaking your program into pieces, and subjecting each piece to a series of tests.

Usually tests are run as separate programs, but the method of testing varies, depending on the language, and type of software.

Most languages have unit testing frameworks, you should look into one for yours.

Tests are usually run periodically, often after every change to the source code. The more often the better, because the sooner you will catch problems.

## Benefits of using unit testing
- Find bugs early
- Facilitates change
- Simplifies Integration
- Provides documentation
- Quality of code
- Debugging process
- Design
- Reduce cost

#### Find bugs early
Issues are found at an early stage. Since unit testing is carried out by developers who test individual code before integration, issues can be found very early and can be resolved then and there without impacting the other pieces of the code. This includes both bugs in the programmer’s implementation and flaws or missing parts of the specification for the unit.

#### Facilitates change
Unit testing allows the programmer to refactor code or upgrade system libraries at a later date and make sure the module still works correctly. Unit tests detect changes that may break a design contract. They help with maintaining and changing the code.

#### Simplifies integration
Unit testing verifies the accuracy of the each unit. Afterward, the units are integrated into an application by testing parts of the application via unit testing. Later testing of the application during the integration process is easier due to the verification of the individual units.

#### Provides documentation
Unit testing provides documentation of the system. Developers looking to learn what functionality is provided by a unit and how to use it can look at the unit tests to gain a basic understanding of the unit’s interface (API).

#### Quality of code
Unit testing improves the quality of the code. It identifies every defect that may have come up before code is sent further for integration testing. Writing tests before actual coding makes you think harder about the problem. It exposes the edge cases and makes you write better code. 

#### Debugging process
Unit testing helps simplify the debugging process. If a test fails, then only the latest changes made in the code need to be debugged.

#### Design
Writing the test first forces you to think through your design and what it must accomplish before you write the code. This not only keeps you focused; it makes you create better designs. Testing a piece of code forces you to define what that code is responsible for. If you can do this easily, that means the code’s responsibility is well-defined and therefore that it has high cohesion.

#### Reduce costs
Since the bugs are found early, unit testing helps reduce the cost of bug fixes. Just imagine the cost of a bug found during the later stages of development, like during system testing or during acceptance testing. Of course, bugs detected earlier are easier to fix because bugs detected later are usually the result of many changes, and you don’t really know which one caused the bug. 

## How to write good unit test
Things that makes a unit test good:
- <b>Easy to write:</b> It should be easy to code all of those test routines without enormous effort.
- <b>Readable:</b> The intent of a unit test should be clear. A good unit test tells a story about some behavioral aspect of our application, so it should be easy to understand which scenario is being tested and — if the test fails — easy to detect how to address the problem. With a good unit test, we can fix a bug without actually debugging the code!
- <b>Reliable:</b> Unit tests should fail only if there’s a bug in the system under test. That seems pretty obvious, but programmers often run into an issue when their tests fail even when no bugs were introduced. For example, tests may pass when running one-by-one, but fail when running the whole test suite, or pass on our development machine and fail on the continuous integration server. These situations are indicative of a design flaw. Good unit tests should be reproducible and independent from external factors such as the environment or running order.
- <b>Fast:</b> If unit tests are slow, developers are more likely to skip running them on their own machines. One slow test won’t make a significant difference; add one thousand more and we’re surely stuck waiting for a while. Slow unit tests may also indicate that either the system under test, or the test itself, interacts with external systems, making it environment-dependent.
- <b>Truly unit:</b> Not integration. Unit and integration tests have different purposes. Both the unit test and the system under test should not access the network resources, databases, file system, etc., to eliminate the influence of external factors.
- <b>Name your test well:</b> No, shouldThrowException is not a good name for your test. Although I’m not convinced that every project should use some fancy naming conventions for the tests, I am fully convinced that you should be able to tell which part of your code is broken by barely reading the names of failed test cases.
- <b>One assertion per test:</b> A number of things that a single test check must be limited as well. Therefore, a good unit test should contain only one logical assertion i.e. check only one output/side effect of the tested method.

A typical unit test contains 3 phases (Arrange, Act and Assert): 
- First, it initializes a small piece of an application it wants to test (also known as the system under test, or SUT). <b>Arrange</b>
- Then it applies some stimulus to the system under test (usually by calling a method on it) <b>Act</b>
- Finally, it observes the resulting behavior <b>Assert</b>

## What is mocha?
Mocha is a test framework that runs in node.js and in the browser, here you can find more information:

https://mochajs.org/

It provides you some methods:
- <b>describe:</b> This method is used to generated a group of test with something in common 
- <b>it:</b> This method creates one test
- <b>before:</b> This method will be executed before each describe section
- <b>after:</b> This method will be executed after each describe section
- <b>beforeEach:</b> This method will be executed before each it section
- <b>afterEach:</b> This method will be executed after each it section
- <b>assert:</b> This allows you to verify if the test is working or not 
 (var assert = require('assert')). You can use assert directly, 
but mocha allows you to use the assertion library that you prefer

## What is chai?
Chai is a BBD/TDD assertion library, you can find more information here:
https://www.chaijs.com/

It contains 3 main assertion methods:
- should
- expect 
- assert 

### Should
https://www.chaijs.com/guide/styles/#should

Examples:

### Expect
https://www.chaijs.com/guide/styles/#expect

Examples:
### Assert
https://www.chaijs.com/guide/styles/#assert

Examples:

## What is sinon?

## Project installation
Steps to launch the tutorial in your local machine

- Download the repository in your computer
- Launch npm install
- Launch npm run build
- Open ./dist/index.html

The project also contains some features that you can execute:
- <b>npm run build</b> (Create the project for production environment)
- <b>npm run dev</b> (Runs the build with no JS minification, sourcemaps, ...)
- <b>npm run dev:server</b> (The same as dev but in this case every change done in the project will be automatically applied to the page)
- <b>npm run lint</b> (It checks the JS rules that you have to follow, eslint)
- <b>npm run lint:fix</b> (It try to fix automatically the rules not passed in eslint)
- <b>npm run css:lint</b> (It verifies that you are passing the CSS rules created for the project)
- <b>npm run test</b> (It launch the Unit test over all files with the pattern *.test.js in src folder, the reporter it's displayed in the console)
- <b>npm run test:watch</b> (The same as before, but the reporter will be relaunched in every change of the code that you do)
- <b>npm run test:chrome</b> (It user karma to launch the test in a real browser, in this case Chrome)
- <b>npm run test:debug</b> (It launch the test in a browser where you can debug them)
- <b>npm run test:html</b> (The same as before but it generates the HTML files with the tests)
