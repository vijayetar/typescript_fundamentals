# TYPESCRIPT EXERCISE FROM LINKEDIN

## STEPS

* go to the desired directory-
```
vijayetar~/linkedInTutorials/TypeScript$
```

* check if npm is installed and if not then install it
``` 
npm -v
```

* install the typescript using npm
```
npm install -g typescript
```

* open program in visual studio code
```
code .
```

* set up tsconfig.json at the root of the folder
```
{
  "compilerOptions": {
    "target": "ES5",
    "outDir": "dist"
  }
}
```

* you will get an error.  create a new file model.ts at the root and the error should disappear with a new directory containing a copy of all the js files.

## TypeScript syntax

1. let and var are similar
2. see how types are defined in the input and output for each line of code. the more explicit you are, the better it is. Examples of primitive types are:
```
number
string
boolean
Object
null
BigInt
Undefined
Symbol
```  

![Syntax Example](assets/Typescript_syntax.png)  
3. __TypeInference__: allows Typescript to predict the output of a function and then create object with appropriate methods when assigned to the return value of the function.   
4. __GradualTyping__: allows us to change the type using the type __any__ but it should be used sparingly.  
5. __Interfaces__: allow you to define the object better, and is compiled early  
![Example of Interface Syntax](assets/Typescript_interface.png)  
* They also allow __duck typing__ so that even if the object is not defined again as the interface variable, as long as the obeject has the same properties as the interface object, typescript will equate the two... 
* Make properties and methods option, and use ES6
![Interface Optionals](assets/TS_interface_arrowFunction.png)  
6. __enums__: powerful to restrict to two options and refer them later in both ts and js files
![Enum syntax](assets/TS_enum_syntax.png)  
![Enum ](assets/TS_enum_literal.png)
7. __union types and custom types__: check out the example to define a new type Cost that is string or number, as well as see how it is used.
![Types](assets/TS_types.png)  
8.![Classes in JavaScript](assets/TS_jsclasses.png)  
 - if you convert the file to ts, then errors pop up.  first declare the properties, then add types to it. if a type does not exist then add an interface.   
 - for a class level property you have to create a static method or property within the class itself.
 - Here is the static file in TS  
 ![TS static property](assets/TS_staticProperty.png)    
 - Here is the static property in JS
 ![TS javascript class property](assets/TS_JSreflectionOfStaticProperty.png)  

9. Use of access modifiers also help clean up the JS code more without using dunders, but since TS only extends JS, JS code, despite warnings, will still function with wrong access modifiers.  
![Access Modifiers](assets/TS_accessModifiers.png)  
10. Generics in Typescript  
![Generics](assets/TS_generics.png)  

