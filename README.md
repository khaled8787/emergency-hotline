**1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

ans : 

1.getElementById : It finds a single ID and returns it, or null if there is no ID with that name.

2.getElementsByClassName : Accesses all classes with the same name and returns all Html collections whose class names are given inside brackets.

3.querySelector : It finds the first element that is present using any CSS selector and returns only one element. If there is no element, it returns null.

4.querySelectorAll : Finds all matching elements with any CSS selector.



**How do you create and insert a new element into the DOM?**

ans : First, you need to create an element using document.createElement(); . Then, you need to add it to its parent using apendChild(); or apend (); .



**What is Event Bubbling and how does it work?**

ans : Event bubbling is a process that first acts on the DOM event that targets it, then works on its parent, then works on its parent again, bubbling upwards in this way.



**What is Event Delegation in JavaScript? Why is it useful?**

ans : 

what is Event Delegation : Event delegation means controlling all children by keeping an eye on their parent instead of keeping an eye on many things separately. Through this, you can work smartly with less code.

Why is it useful : The code is short and clean. When you add a new element to the DOM, you don't need to add a separate event listener because the work is done from the parent due to event delegation.



**What is the difference between preventDefault() and stopPropagation() methods?**

ans : 

preventDefault() : Using preventDefault() stops the browser's default behavior.

stopPropagation() : Using stopPropagation() stops the bubbling above the event.