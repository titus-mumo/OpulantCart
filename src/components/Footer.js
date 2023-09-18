import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">OpulantCart™</Link>. All Rights Reserved.
              </span>
              <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"> Done with <span>&#x2764;&#xFE0F;</span></p>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://github.com/titus-mumo" className="mr-4 hover:underline md:mr-6 ">Github</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/titus-mumo-a9971926a/" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://twitter.com/TitusKennedy9" className="mr-4 hover:underline md:mr-6">Twitter</a>
        </li>
        <li>
            <a href="https://www.instagram.com/_tito_ken/" className="hover:underline">Instagram</a>
        </li>
    </ul>
    </div>
</footer>
  )
}
