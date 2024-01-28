import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h1 className="text-5xl font-bold text-center">Latest Blog Posts</h1>
      <div className="grid gap-8 my-12 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        <Card className="w-full">
          <img src="https://www.bookgeeks.in/wp-content/uploads/2024/01/Express-Your-Book-Love-A-Simple-Guide-on-Writing-an-Essay-About-Your-Favorite-Reads.jpg" />
          <Link href="https://www.bookgeeks.in/express-your-book-love-simple-guide-to-writing-essays-about-favourite-reads/">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-decoration-line: underline">
              Express Your Book Love: A Simple Guide on Writing an Essay About
              Your Favorite Reads
            </h5>
          </Link>
          <h6 className="font-bold">
            by Guest <span>January 28, 2024</span>
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Discover the alchemy of words as you embark on a journey through
            ‘Express Your Book Love.’ This guide unveils the art of crafting
            heartfelt essays, inviting you to weave prose that mirrors the depth
            of your passion for cherished reads.
          </p>
        </Card>
        <Card className="w-full">
          <img src="https://www.bookgeeks.in/wp-content/uploads/2024/01/Shri-Ram-Janmabhoomi.jpg" />
          <Link href="https://www.bookgeeks.in/must-read-books-on-the-shri-ram-janmabhoomi-movement/">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-decoration-line: underline">
              Must-Read Books on Shri Ram Janmabhoomi Movement: Chapters of
              Courage & Legacy
            </h5>
          </Link>
          <h6 className="font-bold">
            by Sankalpita Singh <span>January 24, 2024</span>
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Embark on a profound journey through the sacred history of Ayodhya
            and the Shri Ram Janmabhoomi Movement. Explore the enduring legacy,
            archaeological revelations, and the unyielding spirit that shaped
            this monumental movement. Discover the cultural hymn echoing through
            generations, celebrated in books that unravel the movement’s
            intellectual depths.
          </p>
        </Card>
        <Card className="w-full">
          <img src="https://www.bookgeeks.in/wp-content/uploads/2024/01/Iffran-Khan-Books.jpg" />
          <Link href="https://www.bookgeeks.in/irrfan-khan-books-beyond-acting/">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-decoration-line: underline">
              Irrfan Khan Beyond Acting: A Literary Journey Through Essential
              Books and Influences
            </h5>
          </Link>
          <h6 className="font-bold">
            by Sankalpita Singh <span>January 18, 2024</span>
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Illuminating the global stage, Irrfan Khan’s versatile legacy
            transcends borders. Explore his journey from acclaimed dramas to
            Hollywood blockbusters. In our homage, discover four must-read
            books, delving into his life, art, and friendship with directors.
            Share your favorite performances and recommendations in the
            comments. Join us in celebrating this cinematic maestro.{" "}
          </p>
        </Card>
        <Card className="w-full">
          <img src="https://www.bookgeeks.in/wp-content/uploads/2023/10/Best-Indian-Fantasy-Novels.jpg" />
          <Link href="https://www.bookgeeks.in/indian-fantasy-novels-unveiling-the-creme-de-la-creme-of-2023/">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-decoration-line: underline">
              Best Indian Fantasy Novels: Unveiling the Crème de la crème of
              2023
            </h5>
          </Link>
          <h6 className="font-bold">
            by Sankalpita Singh <span>October 29, 2023</span>
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            In this article, we have curated a selection of four extraordinary
            Indian fantasy novels, all freshly published in 2023. These literary
            gems represent the pinnacle of Indian fantasy writing for this year,
            showcasing the evolution and expansion of the genre in India. These
            books are a testament to the boundless creativity of Indian authors,
            offering readers a portal to captivating new worlds.{" "}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
