# Final task: Todo List 

The practice task is a simple Todo List application written without using libraries with pure JS only. To simplify the development, it is proposed to use a ready-made assembly based on Webpack with the ability to hot reload and compile scripts and styles into a single bundle. 

## Basic requirement 

1. Interface to view/add/edit/delete Todo list items 
1. The application consists of two lists: Open and Done 
1. Each entry in the lists must have two statuses: completed or open 
1. The application provides the ability to search by lists 
1. The state of the application should be saved after a page is reloaded 

## Technical details 

### Application 

1. The application must have a search field for all records. When a user starts typing a query in the search field, each time a key is pressed, if the field is not empty, both Open and Done lists are filtered relative to the entered query. When the field is cleared, the lists are displayed in their original state. 
1. A data should be stored in localStorage and displayed after a page is reloaded. Saving should occur at every key action:
    *  add/delete/edit records 
    *  sorting lists 

### Lists 

1. To add a new entry to the Open list, a user enters text in the “New task" field and presses the "ADD" button or the Enter key. The "New task" field is cleared and a new entry appears at the top of the Open list
1. Under each list there is a link with which you can clear the entire list
1. The Open list should be sorted by:
    * records (asc/desc) 
    * creation date (asc/desc) 
1. The Done list should be sorted by: 
    * records (asc/desc) 
    * due date (asc/desc) 

### Records

1. Each record must have the following fields: 
    * text 
    * creation date 
    * status 
    * due date (after changing the status to completed) 
1. When a user clicks on the checkbox of an open record, it is marked as completed and will be placed in the Done list 
1. When a user clicks on the checkbox of a completed record, it is marked as opened and will be placed in the Open list 
1. When a user hovers over a record, the delete icon appears 
1. When a user clicks on the delete icon the entry is deleted 
1. To edit a record a user needs to double click on its text 
1. When a user double-clicks, the text is replaced with an input field where you can correct the current value. When a user presses Enter key, the value is saved and the field is hidden, showing the corrected text. When a user presses Esc key, the field is hidden, showing the previous value. 

### Design 

The design of the application is presented in the form of layouts below in this document. When working with layouts, you should pay attention primarily to the location of elements and their behavior. The style of the elements is optional, but it is recommended to use the one proposed. Precision indentation between elements can also be neglected, as it is presented solely for the sake of clarity. 

## Check list 

1. Overall interface of the application 
1. Display two task lists 
1. Add, edit, and delete tasks 
1. Clearing of task lists 
1. Sorting of task lists 
1. Search by task lists 
1. Save application state after page reload 

## Layouts

_Main application window_ 

![Main application window](images/1.png)

_Editing a task_

![Editing a task](images/2.png)

_Double click on the button brings up the edit field_

![Double click on the button brings up the edit field](images/3.png)

_Task delete icon_

![Task delete icon](images/4.png)

_Delete icon appears when user hovers over the item_

![Delete icon appears when user hovers over the item](images/5.png)

