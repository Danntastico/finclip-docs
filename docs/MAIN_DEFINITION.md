There is a library for building mini apps called FinClip. 

It's origin is from china. 
As you can wonder, there are not many resources on internet about this technology. And I want to build programs with this technology but correctly applying all the paradigms behind its architecture. So the idea is to extract all the information from it's official documentation: https://super-apps.ai/mop/document/en/develop/guide/feature.html. 

My idea is to use a webscrapping tool: Firecrawl (Use the Firecrawl MCP) and create a program which is going to crawl and extract all the necessary information to perform this task. 

In the `./sitemap-en` directory I listed all the websites of the documentation. These websites should be crawled and extracted using Firecrawl.


The goal is to build a program which is going to use the firecrawl API to extract and organize all the documentation in the ./fin-clip documentation directory.

First, check the limitations of the Firecrawl free plan for the API, if we need to extract the documentation in phases, create a plan for doin it. 

Choose the language of your preference (but our best choice should be Golang if the Firecrawl API allows it, if not, choose a good language)