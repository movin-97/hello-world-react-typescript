Feature: Manage Menus
    
    Scenario: Add a new menu item
        When on the menu management page
        And click on the "Add Menu" button
        And fill in the details for a new menu item
        And click the "Save" button
        And the new menu item will be added to the menu

    Scenario: Edit an existing menu item
        When on the menu management page
        And click on the menu item I want to edit
        And click the "Edit" button
        And update the details for the menu item
        And click the "Save" button
        And the updated menu item should be displayed on the menu

    Scenario: View all menu items
        When on the menu management page
        And view the list of menu items
        And should see all the menu items currently available

    Scenario: Remove a menu item
        When on the menu management page
        And click on the menu item I want to remove
        And click the "Delete" button
        And menu item should be removed from the menu.