# 1. Introduction

**Selvam** is a full-stack web-based personal finance management application designed to help users track, manage, and analyze their financial data.

It helps users:

- Record and categorize daily expenses
- Track assets, liabilities, and overall net worth
- Monitor spending patterns through a dashboard
- Make better financial decisions using organized data

In simple terms, this system is used to manage personal finances in a structured and organized way.

---

# 2. Purpose of the Form

The **Expense Entry Form** is designed to collect and manage expense data in a structured format.

This form is used to:

- Record daily and monthly spending with proper categorization
- Capture the date, amount, and category of each expense
- Add descriptive notes for detailed tracking
- Store data for dashboard analytics and monthly summaries

This data helps users understand their spending habits and identify areas for financial improvement.

**Figure 1:** Expense Entry Form showing input fields — Amount, Category (dropdown), Date, and Description.

**Explanation:**
This section of the form collects the core expense data such as amount, category, date, and an optional description. These fields are essential for identifying, organizing, and summarizing each expense record.

---

# 3. Input Controls Used in the Form

| S.No | Control Type   | Field Name  | Description                                    |
|------|---------------|-------------|------------------------------------------------|
| 1    | Number Input  | Amount      | Monetary value of the expense (decimal support) |
| 2    | Dropdown      | Category    | Select expense category (Food, Transport, Rent, Utilities, Shopping, Health, Entertainment, Other) |
| 3    | Date Picker   | Date        | Date when the expense occurred                  |
| 4    | Text Box      | Description | Optional note or description of the expense     |
| 5    | Button (Primary) | Add Expense / Save Changes | Submit button to insert a new record or save an edited record |
| 6    | Button (Secondary) | Cancel  | Cancel the current edit operation and reset the form |
| 7    | Button (Link)  | Edit       | Load an existing record into the form for editing |
| 8    | Button (Danger) | Delete    | Remove a record from the system                  |

**Figure 2:** Form controls including the Amount number input, Category dropdown selector, Date picker, Description text field, and CRUD operation buttons (Add, Save, Cancel, Edit, Delete).

**Explanation:**
This part of the form captures essential expense details using various input controls:

- The **Number Input** is used for entering the expense amount with decimal precision
- The **Dropdown** restricts category selection to predefined values, ensuring clean and consistent data
- The **Date Picker** provides a calendar-based date selection for the expense date
- The **Text Box** allows optional free-form notes about the expense
- **Buttons** of different types (primary, secondary, link, danger) are used to perform CRUD operations on the records

---

# 4. CRUD Operations

The form supports all basic operations required to manage expense data:

## Insert (Add Expense)

- User fills in the Amount, Category, Date, and optional Description fields
- Clicks the **"Add Expense"** button
- A new expense record is created and stored in the database
- The new record immediately appears at the top of the Expenses List

**Figure 3:** Screenshot showing the form filled with data and the "Add Expense" button.

---

## Display (List All Expenses)

- All expense records belonging to the logged-in user are automatically fetched and displayed in a table
- The table shows **Date**, **Category**, **Amount**, and **Description** columns
- Records are sorted by date (latest first)
- Each row has **Edit** and **Delete** action buttons

**Figure 4:** Expenses List table displaying all saved records with columns for Date, Category, Amount, Description, and action buttons.

---

## Update (Edit Expense)

- User clicks the **"Edit"** button on any row in the Expenses List
- The selected record's data is loaded back into the form fields
- The form heading changes from "Add Expense" to **"Edit Expense"**
- The submit button changes from "Add Expense" to **"Save Changes"**
- A **"Cancel"** button appears to discard the edit
- User modifies the desired fields and clicks **"Save Changes"**
- The updated record is saved and reflected in the table

**Figure 5:** Screenshot showing the form in edit mode — heading shows "Edit Expense", button shows "Save Changes", and Cancel button is visible.

---

## Delete (Remove Expense)

- User clicks the **"Delete"** button (shown in red) on any row
- The record is permanently removed from the database
- The Expenses List is updated to reflect the deletion
- If the deleted record was being edited, the form resets automatically

**Figure 6:** Screenshot showing the Delete button on a record row, and the list after deletion.

---

# 5. Expense History Table

The system displays all saved expense records in a table format.

**Features:**

- Shows **Date**, **Category**, **Amount (₹)**, and **Description** for each record
- Provides action buttons on each row:
  - **Edit** — Load the record into the form for modification
  - **Delete** — Remove the record from the system
- Records are automatically sorted by date (newest first)
- Shows "No expenses yet" when there are no records
- Shows a loading indicator while fetching data

This helps users view and manage all their expense records easily.

**Figure 7:** Expense History Table displaying stored expense records with action buttons (Edit and Delete) on each row.

---

# 6. Advantages of the System

- Simple and intuitive user interface
- Organized expense categorization with predefined categories
- Real-time data management with instant feedback
- User-specific data — each user sees only their own expenses
- Supports decimal precision for accurate financial tracking
- Reduces manual errors through form validation
- Data is used for dashboard analytics and monthly summaries

---

# 7. Conclusion

The **Selvam Expense Management** form is an efficient tool for collecting and managing personal expense data. It provides a clean, user-friendly interface for performing all CRUD operations — Insert, Display, Update, and Delete. The organized data supports dashboard analytics, monthly trend analysis, and better financial decision-making.
