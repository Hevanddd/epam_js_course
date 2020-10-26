# Module 7: DOM, Events

## DOM

_Read:_

- [MDN Document Object Model Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (~20min)
- [DOM and Events Crash Course (in Russian)](https://learn.javascript.ru/ui) (~120min)
- [Traversing an HTML table with JavaScript and DOM Interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces) (~20min)

## Events

_Read:_

- [Events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events) (~10min)

_Watch:_

- [An Introduction to DOM Events with JavaScript (a bit outdated but good examples)](https://www.youtube.com/watch?v=QE1YQnhntgw) (~30min)
- [JavaScript Event Capture, Propagation and Bubbling](https://www.youtube.com/watch?v=F1anRyL37lE) (~10min)
- [What is Event Delegation?](https://www.youtube.com/watch?v=pKzf80F3O0U) (~5min)

## Excercises

### Showing the width and height of a window 

Write a program to get the width and height of the window (any time the window is resized) and display them in paragraphs on the page. Getting window size on resize should be throttled. 

### Searching by word in text 

Write a program that will search and highlight entered text in a given paragraph. You should use \<input\>, \<textarea\>, \<p\> and \<b\> tags. User should be able to put any text in \<textarea\>, then text will be immediately displayed in \<p\>. After that when user starts typing any text in \<input\> field, program should highlight search string from \<input\> field in paragraph \<p\> by using \<b\> tag. 

_Example:_ 

![Task2](images/task2.png)

### Images slider 

Write a program that will let user to add images in slider. Slider should switch images when user clicks appropriate controls. Also images should be switched automatically in time that user sets. Manual switching of images drops the timer.  

When user double-clicks on image, system should ask for image deleting, and remove image from slider if user confirms that. After image has been removed, slider switches to the next image.  

_Example:_ 

![Task3](images/task3.png)

### Table rows 
Write a program to manage table of two columns. User should be able to add/delete rows and insert text inside cells: 
*  To add new row user clicks on “Add row” button
*  To delete - button with “bin icon“
*  To edit cell text user double clicks on particular cell. After that:
   *  Input field appears instead of text 
   *  Text which was in cell pasted into input 
   *  Focus applied on input 
   *  Press Enter key - input field is hidden and text is added into the cell 

_Example:_ 

![Task4](images/task4.png)
