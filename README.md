This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Sep 20 README.md
Read this file before proceeding.
https://github.com/zubairxshah/classwork-20sep/blob/main/README.md

## Routing
Create 2 folders naming "about" and "products"
Create page.tsx in each folder and add necessary code as given
Access the newly created pages using the route http://localhost:3000/products and http://localhost:3000/about

## Navigation Bar
Now, create a navigation bar component to access each page without writing the route in url field.
create a folder named components and add navbar.tsx file in it.

Navigation component can be placed in any page, but if we place the navigation code in layout.tsx above {children}, we can have a global navigation bar that appears in any page we add in the app.

## Link Tag
First try <a> HTML tag and add a path to each navigation element, but for instant page access without a loading delay, we use <Link> tag instead. This syntax is same as <a>. Look for the code in navbar.tsx.

## Dynamic Product Page
Under the product folder and another folder called "products" and add some code as given in the page.tsx file under products.

Add some items in the product page and Link them with as /product/product1, /product/product3, and /product/product3. As you click the product page you reach a 404 page, but don't worry, we have to make "products" folder a dynamic so we can access the produts as listed.

Wrap "products" as [products] in curly braces, now you can access any product you want instead of a 404 page. Give it a try. This is a we can save a lot of time creating mutiple product pages, this will be taken care by dynamic route.

## Next Lesson
We'll learn about adding database to our product pages and make them even more dynamic by showing the info from a database.

Created by: M. Zubair Shah (GIAIC)