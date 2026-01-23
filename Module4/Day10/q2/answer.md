Database Relationships
What is a Database Relationship?

A database relationship describes how data in one table is connected to data in another table.

In simple words:
 It explains how tables talk to each other using common fields (usually IDs).

Relationships help us:

Avoid duplicate data

Keep data organized

Retrieve related data easily

Example:
In an e-commerce app, customers, orders, and products are related to each other.

Types of Database Relationships

There are three main types of database relationships:

One-to-One (1:1)

One-to-Many (1:N)

Many-to-Many (M:N)

1. One-to-One Relationship (1:1)
Definition

In a one-to-one relationship, one record in Table A is linked to only one record in Table B.

E-commerce Example

User ↔ User Profile

One user has one profile

One profile belongs to one user

Example Tables

users

user_profiles

Diagram
User
  |
  |
Profile

Real-life Use

User login details stored in users

Address and personal info stored in user_profiles

2. One-to-Many Relationship (1:N)
Definition

In a one-to-many relationship, one record in Table A can be linked to many records in Table B.

E-commerce Example

Customer ↔ Orders

One customer can place many orders

Each order belongs to one customer

Example Tables

customers

orders

Diagram
Customer
   |
   |—— Order 1
   |—— Order 2
   |—— Order 3

Real-life Use

A customer places multiple orders over time

Orders table contains customer_id as a foreign key

3. Many-to-Many Relationship (M:N)
Definition

In a many-to-many relationship, multiple records in Table A are linked to multiple records in Table B.

This type always needs a junction (bridge) table.

E-commerce Example

Orders ↔ Products

One order can contain many products

One product can be part of many orders

Example Tables

orders

products

order_items (junction table)