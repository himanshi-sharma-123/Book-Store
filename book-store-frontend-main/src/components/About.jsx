import React from "react";

const About = () => {
  return (
    <div className="px-4 lg:px-24 bg-cyan-200 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <h1 className="text-5xl font-bold leading-snug text-black">
          About <span className="text-blue-700">Book Store</span>
        </h1>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          The E-Book Management System is an application tailored for bookstores
          of small to medium sizes. This system streamlines bookstore operations
          by enabling sellers to add new books, images and reference materials
          using a computerized interface. Incorporating modules for book
          inventory, this system facilitates tracking of available books and
          customer profiles. By utilizing this computerized setup, it mitigates
          the risk of losing book or customer records, a common occurrence in
          non-computerized systems. These integrated modules empower booksellers
          to efficiently manage their bookstore, ensuring a more convenient and
          effective approach compared to traditional, non-computerized bookstore
          systems. Book store management is designed to deal with the customer
          queries regarding information about different types of books. This is
          an online system that matches the customer queries regarding the
          author, publishers, title, price, latest updates, storage information,
          upgrades etc. against the information stored in the centralized
          database. The integration of a chatbot on the website significantly
          enhances customer satisfaction by swiftly offering comprehensive book
          details, including categories and genres, through a single chat
          interaction. The customers of today are not only attracted because
          online shopping is very convenient, but also because they have broader
          selections, highly competitive prices, better information about the
          product. Moreover, business owners often offer online shopping options
          at low rates because the overhead expenses in opening and running a
          physical store are higher. Further, with online shopping, their
          products have access to a worldwide market, which increases the number
          of customers from different ethnic groups, adds customer value, and
          overall sustainable in the marketing. To develop an easy to use web
          based interface where users can search for products, view complete
          description of the products.
        </p>
      </div>
    </div>
  );
};

export default About;
